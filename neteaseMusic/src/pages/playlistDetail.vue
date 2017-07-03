<template>
  <div id="m-playlist" class="g-bd4 f-cb">
    <div class="g-mn4" v-if="list.id">
      <div class="g-mn4c">
        <div class="g-wrap6">
          <div class="m-info f-cb">
            <div class="cover u-cover u-cover-dj">
              <img :src="list.coverImgUrl" class="j-img" :data-src="list.coverImgUrl">
              <!--<img src="http://p3.music.126.net/Y33TAK_8JxdfKE8hXqJOJA==/19050138463028113.jpg?param=200y200"-->
              <!--class="j-img" data-src="http://p3.music.126.net/Y33TAK_8JxdfKE8hXqJOJA==/19050138463028113.jpg">-->
              <span class="msk"></span>
            </div>
            <div class="cnt">
              <div class="cntc">
                <div class="hd f-cb">
                  <i class="f-fl u-icn u-icn-13"></i>
                  <div class="tit">
                    <h2 class="f-ff2 f-brk">{{list.name}}</h2>
                  </div>
                </div>
                <div class="user f-cb">
                  <a class="face" href="/user/home?id=291551773"><img
                    :src="list.creator.avatarUrl"></a>
                  <span class="name">
<a href="/user/home?id=291551773" class="s-fc7">{{list.creator.nickname}}</a>
</span>
                  <sup class="u-icn u-icn-84 "></sup>
                  <span class="time s-fc4">{{list.createTime | timeformat}}&nbsp;创建</span>
                </div>
                <div id="content-operation" class="btns f-cb" :data-rid="list.id" data-type="13" data-special="0">
                  <a href="javascript:;" class="u-btn2 u-btn2-2 u-btni-addply f-fl" title="播放" @click="allin"><i><em
                    class="ply"></em>播放</i></a>
                  <a data-res-action="addto" :data-res-id="list.id" data-res-type="13" href="javascript:;"
                     class="u-btni u-btni-add" hidefocus="true" title="添加到播放列表"></a>
                  <a :data-res-id="list.id" data-res-type="13" :data-count="list.subscribedCount" data-res-action="fav"
                     class="u-btni u-btni-fav " href="javascript:;">
                    <i>({{list.subscribedCount}})</i>
                  </a>
                  <a :data-res-id="list.id" data-res-type="13" data-count="1" data-res-action="share"
                     :data-res-name="list.name" :data-res-author="list.creator.nickname" data-res-authors=""
                     :data-res-pic="list.coverImgUrl"
                     class="u-btni u-btni-share " href="javascript:;"><i>({{list.shareCount}})</i></a>
                  <a data-res-id="759153394" data-res-type="13" data-res-action="download" class="u-btni u-btni-dl "
                     href="javascript:;"><i>下载</i></a>
                  <a data-res-action="comment" href="javascript:;" class="u-btni u-btni-cmmt "><i>(<span
                    id="cnt_comment_count">{{list.shareCount}}</span>)</i></a>
                </div>
                <div class="tags f-cb">
                  <b v-if="list.tags.length>0">标签：</b>
                  <a class="u-tag" href="/discover/playlist/?cat=%E5%8D%8E%E8%AF%AD&amp;order=hot"
                     v-for="(i, index) in list.tags"><i>{{i}}</i></a>
                </div>
                <p id="album-desc-dot" class="intr f-brk"><b v-if="list.description!=''">介绍：</b>
                  {{list.description }}
                </p>
                <p id="album-desc-more" class="intr f-brk f-hide"><b v-if="list.description!=''">介绍：</b>
                  {{list.description }}
                </p>
                <div class="f-cb"><a id="album-desc-spread" href="javascript:;" class="s-fc7 f-fr">展开<i
                  class="u-icn u-icn-69"></i></a></div>
              </div>
            </div>
          </div>
          <div class="n-songtb">
            <div class="u-title u-title-1 f-cb">
              <h3>
                <span class="f-ff2">歌曲列表</span>
              </h3>
              <span class="sub s-fc3"><span id="playlist-track-count">{{list.trackCount}}</span>首歌</span>
              <div class="more s-fc3">播放：<strong id="play-count" class="s-fc6">{{list.playCount}}</strong>次</div>
              <div class="out out-list s-fc3">
                <i class="u-icn u-icn-95 f-fl"></i>
                <a data-action="outchain" data-href="/outchain/0/759153394/" class="des s-fc7">生成外链播放器</a>
              </div>
            </div>
            <div id="song-list-pre-cache" data-simple="0">
              <div oncopy="return false;" oncut="return false;" ondragstart="return false;"
                   id="auto-id-xgcPso3r7UDTlBNf">
                <div class="j-flag" id="auto-id-rfTGwS5VKLMzSyCF">
                  <table class="m-table ">
                    <thead>
                    <tr>
                      <th class="first w1">
                        <div class="wp">&nbsp;</div>
                      </th>
                      <th>
                        <div class="wp">歌曲标题</div>
                      </th>
                      <th class="w2">
                        <div class="wp">时长</div>
                      </th>
                      <th class="w3">
                        <div class="wp">歌手</div>
                      </th>
                      <th class="w4">
                        <div class="wp">专辑</div>
                      </th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr id="1931211497259431552" class="even " v-for="(item,index) in list.tracks">
                      <td class="left">
                        <div class="hd ">
                          <span class="ply" @click="play(item)">&nbsp;</span>
                          <span class="num">{{index+1}}</span></div>
                      </td>
                      <td class="">
                        <div class="f-cb">
                          <div class="tt">
                            <div class="ttc"><span class="txt">
                              <!--<a href="/song?id=193121"><b-->
                              <!--title="风云 - (电影《风云-雄霸天下》主题曲)">风云</b>-->
                              <!--</a>-->
                              <router-link :to="{path:'song',query:{id:item.id}}">
                                <b :title="item.name">{{item.name}}</b>
                              </router-link>
                              <!--<span title="电影《风云-雄霸天下》主题曲" class="s-fc8"> - (电影《风云-雄霸天下》主题曲)</span>-->
                              </span>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td class=" s-fc3"><span class="u-dur ">{{item.dt|MillisecondToDate}}</span>
                        <div class="opt hshow"><a class="u-icn u-icn-81 icn-add" href="javascript:;" title="添加到播放列表"
                                                  hidefocus="true" data-res-type="18" :data-res-id="item.id"
                                                  data-res-action="addto" data-res-from="13"
                                                  :data-res-data="list.id"></a><span :data-res-id="item.id"
                                                                                     data-res-type="18"
                                                                                     data-res-action="fav"
                                                                                     class="icn icn-fav"
                                                                                     title="收藏"></span><span
                          :data-res-id="item.id" data-res-type="18" data-res-action="share" :data-res-name="item.name"
                          :data-res-author="item.singer"
                          :data-res-pic="item.al.picUrl"
                          class="icn icn-share" title="分享">分享</span><span :data-res-id="item.id" data-res-type="18"
                                                                          data-res-action="download" class="icn icn-dl"
                                                                          title="下载"></span></div>
                      </td>
                      <td class="">
                        <div class="text" :title="item.singer"><span :title="item.singer">
                          <!--<a class="" href="/artist?id=6491" hidefocus="true">{{item.singer}}</a>-->
                           <router-link :to="{path:'artist',query:{id:a.id}}" hidefocus="true" v-for="(a,index) in item.ar" :key="a.id">{{a.name}}<a v-if="index!=item.ar.length-1">/</a></router-link>
                        </span>
                        </div>
                      </td>
                      <td class="">
                        <div class="text">
                          <!--<a href="/album?id=19480" title="风云-雄霸天下(电影原声大碟)">风云-雄霸天下(电影原声大碟)</a>-->
                          <router-link :to="{path:'album',query:{id:item.al.id}}" :title="item.al.name">{{item.al.name}}</router-link>
                        </div>
                      </td>
                    </tr>
                    </tbody>
                  </table>
                </div>
                <div class="j-flag"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  import {playlistDetail} from  './../service/getDate';

  export default {
    name: 'playlistDetail',
    data () {
      return {
        list: []
      }
    },
    methods: {
        play(item){
            this.$store.commit('addQueue',item);
            this.$store.dispatch('getMusicUrl')
        },
        allin(){
            this.$store.commit('addAll',this.list.tracks);
            this.$store.dispatch('getMusicUrl')
        }
    },
    mounted(){
      playlistDetail(this).get({
        detail: 'detail',
        id: this.$route.query.id
      }).then(res => {
        console.log(res);
        this.list = res.body.playlist;
        this.list.tracks.forEach(function (value, key) {
          value.singer = "";
          value.ar.forEach(function (val, k) {
            value.singer += val.name + '/'
          });
          value.singer = value.singer.substr(0, value.singer.length-1);
        })
      });

    },
    components: {
      playlistDetail
    }
  }
</script>

<style>
  .u-icn, .u-title-1 .out .icon {
    background: url(../image/icon.png) no-repeat 0 9999px;
  }

  .g-bd, .g-bd1, .g-bd2, .g-bd3, .g-bd4, .g-bd5, .g-bd6, .g-bd7 {
    width: 980px;
    min-height: 700px;
    _height: 700px;
    margin: 0 auto;
    background-color: #fff;
    border: 1px solid #d3d3d3;
    border-width: 0 1px;
  }

  .g-bd4 {
    background: url(../image/wrap4.png) repeat-y center 0;
  }

  .g-mn4 {
    float: left;
    width: 100%;
    margin-right: -270px;
  }

  .g-mn4c {
    margin-right: 271px;
  }

  .g-wrap6 {
    padding: 47px 30px 40px 39px;
  }

  .m-info .cover {
    float: left;
    position: relative;
    display: inline;
    margin: 0 -220px 0 0;
  }

  .u-cover-dj {
    width: 200px;
    height: 200px;
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

  .u-cover .msk {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .u-cover .bottom, .u-cover .msk, .n-musicsd .lst .avatar .msk {
    background: url(../image/coverall.png) no-repeat;
    _background: url(../image/coverall.png) no-repeat 0 9999px;
  }

  .u-cover-dj .msk {
    width: 208px;
    height: 208px;
    background-position: 0 -1285px;
    top: -4px;
    left: -4px;
  }

  .m-info .cnt {
    float: right;
    width: 100%;
  }

  .m-info .cntc {
    margin-left: 230px;
  }

  .m-info .hd {
    position: relative;
    margin: 0 0 12px;
    line-height: 24px;
  }

  .f-fl {
    float: left;
  }

  em, i {
    font-style: normal;
    text-align: left;
    font-size: inherit;
  }

  .m-info .tit {
    margin-left: 64px;
    position: relative;
  }

  .m-info .hd h2 {
    line-height: 24px;
    font-size: 20px;
    font-weight: normal;
  }

  .f-brk {
    word-wrap: break-word;
    white-space: normal;
  }

  .f-ff2 {
    font-family: "Microsoft Yahei", Arial, Helvetica, sans-serif;
  }

  .f-cb:after {
    clear: both;
    content: '.';
    display: block;
    height: 0;
    visibility: hidden;
  }

  .m-info .user {
    margin: 0 0 20px;
    line-height: 35px;
  }

  .m-info .user .face {
    margin-right: 10px;
  }

  a, a *, .f-hand, .f-hand * {
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: #333;
  }

  .m-info .user .face, .m-info .user .face img {
    float: left;
    width: 35px;
    height: 35px;
  }

  .m-info .user .name {
    float: left;
  }

  .s-fc7, a.s-fc7:hover {
    color: #0c73c2;
  }

  a:hover {
    text-decoration: underline;
    color: #333;
  }

  .m-info .user .u-icn {
    float: left;
    margin: 9px 0 0 3px;
  }

  .u-icn-84 {
    width: 12px;
    height: 13px;
    background-position: -65px -840px;
  }

  .m-info .user .time {
    margin-left: 15px;
  }

  .s-fc4, a.s-fc4:hover {
    color: #999;
  }

  .m-info .btns {
    margin-bottom: 25px;
    margin-right: -10px;
  }

  .u-btni-addply {
    float: left;
  }

  .u-btn2-2 {
    color: #fff;
    background-position: right -428px !important;
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

  .u-btni-addply i {
    padding: 0 7px 0 8px;
  }

  .u-btn2-2 i {
    color: #fff;
    background-position: 0 -387px;
  }

  .u-btn2 i {
    padding: 0 15px 0 20px;
    pointer-events: none;
  }

  .u-btni-addply i {
    padding: 0 7px 0 8px;
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

  .u-btni-addply .ply {
    float: left;
    width: 20px;
    height: 18px;
    margin: 6px 2px 2px 0;
    background-position: 0 -1622px;
    overflow: hidden;
  }

  .u-btni-add {
    width: 31px;
    margin-left: -3px;
    padding-right: 0 !important;
    background-position: 0 -1588px;
  }

  .u-btni-share, .u-btni-fav, .u-btni-cmmt, .u-btni-dl {
    background-position: right -1020px;
  }

  .u-btni {
    padding: 0 5px 0 0;
    white-space: nowrap;
  }

  .u-btni-fav i {
    background-position: 0 -977px;
  }

  .u-btni-share i, .u-btni-fav i, .u-btni-cmmt i, .u-btni-dl i, .u-btni-unfav i {
    padding-right: 2px !important;
    padding-left: 28px !important;
  }

  .u-btni i {
    padding: 0 7px 0 36px;
  }

  .u-btni, .u-btni i {
    float: left;
    height: 31px;
    line-height: 30px;
    min-width: 23px;
    cursor: pointer;
  }

  .m-info .btns2 .u-btni, .m-info .btns .u-btni {
    margin-right: 6px;
    font-family: simsun, \5b8b\4f53;
  }

  .m-info .btns .u-btni-add {
    margin-right: 5px !important;
  }

  .u-btni-share, .u-btni-fav, .u-btni-cmmt, .u-btni-dl {
    background-position: right -1020px;
  }

  .u-btni, .u-btni:hover {
    color: #333;
    text-decoration: none;
  }

  .u-btni-share i {
    background-position: 0 -1225px;
  }

  .u-btni-dl i {
    background-position: 0 -2761px;
  }

  .u-btni-cmmt i {
    background-position: 0 -1465px;
  }

  .m-info .tags {
    margin: 25px 0 5px;
    line-height: 22px;
  }

  .m-info .tags b {
    float: left;
  }

  .m-info b {
    font-weight: normal;
    color: #666;
  }

  .m-info .tags .u-tag {
    float: left;
    margin: 0px 10px 3px 0;
  }

  .u-tag {
    padding: 0 10px 0 0;
    text-shadow: 0 1px #fdfdfd;
    background-position: right -27px;
  }

  .u-tag, .u-tag:hover {
    color: #777;
    text-decoration: none;
  }

  .u-tag i {
    position: relative;
    zoom: 1;
    padding: 0 3px 0 13px;
    background-position: 0 0;
  }

  .u-tag, .u-tag i {
    float: left;
    height: 22px;
    line-height: 22px;
  }

  .m-info .intr {
    margin-top: 4px;
    line-height: 18px;
    color: #666;
  }

  .f-brk {
    word-wrap: break-word;
    white-space: normal;
  }

  .m-info .intr b {
    display: inline-block;
  }

  .m-info b {
    font-weight: normal;
    color: #666;
  }

  .f-hide, .js-hide {
    display: none !important;
  }

  .s-fc7, a.s-fc7:hover {
    color: #0c73c2;
  }

  .f-fr {
    float: right;
  }

  .u-icn-70 {
    background-position: -45px -520px;
  }

  .u-icn-69, .u-icn-70 {
    width: 11px;
    height: 8px;
    background-position: -65px -520px;
  }

  /*歌曲列表*/

  .n-songtb {
    margin-top: 27px;
  }

  .u-title {
    height: 40px;
    border-bottom: 2px solid #c20c0c;
  }

  .u-title-1 {
    height: 33px;
  }

  h1, h2, h3, h4, h5, h6 {
    font-size: 100%;
  }

  .u-title h3 {
    float: left;
    font-size: 24px;
    font-weight: normal;
  }

  .u-title-1 h3 {
    font-size: 20px;
    line-height: 28px;
  }

  .f-ff2 {
    font-family: "Microsoft Yahei", Arial, Helvetica, sans-serif;
  }

  .s-fc3, a.s-fc3:hover {
    color: #666;
  }

  .u-title .sub {
    float: left;
    margin: 13px 0 0 10px;
  }

  .u-title-1 .sub {
    margin: 9px 0 0 20px;
  }

  .u-title .more {
    float: right;
    margin-top: 14px;
  }

  .u-title-1 .more {
    margin-top: 5px;
  }

  .s-fc6, a.s-fc6:hover {
    color: #c20c0c;
  }

  strong, b {
    font-weight: bold;
  }

  .u-title-1 .out {
    margin-top: 5px;
    float: right;
  }

  .u-title .out-list {
    margin-right: 20px;
  }

  .u-title .out {
    margin-right: 20px;
  }

  .f-fl {
    float: left;
  }

  .u-icn-95 {
    width: 16px;
    height: 16px;
    background-position: -34px -863px;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
    table-layout: fixed;
  }

  .m-table {
    width: 100%;
    border: 1px solid #d9d9d9;
  }

  thead {
    display: table-header-group;
    vertical-align: middle;
    border-color: inherit;
  }

  tr {
    display: table-row;
    vertical-align: inherit;
    border-color: inherit;
  }

  .m-table th, .m-table th .wp, .m-table td, .m-table .ply, .m-table .mv, .m-table .icn, .m-info .edit {
    background: url(../image/table.png) no-repeat 0 9999px;
  }

  .m-table th {
    vertical-align: top;
    text-align: left;
    font-weight: normal;
    color: #666;
  }

  .m-table th {
    height: 38px;
    background-color: #f7f7f7;
    background-position: 0 0;
    background-repeat: repeat-x;
  }

  .m-table .w1 {
    width: 74px;
  }

  .m-table th .wp {
    height: 18px;
    line-height: 18px;
    padding: 8px 10px;
    background-position: 0 -56px;
  }

  .m-table th.first .wp {
    background: none;
  }

  .m-table td {
    padding: 6px 10px;
    line-height: 18px;
    text-align: left;
  }

  .m-table .hd {
    height: 18px;
  }

  .m-table .ply {
    width: 17px;
    height: 17px;
    cursor: pointer;
    background-position: 0 -103px;
  }

  .m-table .ply {
    float: left;
  }

  .m-table .hd .ply {
    float: right;
  }

  .m-table .hd .num {
    width: 25px;
    margin-left: 5px;
    color: #999;
  }

  .m-table .tt {
    float: left;
    width: 100%;
  }

  .m-table .ttc {
    height: 18px;
    margin-right: 20px;
  }

  .m-table .txt {
    position: relative;
    display: inline-block;
    padding-right: 25px;
    margin-right: -25px;
    max-width: 99%;
    height: 20px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .m-table b {
    font-weight: normal;
  }

  .m-table tr:nth-child(odd) td {
    background-color: #f7f7f7;
  }

  user agent stylesheet
  :focus {
    outline: -webkit-focus-ring-color auto 5px;
  }

  .m-table .opt {
    float: left;
  }

  .m-table .hshow {
    display: none;
  }

  .u-icn-13 {
    width: 54px;
    height: 24px;
    background-position: 0 -243px;
  }

  .u-icn, .u-icn2, .u-icn3 {
    display: inline-block;
    overflow: hidden;
    vertical-align: middle;
  }

  .u-icn-81 {
    width: 13px;
    height: 13px;
    background-position: 0 -700px;
  }

  .m-table .u-icn-81 {
    float: left;
    margin-top: 2px;
  }

  .m-table .icn-fav {
    background-position: 0 -174px;
  }

  .m-table .mv, .m-table .icn {
    float: left;
    width: 18px;
    height: 16px;
    margin: 2px 0 0 4px;
    overflow: hidden;
    text-indent: -999px;
    cursor: pointer;
  }

  .m-table .icn-share {
    background-position: 0 -195px;
  }

  .m-table .icn-dl {
    background-position: -81px -174px;
  }

  .m-table .text a {
    white-space: nowrap;
  }

  .m-table .mv, .m-table .icnfix {
    position: absolute;
    top: 0;
    right: 0;
  }

  .m-table .mv {
    width: 23px;
    height: 17px;
    margin: 1px 0 0 0;
    background-position: 0 -151px;
  }

  .m-table .text {
    width: 100%;
    position: relative;
    zoom: 1;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
</style>
