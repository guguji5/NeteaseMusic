import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
import {musicUrl} from './../service/getDate';
import {typesOf} from './../util/util';

const store = new Vuex.Store({
    state: {
        trackQueue:[],
        trackIndex:0,
        song:null,
        duration:0,
        currentTime:0,
        timer:null
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
          state.song.pause();
            state.trackIndex--;
        },
        next(state){
            state.song.pause();
            state.trackIndex++;

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
                     }
                    state.duration=state.trackQueue[state.trackIndex].dt;
                    // state.song.play();//这里play你是mutation的play，而是audio对象的play
                    commit('play')//触发
                    console.log(res);

                })
            }
        }
    }
})

export default store;