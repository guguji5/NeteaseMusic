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
    loading: 0,        //下载进度   单位是s
    lyricObject: {},   //歌词
    currentIndex:0,    //当前显示歌词
    VariableHeight:0,   //歌词高度
    loopStyle:0   //0:loop   1:shuffle    2 one
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
    addAll(state,arr){
      for(var i=arr.length-1; i>=0; i--){
          if (!(state.trackQueue.some(function (val) {
                  return val.id == arr[i].id
              }))) {
              state.trackQueue.unshift(arr[i])
          }
      }
      state.trackIndex=0;
    },
    loopFresh(state){
      state.loopStyle++;
      if(state.loopStyle==3){
          state.loopStyle=0;
      }
    },
    play(state){
      clearInterval(state.timer);
      state.VariableHeight=0;
      if (state.song.paused) {
        console.log('play')
        state.song.play()
        state.timer = setInterval(function () {
          state.currentTime += 1000;
          if (state.currentTime > state.duration) {
              state.currentTime = state.duration;
          }
            // 不能超过loading啊显然 loading是以秒为单位
          // if (state.currentTime > state.loading*1000) {
          //     state.currentTime = (state.loading+1)*1000;
          // }
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
        if (state.trackQueue.length == 0 ) return
        if(state.trackIndex == state.trackQueue.length - 1) state.trackIndex=0;
        state.trackIndex++
        clearInterval(state.timer)
    },
    jump(state,per){
        // state.currentTime=state.duration*per;
        state.song.currentTime=Math.floor(state.currentTime/1000);
    },
    drag(state,per){
        //drag和jump的不同是drag只控制进度条的长短。而jump切了歌的进度。
        //因为所有改变state的事件必须注册在这里。所以就定义了个这个事件
        //思考了一下，还是把控制进度条的事件和歌曲长短的事件分开了
        if(per<=0) per=0;
        if(per>=1) per=1;
        state.currentTime=state.duration*per;
    },
    random(state){
        state.trackIndex=Math.floor(state.trackQueue.length*Math.random());
        clearInterval(state.timer)
    }
  },
  actions: {
    getMusicUrl ({commit, state}) {
      if (state.trackQueue.length > 0) {
        //这里把new Vue的实例传进来
        musicUrl(vm).get({'id': state.trackQueue[state.trackIndex].id}).then(function (res) {
          if (typesOf(state.song).includes('Null')) {
            state.song = new Audio(res.body.data[0].url)
          } else {
            state.song.src = res.body.data[0].url
            state.currentTime = 0
          }
          //等待有下载了，再play
          var isBuffered=true;
          state.song.addEventListener('progress', function () {
            if (this.buffered.length == 1) {
              if(isBuffered){
                  state.duration = state.trackQueue[state.trackIndex].dt
                  commit('play')//触发
                  console.log(res)
                  isBuffered=false;
              }
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


        }),
          lyric(vm).get({'id': state.trackQueue[state.trackIndex].id}).then(function (res) {
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
