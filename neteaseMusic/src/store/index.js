import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import { musicUrl,lyric } from './../service/getDate'
import { typesOf,parseLyric } from './../util/util'

const store = new Vuex.Store({
  state: {
    trackQueue: [],    //播放菜单
    trackIndex: 0,     //当前唱的第几首歌
    song: null,        //new audio对象
    duration: 0,       //歌曲的时长   单位是ms
    currentTime: 0,    //当前唱歌的时间   单位是ms
    timer: null,       //定时器
    loading: 0,        //下载进度
    lyricObject: {},   //歌词
    currentIndex:0,    //当前显示歌词
    VariableHeight:0   //歌词高度
  },
  mutations: {
    addQueue(state, item){
      if (!(state.trackQueue.some(function (val) {
          return val.id == item.id
        }))) {
        state.trackQueue.push(item)
        state.trackIndex=state.trackQueue.length-1;
      }else{
        // console.log(state.trackQueue.indexOf(item));
        state.trackIndex = state.trackQueue.indexOf(item)
      }

    },
    showUrl (state, n) {
      console.log(state.proxyUrl)
    },
    play(state){
      clearInterval(state.timer);
      state.VariableHeight=0;
      if (state.song.paused) {
        console.log('play')
        state.song.play()
        state.timer = setInterval(function () {
          state.currentTime += 1000
          if (state.currentTime > state.duration) {
            state.currentTime = state.duration
          }
          var currentIndex = 0;
          for (var i in state.lyricObject) {
            if (i <= parseInt(state.currentTime)/1000) {
              // 要高亮这句歌词  lyricObj[i]
              currentIndex = state.lyricObject[i].line;

            } else {
              break;
            }
          }
          state.currentIndex = currentIndex;
          if(state.currentIndex>=3){
            state.VariableHeight = (parseInt(state.currentIndex) - 3) * (-32);
          }
        }, 1000)
      } else {
        console.log('pause')
        state.song.pause()
      }
    },
    prev(state){
      if (state.trackQueue.length == 0 || state.trackIndex == 0) return
      state.trackIndex--
      clearInterval(state.timer)
    },
    next(state){
      if (state.trackQueue.length == 0 || state.trackIndex == state.trackQueue.length - 1) return
      state.trackIndex++
      clearInterval(state.timer)
    },
    jump(state,per){
        state.currentTime=state.duration*per;
        state.song.currentTime=Math.floor(state.currentTime/1000);
    }
  },
  actions: {
    getMusicUrl ({commit, state}, This) {
      if (state.trackQueue.length > 0) {
        musicUrl(This).get({'id': state.trackQueue[state.trackIndex].id}).then(function (res) {
          if (typesOf(state.song).includes('Null')) {
            state.song = new Audio(res.body.data[0].url)
          } else {
            state.song.src = res.body.data[0].url
            state.currentTime = 0
          }
          state.song.addEventListener('progress', function () {
            if (this.buffered.length == 1) {
              var range = 0
              var bf = this.buffered
              var time = this.currentTime
              while (!(bf.start(range) <= time && time <= bf.end(range))) {
                range += 1
              }
              var loadStartPercentage = bf.start(range)
              var loadEndPercentage = bf.end(range)
              state.loading = loadEndPercentage - loadStartPercentage
            }
          })
          state.duration = state.trackQueue[state.trackIndex].dt
          commit('play')//触发
          console.log(res)

        }),
          lyric(This).get({'id': state.trackQueue[state.trackIndex].id}).then(function (res) {
           // console.log(res.body.lrc)
            if (res.body.lrc && res.body.lrc.lyric) {
              var lyricObj = parseLyric(res.body.lrc.lyric);
              var line = 0;
              for (var i in lyricObj) {
                lyricObj[i].line = line++;
              }
              state.lyricObject = lyricObj;
            } else {
              state.lyricObject = ""
            }
          })

      }
    }
  }
})

export default store
