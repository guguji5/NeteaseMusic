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
        currentTime:0
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
                state.song.play();
            }else{
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
                    state.duration=state.trackQueue[state.trackIndex].dt
                    state.song.play();
                    console.log(res);

                })
            }
        }
    }
})

export default store;