import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
import {musicUrl} from './../service/getDate';
import {typesOf} from './../util/util';

const store = new Vuex.Store({
    state: {
        trackQueue:[],    //播放菜单
        trackIndex:0,     //当前唱的第几首歌
        song:null,        //new audio对象
        duration:0,       //歌曲的时长
        currentTime:0,    //当前唱歌的时间
        timer:null,       //定时器
        loading:0        //下载进度
    },
    mutations: {
        addQueue(state,item){
            state.trackQueue.push(item);
        },
        showUrl (state,n) {
            console.log(state.proxyUrl)
        },
        play(state){
            if(state.song.paused){
                console.log('play')
                state.song.play();
                state.timer=setInterval(function(){
                    state.currentTime+=1000;
                    if(state.currentTime>state.duration){
                        state.currentTime=state.duration;
                    }
                },1000)
            }else{
                clearInterval(state.timer);
                console.log('pause')
                state.song.pause();
            }
        },
        prev(state){
            if(state.trackQueue.length==0 || state.trackIndex==0) return
            // state.currentTime=0;
            // state.song.pause();
            state.trackIndex--;
            clearInterval(state.timer);
        },
        next(state){
            if(state.trackQueue.length==0 ||state.trackIndex==state.trackQueue.length-1) return
            // state.currentTime=0;
            // state.song.pause();
            state.trackIndex++;
            clearInterval(state.timer);

        }
    },
    actions: {
        getMusicUrl ({commit,state},This) {
            if(state.trackQueue.length>0){
                musicUrl(This).get({'id':state.trackQueue[state.trackIndex].id}).then(function (res) {
                     if(typesOf(state.song).includes('Null')){
                         state.song=new Audio(res.body.data[0].url);
                     }else{
                         state.song.src=res.body.data[0].url;
                         state.currentTime=0;
                     }
                    state.song.addEventListener('progress', function() {
                        if(this.buffered.length==1){
                            var range = 0;
                            var bf = this.buffered;
                            var time = this.currentTime;
                            while(!(bf.start(range) <= time && time <= bf.end(range))) {
                                range += 1;
                            }
                            var loadStartPercentage = bf.start(range);
                            var loadEndPercentage = bf.end(range);
                            state.loading = loadEndPercentage - loadStartPercentage;
                            // console.log(state.loading)
                        }
                    });
                    state.duration=state.trackQueue[state.trackIndex].dt;
                    commit('play')//触发
                    console.log(res);

                })
            }
        }
    }
})

export default store;