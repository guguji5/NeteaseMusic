<template>
  <div class="g-bd" id="m-disc-pl-c">
    <div class="g-wrap p-pl f-pr">
      <div class="u-title f-cb">
        <h3><span class="f-ff2 d-flag">全部</span><a href="javascript:;" class="u-btn2 u-btn2-1 menu d-flag"
                                                   id="cateToggleLink"><i>选择分类<em class="u-icn u-icn-38"></em></i></a>
        </h3>
        <div class="u-btn f-fr u-btn-hot d-flag">
          <a href="/discover/playlist/?order=hot" class="a1" data-order="hot">热门</a>
          <a href="/discover/playlist/?order=new" class="a2" data-order="new">最新</a>
        </div>
      </div>
      <ul class="m-cvrlst f-cb" id="m-pl-container">
        <li v-for="(i, index) in list">
          <div class="u-cover u-cover-1">
            <img class="j-flag"
                 :src="i.coverImgUrl">
            <router-link :to="{path:'playlistDetail',query:{id:i.id}}" :title="i.name" class="msk">
            </router-link>
            <div class="bottom">
              <a class="icon-play f-fr" title="播放" href="javascript:;" data-res-type="13" data-res-id="i.id"
                 data-res-action="play"></a>
              <span class="icon-headset"></span>
              <span class="nb">{{i.playCount}}</span>
            </div>
          </div>
          <p class="dec">
            <router-link :to="{path:'playlistDetail',query:{id:i.id}}" :title="i.name" class="tit f-thide s-fc0">
              {{i.name}}
            </router-link>
          </p>
          <p><span class="s-fc4">by</span>
            <router-link :to="{path:'playlistUser',query:{id:i.userId}}" :title="i.creator.nickname" class="nm nm-icn f-thide s-fc3">
              {{i.creator.nickname}}
            </router-link>
            <sup class="u-icn u-icn-84 "></sup>
          </p>
        </li>
      </ul>
      <div id="m-pl-pager">
        <div class="u-page">
          <a href="javascript:void(0)" class="zbtn zprv js-disabled">上一页</a>
          <a href="javascript:void(0)" class="zpgi js-selected">1</a>
          <a href="/discover/playlist/?order=hot&amp;cat=%E5%85%A8%E9%83%A8&amp;limit=35&amp;offset=35"
             class="zpgi">2</a>
          <a href="/discover/playlist/?order=hot&amp;cat=%E5%85%A8%E9%83%A8&amp;limit=35&amp;offset=70"
             class="zpgi">3</a>
          <a href="/discover/playlist/?order=hot&amp;cat=%E5%85%A8%E9%83%A8&amp;limit=35&amp;offset=105"
             class="zpgi">4</a>
          <a href="/discover/playlist/?order=hot&amp;cat=%E5%85%A8%E9%83%A8&amp;limit=35&amp;offset=140"
             class="zpgi">5</a>
          <a href="/discover/playlist/?order=hot&amp;cat=%E5%85%A8%E9%83%A8&amp;limit=35&amp;offset=175"
             class="zpgi">6</a>
          <a href="/discover/playlist/?order=hot&amp;cat=%E5%85%A8%E9%83%A8&amp;limit=35&amp;offset=210"
             class="zpgi">7</a>
          <a href="/discover/playlist/?order=hot&amp;cat=%E5%85%A8%E9%83%A8&amp;limit=35&amp;offset=245"
             class="zpgi">8</a>
          <span class="zdot">...</span>
          <a href="/discover/playlist/?order=hot&amp;cat=%E5%85%A8%E9%83%A8&amp;limit=35&amp;offset=1365" class="zpgi">40</a>
          <a href="/discover/playlist/?order=hot&amp;cat=%E5%85%A8%E9%83%A8&amp;limit=35&amp;offset=35"
             class="zbtn znxt">下一页</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {playlist} from  './../service/getDate';
  //  import Vue from 'vue'
  //  import Router from 'vue-router';
  //
  //  Vue.use(Router);
  export default {
    name: 'playlist',
    data () {
      return {
//        msg: 'this is the content of area'
        list: []
      }
    },
    methods: {
//      turn (id) {
//        console.log(id)
//        this.$router.push({ name: 'playlistDetail', params:{ id: id }})
//      },
//      turnUser(userId){
//        console.log(userId)
//      }
    },
    mounted(){

      playlist(this).get({
        playlist: 'playlist',
        limit: 35,
        order: 'hot'
      }).then(res => {
        console.log(res);
        this.list = res.body.playlists;
      });

    },
    components: {
      playlist
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .g-bd, .g-bd1, .g-bd2, .g-bd3, .g-bd4, .g-bd5, .g-bd6, .g-bd7 {
    width: 980px;
    min-height: 700px;
    _height: 700px;
    margin: 0 auto;
    background-color: #fff;
    border: 1px solid #d3d3d3;
    border-width: 0 1px;
  }

  .g-wrap {
    padding: 40px;
  }

  .f-pr {
    position: relative;
    zoom: 1;
  }

  div {
    display: block;
  }

  .u-title {
    height: 40px;
    border-bottom: 2px solid #c20c0c;
  }

  .f-cb {
  }

  .u-title h3 {
    float: left;
    font-size: 24px;
    font-weight: normal;
  }

  .f-ff2 {
    font-family: "Microsoft Yahei", Arial, Helvetica, sans-serif;
  }

  .u-title .menu {
    _position: absolute;
    font-size: 12px;
    font-weight: normal;
    margin: 2px 0 0 12px;
  }

  .u-btn2, .u-btn2:hover {
    text-decoration: none;
  }

  .u-btn2 {
    padding: 0 5px 0 0;
    white-space: nowrap;
  }

  .u-btn2, .u-btn2 i, .u-btn2 .icn, .u-btni, .u-btni i, .u-tag, .u-tag i, .u-btni-addply .ply {
    background: url(../image/button2.png) no-repeat 0 9999px;
  }

  .u-btn2-1 {
    color: #333;
    background-position: right -100px;
  }

  .u-title .menu i {
    color: #0c73c2 !important;
    padding: 0 10px 0 15px;
    _padding-right: 20px;
  }

  .u-btn2-1 i {
    color: #333;
    background-position: 0 -59px;
  }

  .u-btn2 i {
    padding: 0 15px 0 20px;
    pointer-events: none;
  }

  .u-btn2, .u-btn2 i {
    display: inline-block;
    height: 31px;
    line-height: 31px;
    overflow: hidden;
    vertical-align: top;
    text-align: center;
    cursor: pointer;
  }

  .u-icn, .u-icn2, .u-icn3 {
    display: inline-block;
    overflow: hidden;
    vertical-align: middle;
  }

  .u-icn, .u-title-1 .out .icon {
    background: url(../image/icon.png) no-repeat 0 9999px;
  }

  .u-title .menu .u-icn-38 {
    margin-left: 5px;
    _position: absolute;
    _top: 13px;
  }

  .u-icn-38 {
    width: 8px;
    height: 5px;
    background-position: -70px -543px;
  }

  .u-btn {
    display: inline-block;
  }

  /*.u-btn, div.u-page a, div.u-page a.js-selected, div.u-page a.znxt.js-disabled, div.u-page a.zprv.js-disabled {*/
  /*background: url(../image/button.png) no-repeat 0 9999px;*/
  /*}*/

  .f-fr {
    float: right;
  }

  .u-title .u-btn-hot .a1, .u-title .u-btn-new .a2, .u-title .u-btn-area .a2, .u-title .u-btn-song .a1 {
    color: #fff;
  }

  .u-title .u-btn .a1, .u-title .u-btn .a2 {
    float: left;
    width: 46px;
    height: 29px;
    line-height: 29px;
    text-align: center;
  }

  .f-cb:after {
    clear: both;
    content: '.';
    display: block;
    height: 0;
    visibility: hidden;
  }

  .p-pl .m-cvrlst {
    margin: 30px 0 0 -50px;
  }

  .m-cvrlst li {
    float: left;
    display: inline-block;
    width: 140px;
    height: 188px;
    overflow: hidden;
    padding: 0 0 30px 50px;
    line-height: 1.4;
  }

  .u-cover-1 {
    width: 140px;
    height: 140px;
  }

  .u-cover {
    position: relative;
    display: block;
  }

  .u-cover img {
    display: block;
    width: 100%;
    height: 100%;
  }

  img, .txt {
    border: 0;
  }

  .u-cover-1 .msk {
    background-position: 0 0;
  }

  .u-cover .msk {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .u-cover .bottom, .u-cover .msk, .n-musicsd .lst .avatar .msk {
    background: url(../image/coverall.png) no-repeat;
  }

  .u-cover .bottom {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 27px;
    background-position: 0 -537px;
    color: #ccc;
  }

  .u-cover .icon-play:hover {
    background-position: 0 -60px;
  }

  .u-cover .icon-play {
    position: absolute;
    right: 10px;
    bottom: 5px;
    width: 16px;
    height: 17px;
    background-position: 0 0;
  }

  .u-cover .icon-headset, .u-cover .icon-play {
    display: inline-block;
  }

  .u-cover .ply, .u-cover .icon-headset, .u-cover .icon-play, .u-face .msk, .n-note .head .msk, .icn-vip, .icn-daren, .u-checkbox {
    background: url(../image/iconall.png) no-repeat;
  }

  .u-cover .icon-headset {
    float: left;
    width: 14px;
    height: 11px;
    background-position: 0 -24px;
    margin: 9px 5px 9px 10px;
  }

  .u-cover .nb {
    float: left;
    margin: 7px 0 0 0;
  }

  .m-cvrlst li .dec {
    margin: 8px 0 3px;
    font-size: 14px;
  }

  .m-cvrlst li p {
    width: 100%;
  }

  .m-cvrlst li .tit {
    display: inline-block;
    max-width: 100%;
    _width: 100%;
    vertical-align: middle;
  }

  .s-fc0, a.s-fc0:hover {
    color: #000;
  }

  .f-thide {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-wrap: normal;
  }

  .s-fc4, a.s-fc4:hover {
    color: #999;
  }

  .m-cvrlst li .nm {
    display: inline-block;
    max-width: 85%;
    vertical-align: middle;
  }

  .m-cvrlst li .nm-icn {
    max-width: 76%;
  }

  .s-fc3, a.s-fc3:hover {
    color: #666;
  }

  .f-thide {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-wrap: normal;
  }

  .m-cvrlst li p .u-icn {
    margin-top: -1px;
    _margin-top: -3px;
  }

  .u-icn-84 {
    width: 12px;
    height: 13px;
    background-position: -65px -840px;
  }

  .u-icn, .u-icn2, .u-icn3 {
    display: inline-block;
    overflow: hidden;
    vertical-align: middle;
  }

  div.u-page {
    margin: 20px 0;
    text-align: center;
  }

  /*.u-btn, div.u-page a, div.u-page a.js-selected, div.u-page a.znxt.js-disabled, div.u-page a.zprv.js-disabled {*/
  /*background: url(../image/button.png) no-repeat 0 9999px;*/
  /*}*/

  div.u-page .zbtn {
    width: 69px;
    height: 24px;
    line-height: 24px;
    color: #333;
    text-align: left;
    padding: 0;
  }

  div.u-page .zbtn, div.u-page .zpgi {
    margin: 0 1px 0 2px;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 2px;
    vertical-align: middle;
  }

  .u-btn, div.u-page a, div.u-page a.js-selected, div.u-page a.znxt.js-disabled, div.u-page a.zprv.js-disabled {
    background: url(../image/button.png) no-repeat 0 9999px;
  }

  .u-btn-hot {
    width: 93px;
    height: 29px;
    background-position: 0 0;
  }

  div.u-page .zpgi {
    height: 22px;
    padding: 0 8px;
    background-color: #fff;
    line-height: 22px;
  }

  div.u-page .zpgi:hover {
    border-color: #666;
  }

  div.u-page a:hover {
    text-decoration: none;
  }

  div.u-page a.zprv.js-disabled, div.u-page a.zprv.js-disabled:hover {
    background-position: 0 -620px;
    color: #cacaca;
    cursor: default;
  }

  div.u-page a.js-selected, div.u-page a.js-selected:hover {
    background-position: 0 -650px;
    border-color: #A2161B;
    color: #fff;
    cursor: default;
  }

  div.u-page .zbtn, div.u-page .zpgi {
    margin: 0 1px 0 2px;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 2px;
    vertical-align: middle;
  }

  div.u-page .zbtn {
    width: 69px;
    height: 24px;
    line-height: 24px;
    color: #333;
    text-align: left;
    padding: 0;
  }

  div.u-page .zprv {
    width: 47px;
    padding-left: 22px;
    background-position: 0 -560px;
  }

  div.u-page .znxt {
    width: 57px;
    padding-left: 12px;
    background-position: -75px -560px;
  }
</style>
