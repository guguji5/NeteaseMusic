import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        proxyUrl:'http://localhost:3000'
    },
    mutations: {
        showUrl (state,n) {
            console.log(state.proxyUrl)
        }
    }
})

export default store;