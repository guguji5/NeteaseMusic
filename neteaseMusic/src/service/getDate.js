import Vue from "vue";
import VueResource from "vue-resource";
Vue.use(VueResource);

var apiContext='/api/';//因为反向代理必须有个标识，为此而配

/*
* this换成  vm  老传参太蠢了
*
*
*
*
*
*
*
*
*
* */

//获取banner，主页面
let banner=This=>{
    return This.$resource(apiContext+'banner');
}
//尝试使用bind改变作用域，可是并不好用
// let banner=function(){
//     return this.$resource('/api/banner');
// }

//获取content，主页面，主内容区域
let personalized=function(This){
    return This.$resource(apiContext+'personalized');
}
//获取主页面上的电台
let djprogram=This=>This.$resource(apiContext+'personalized/djprogram');

//获取用户歌单
let playlist = This =>This.$resource(apiContext+'top/{playlist}');

//获取歌单详情
let playlistDetail = This =>This.$resource(apiContext+'playlist/{detail}');

//获取歌曲url
let musicUrl= This => This.$resource(apiContext+'music/url?id={id}');

//获取歌词
let lyric= This => This.$resource(apiContext+'lyric?id={id}');

//获取热门歌手
let hotArtists= This => This.$resource(apiContext+'top/{artists}');

//获取歌手详情
let artistDetail = This =>This.$resource(apiContext+'artists?id={id}');

export {banner,personalized,djprogram,playlist,playlistDetail,musicUrl,lyric,hotArtists,artistDetail};
