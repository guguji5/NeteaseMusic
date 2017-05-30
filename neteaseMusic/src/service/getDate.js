import Vue from "vue";
import VueResource from "vue-resource";
Vue.use(VueResource);

let banner=function(This){
    return This.$resource('/api/banner');
}

export {banner};