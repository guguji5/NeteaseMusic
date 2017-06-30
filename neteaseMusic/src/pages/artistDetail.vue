<template>
  <div class="g-bd4 f-cb">
    <div class="g-mn4">
      <div class="g-mn4c">
        <div class="g-wrap6" v-if="list.artist">
          <div class="n-artist f-cb">
            <div class="btm">
              <h2 id="artist-name" :data-rid="list.artist.id" class="sname f-thide sname-max" :title="list.artist.name+ '-'+list.artist.alias[0]">{{list.artist.name}}</h2>
              <h3 id="artist-alias" class="salias f-thide" :title="list.artist.name+ '-'+list.artist.alias[0]">
                {{list.artist.alias[0]}}
              </h3>
            </div>
            <img :src="list.artist.picUrl+'?param=640y300'">
            <div class="mask f-alpha"></div>
            <a id="artist-sub" href="javascript:void(0)" class="btnfav f-tid">收藏</a>
          </div>
          <ul id="m_tabs" class="m-tabs f-cb">
            <li class="fst"><a href="/artist?id=2116" class="z-slt"><em>热门50单曲</em></a></li>
            <li><a href="/artist/album?id=2116"><em>所有专辑</em></a></li>
            <li><a href="/artist/mv?id=2116"><em>相关MV</em></a></li>
            <li><a href="/artist/desc?id=2116"><em>歌手介绍</em></a></li>
          </ul>
          <div id="artist-top50" class="n-top50">
            <div class="m-info">
              <div id="content-operation" class="btns f-cb" data-rid="2116" data-type="2">
                <a data-res-action="play" data-res-id="2116" data-res-type="2" href="javascript:;"
                   class="u-btn2 u-btn2-2 u-btni-addply f-fl" hidefocus="true" title="播放"><i><em class="ply"></em>播放</i></a>
                <a data-res-action="addto" data-res-id="2116" data-res-type="2" href="javascript:;"
                   class="u-btni u-btni-add" hidefocus="true" title="添加到播放列表"></a>
                <a data-res-id="2116" data-res-type="2" data-res-action="fav" href="javascript:;"
                   class="u-btni u-btni-fav" hidefocus="true" :data-res-name="list.artist.name+' 热门50单曲'"><i>收藏热门50</i></a>
              </div>
            </div>
            <div class="f-cb">
              <div id="song-list-pre-cache" data-key="track_artist_top-2116" data-simple="0">
                <div oncopy="return false;" oncut="return false;" ondragstart="return false"
                     id="auto-id-q7Uwfnzh799I9TD7">
                  <div class="j-flag" id="auto-id-W7qJbkqNXR9LuQZn">
                    <table class="m-table m-table-1 m-table-4">
                      <tbody>
                      <tr id="" class="even" v-for=" (item,index) in list.hotSongs">
                        <td class="w1">
                          <div class="hd">
                            <span @click="play(item)" :data-res-id="item.id" data-res-type="18" data-res-action="play" data-res-from="2" :data-res-data="item.ar[0].id" class="ply ">&nbsp;</span>
                            <span class="num">{{index+1}}</span>
                          </div>
                        </td>
                        <td class="">
                          <div class="f-cb">
                            <div class="tt">
                              <div class="ttc">
                                <span class="txt">
                                  <a :href="'/song?id='+item.id"><b :title="item.name">{{item.name}}</b></a>
                                  <span v-if="item.mv && item.mv!=0" :data-res-id="item.id" data-res-action="mv" title="播放mv" class="mv">MV</span>
                                </span>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td class="w2-1 s-fc3">
                          <span class="u-dur ">{{item.dt | MillisecondToDate }}</span>
                          <div class="opt hshow">
                            <a class="u-icn u-icn-81 icn-add" href="javascript:;" title="添加到播放列表" hidefocus="true" data-res-type="18" :data-res-id="item.id"
                               data-res-action="addto" data-res-from="2" :data-res-data="item.ar[0].id"></a>
                            <span :data-res-id="item.id" data-res-type="18" data-res-action="fav" class="icn icn-fav" title="收藏"></span>
                            <span :data-res-id="item.id" data-res-type="18" data-res-action="share" :data-res-name="item.name"
                                  :data-res-author="item.ar[0].name" :data-res-pic="item.al.picUrl" class="icn icn-share" title="分享">分享</span>
                            <span :data-res-id="item.id" data-res-type="18" data-res-action="download" class="icn icn-dl" title="下载"></span>\
                          </div>
                        </td>
                        <td class="w4">
                          <div class="text"><a :href="'/album?id='+item.al.id" :title="item.al.name">{{item.al.name}}</a></div>
                        </td>
                        <td class="w5"><span class="hot u-hot"><i :style="'width:'+item.pop+'%'"><i></i></i></span></td>
                      </tr>

                      </tbody>
                    </table>
                  </div>
                  <div class="j-flag">

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>

  import { artistDetail } from  './../service/getDate'

  export default {
    name: 'artistDetail',
    data () {
      return {
        list: {}
      }
    },
    methods: {
      play(item){
        this.$store.commit('addQueue', item)
        this.$store.dispatch('getMusicUrl', this)
      }
    },
    mounted(){
      artistDetail(this).get({'id': this.$route.query.id}).then(function (res) {
        console.log(res);
        this.list = res.body;
        console.log(this.list.artist);

      })

    },
    components: {}
  }
</script>

<style>
  .g-bd4 {
    background: url(../image/wrap4.png) repeat-y center 0;
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
  .n-artist {
    position: relative;
    zoom: 1;
    height: 333px;
    margin-top: -20px;
  }
  .f-thide {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-wrap: normal;
  }
  .n-artist .sname {
    float: left;
    max-width: 100%;
    height: 34px;
    line-height: 24px;
    font-weight: normal;
    font-size: 24px;
    color: #333;
  }
  .n-artist .sname-max {
    max-width: 75%;
  }
  .n-artist .salias {
    float: left;
    max-width: 23%;
    padding-left: 10px;
    font-size: 14px;
    line-height: 32px;
    color: #999;
    font-weight: normal;
  }
  img, .txt {
    border: 0;
  }
  .n-artist img, .n-artist .mask {
    display: block;
    width: 640px;
    height: 300px;
  }
  .n-artist .mask {
    background: url(../image/ban_mask.png) no-repeat;
  }
  .n-artist .mask {
    position: absolute;
    top: 34px;
    left: 0;
  }
  .n-sltlyr .icn, .n-mvlist .mvpic .btn, .n-artist .btn-rz, .n-artist .btnfav {
    background: url(../image/iconall.png) no-repeat;
  }
  .n-artist .btnfav {
    display: block;
    position: absolute;
    bottom: 18px;
    right: 20px;
    width: 76px;
    height: 32px;
    background-position: 0 -500px;
    _background-position: 0 0;
  }
  .f-tid {
    text-indent: -9999px;
  }
  .f-cb:after {
    clear: both;
    content: '.';
    display: block;
    height: 0;
    visibility: hidden;
  }
  .m-tabs, .m-tabs a, .m-tabs em, .m-tabs1 a, .m-tabs1 em {
    background: url(../image/tab.png) no-repeat 0 9999px;
  }
  .m-tabs {
    height: 39px;
    border: 1px solid #ccc;
    border-width: 0 1px;
    background-position: 0 0;
    background-repeat: repeat-x;
  }
  .m-tabs li, .m-tabs a, .m-tabs em {
    float: left;
    height: 39px;
    font-size: 14px;
  }
  .m-tabs li {
    position: relative;
    left: -1px;
  }
  .m-tabs a.z-slt {
    background-position: left -90px;
  }
  .m-tabs em {
    height: 37px;
    width: 134px;
    padding: 2px 2px 0 0;
    line-height: 37px;
    cursor: pointer;
    text-align: center;
  }
  .m-tabs a.z-slt em {
    background-position: right -90px;
  }
  .n-top50 .btns {
    margin: 20px 0 10px;
  }
  .u-btn2, .u-btn2 i, .u-btn2 .icn, .u-btni, .u-btni i, .u-tag, .u-tag i, .u-btni-addply .ply {
    background: url(../image/button2.png) no-repeat 0 9999px;
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
  .u-btn2 {
    padding: 0 5px 0 0;
    white-space: nowrap;
  }
  .u-btn2, .u-btn2:hover {
    text-decoration: none;
  }
  .u-btn2-2 {
    color: #fff;
    background-position: right -428px;
  }
  .u-btni-addply {
    float: left;
  }
  .u-btn2 i {
    padding: 0 15px 0 20px;
    pointer-events: none;
  }
  .u-btn2-2 i {
    color: #fff;
    background-position: 0 -387px;
  }
  .u-btni-addply i {
    padding: 0 7px 0 8px;
  }
  .u-btni-addply .ply {
    float: left;
    width: 20px;
    height: 18px;
    margin: 6px 2px 2px 0;
    background-position: 0 -1622px;
    overflow: hidden;
  }
  .u-btni, .u-btni:hover {
    color: #333;
    text-decoration: none;
  }
  .u-btni-add {
    width: 31px;
    margin-left: -3px;
    padding-right: 0;
    background-position: 0 -1588px;
  }
  .m-info .btns .u-btni-add {
    margin-right: 5px;
  }
  .u-btni, .u-btni i {
    float: left;
    height: 31px;
    line-height: 30px;
    min-width: 23px;
    cursor: pointer;
  }
  .u-btni {
    padding: 0 5px 0 0;
    white-space: nowrap;
  }
  .u-btni-share, .u-btni-fav, .u-btni-cmmt, .u-btni-dl {
    background-position: right -1020px;
  }
  .m-info .btns2 .u-btni, .m-info .btns .u-btni {
    margin-right: 6px;
    font-family: simsun,\5b8b\4f53;
  }
  .u-btni i {
    padding: 0 7px 0 36px;
  }
  .u-btni-share i, .u-btni-fav i, .u-btni-cmmt i, .u-btni-dl i, .u-btni-unfav i {
    padding-right: 2px;
    padding-left: 28px;
  }
  .u-btni-fav i {
    background-position: 0 -977px;
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
  .m-table-4, .m-table-5 {
    border: none;
  }
  tbody {
    display: table-row-group;
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
  .m-table td {
    padding: 6px 10px;
    line-height: 18px;
    text-align: left;
  }
  .m-table .w1 {
    width: 74px;
  }
  .m-table tr:nth-child(odd) td {
    background-color: #f7f7f7;
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
  .m-table .mv, .m-table .icn {
    float: left;
    width: 18px;
    height: 16px;
    margin: 2px 0 0 4px;
    overflow: hidden;
    text-indent: -999px;
    cursor: pointer;
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
  .m-table-1 .w2-1 {
    width: 69px;
  }
  .m-table .opt {
    float: left;
  }
  .m-table .hshow {
    display: none;
  }
  .u-icn, .u-title-1 .out .icon {
    background: url(../image/icon.png) no-repeat 0 9999px;
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

  a:hover {
    text-decoration: underline;
    color: #333;
  }
  .u-icn-81:hover {
    background-position: -22px -700px;
  }
  .m-table .u-icn-81 {
    float: left;
    margin-top: 2px;
  }
  .m-table .icn-fav {
    background-position: 0 -174px;
  }
  .m-table .icn-fav:hover {
    background-position: -20px -174px;
  }
  .m-table .icn-share {
    background-position: 0 -195px;
  }
  .m-table .icn-share:hover {
    background-position: -20px -195px;
  }
  .m-table .icn-dl {
    background-position: -81px -174px;
  }
  .m-table .icn-dl:hover {
    background-position: -104px -174px;
  }
  .m-table .w4 {
    width: 20%;
  }
  .m-table .text {
    width: 100%;
    position: relative;
    zoom: 1;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .m-table .text a {
    white-space: nowrap;
  }
  .m-table .w5 {
    width: 120px;
  }
  .u-icn3, .u-hot, .u-hot i {
    background: url(../image/table.png) no-repeat 0 9999px;
  }
  .u-hot {
    display: block;
    position: relative;
    width: 100px;
    background-position: 0 -240px;
    line-height: normal;
  }
  .u-hot, .u-hot i {
    display: block;
    height: 8px;
  }
  .u-hot i {
    overflow: hidden;
    padding: 0 4px;
    background-position: right -318px;
  }
  .u-hot i i {
     margin-left: -4px;
     padding: 0 0 0 4px;
     background-position: 0 -304px;
   }
</style>
