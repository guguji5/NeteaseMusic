<template>
    <div class="g-btmbar">
        <div class="m-playbar m-playbar-unlock" style="top: -53px; visibility: visible;" id="auto-id-HRnJkZ1eTFUQfWG1">
            <div class="updn">
                <div class="left f-fl"><a href="javascript:;" class="btn" hidefocus="true" data-action="lock"></a></div>
                <div class="right f-fl"></div>
            </div>
            <div class="bg"></div>
            <div class="hand" title="展开播放条"></div>
            <div class="wrap" id="g_player" style="margin-left: -498.5px;">
                <div class="btns">
                    <a href="javascript:;" @click="prev" class="prv" title="上一首(ctrl+←)">上一首</a>
                    <a href="javascript:;" @click="play" class="ply j-flag pas" title="播放/暂停(p)">播放/暂停</a>
                    <a href="javascript:;" @click="next" class="nxt" title="下一首(ctrl+→)">下一首</a>
                </div>
                <div class="head j-flag"><img :src="songDetail.al.picUrl"><a
                        href="/song?id=406072138" hidefocus="true" class="mask"></a></div>
                <div class="play">
                    <div class="j-flag words">
                        <a hidefocus="true" href="/song?id=406072138" class="f-thide name fc1 f-fl"
                           :title="songDetail.name">{{songDetail.name}}</a>
                        <a hidefocus="true" href="/mv?id=5401017" class="mv f-fl" title="MV"></a>
                        <span class="by f-thide f-fl">
                <span :title="songDetail.singer">
                  <a class="" href="/artist?id=11760" hidefocus="true">{{songDetail.singer}}</a>
                </span>
              </span>
                        <a href="" class="src" title="来自歌手"></a></div>
                    <div class="m-pbar">
                        <div class="barbg j-flag">
                            <div class="rdy" :style="{ width: 100000*loading/duration+'%'}" @click="jump"></div>
                            <!--bufferd返回的是秒，duration是毫秒-->
                            <div class="cur" :style="{ width: 100*currentTime/duration + '%' }">
                  <span class="btn f-tdn f-alpha z-load">
                    <i :style="{visibility: loading>0 ? 'hidden' : 'visible'}"></i><!--等待转圈的效果-->
                  </span>
                            </div>
                        </div>
                        <span class="j-flag time"><em>{{currentTime | MillisecondToDate}}</em> / {{duration | MillisecondToDate}}</span>

                    </div>
                </div>
                <div class="oper f-fl">
                    <a href="javascript:;" hidefocus="true" data-action="like" class="icn icn-add j-flag"
                       title="收藏">收藏</a>
                    <a href="javascript:;" hidefocus="true" data-action="share" class="icn icn-share" title="分享">分享</a>
                </div>
                <div class="ctrl f-fl f-pr j-flag">
                    <div class="m-vol" style="visibility:hidden;" id="auto-id-sV8D5nXxNA8tcIPX">
                        <div class="barbg"></div>
                        <div class="vbg j-t" id="auto-id-bRHgLaBChatSILFT">
                            <div class="curr j-t" style="height: 74.4px;"></div>
                            <span class="btn f-alpha j-t" style="top: 16.2px;"></span></div>
                    </div>
                    <a href="javascript:;" hidefocus="true"  class="icn icn-vol"></a>
                    <a href="javascript:;" @click="loopChange" class="icn" v-bind:class="loopStyle" title="循环"></a>
                    <span class="add f-pr">
                    <span class="tip" style="display:none;">已添加到播放列表</span>
                    <a href="javascript:;" title="播放列表" hidefocus="true" data-action="panel" class="icn icn-list s-fc3"
                       @click="isDisplay = !isDisplay;">
                        <!--click事件写成行内的就行。-->
                        {{trackQueue.length}}
                    </a>
                    </span>
                    <div class="tip tip-1" style="display:none;">循环</div>
                </div>
            </div>
            <div class="list" :class="{ is_display: isDisplay }" id="g_playlist">
                <div class="listhd">
                    <div class="listhdc">
                        <h4>播放列表(<span class="j-flag">{{trackQueue.length}}</span>)</h4>
                        <a href="javascript:;" class="addall" data-action="likeall"><span class="ico ico-add"></span>收藏全部</a><span
                            class="line"></span>
                        <a href="javascript:;" class="clear" data-action="clear"><span class="ico icn-del"></span>清除</a>
                        <p class="lytit f-ff0 f-thide j-flag">{{songDetail.name}}</p>
                        <span class="close" @click="isDisplay=true">关闭</span>
                    </div>
                </div>
                <div class="listbd">
                    <img class="imgbg j-flag" id="auto-id-C722QCA4E3lmQvz3"
                         src="http://music.163.com/api/img/blur/1366692955577181" style="top: -360px;">
                    <div class="msk"></div>
                    <div class="listbdc j-flag" id="auto-id-Nk9r1bFA8yVZLR8R">
                        <ul class="f-cb">
                            <li v-if="trackQueue.length>0" :class="[{ zsel: (trackIndex==index) }]" data-id="406072138"
                                data-action="play" v-for="(item,index) in trackQueue">
                                <div class="col col-1">
                                    <div class="playicn"></div>
                                </div>
                                <div class="col col-2">{{item.name}}</div>
                                <div class="col col-3">
                                    <div class="icns"><i class="ico icn-del" title="删除" data-id="406072138"
                                                         data-action="delete">删除</i><i class="ico ico-dl" title="下载"
                                                                                       data-id="406072138"
                                                                                       data-action="download">下载</i><i
                                            class="ico ico-share" title="分享" data-id="406072138"
                                            data-action="share">分享</i><i
                                            class="j-t ico ico-add" title="收藏" data-id="406072138"
                                            data-action="like">收藏</i></div>
                                </div>
                                <div class="col col-4"><span :title="item.singer"><a class="" href="/artist?id=11760"
                                                                                     hidefocus="true">{{item.singer}}</a></span>
                                </div>
                                <div class="col col-5">{{item.dt | MillisecondToDate}}</div>
                                <div class="col col-6"><a href="/artist?id=11760&amp;_hash=songlist-406072138"
                                                          class="ico ico-src"
                                                          title="来自歌手" data-action="link">来源</a></div>
                            </li>

                        </ul>
                    </div>
                    <div class="bline j-flag" id="auto-id-cnKoPGHzCSkL1oiX"><span class="scrol" hidefocus="true"
                                                                                  style="height: 30px; display: block; top: 0px;"></span>
                    </div>
                    <div class="ask j-flag" id="auto-id-52msadNJ3oUr4IXg">
                        <a class="ico ico-ask"></a>
                    </div>
                    <div class="upload j-flag"><a href="/lyric/up?id=406072138">上传歌词</a><a data-action="close"
                                                                                           href="/lyric/report?id=406072138">报错</a>
                    </div>
                    <div class="msk2"></div>
                    <div class="listlyric j-flag" id="auto-id-GwX1QInW848brZi3">

                        <div class="position" :style="{ top: VariableHeight + 'px' }">
                            <p v-if="lyricObject!=''" :data-time="lyric.time" v-for="(lyric,index) in lyricObject"  :class="[{ zsel: (currentIndex==lyric.line) }]">
                                {{lyric.text}}</p>
                            <p class="j-flag" v-else>无歌词</p>
                        </div>
                        <!---->
                        <!---->
                        <!--<p class="j-flag" v-if="lyricObject!=''" :data-time="lyric.time" v-for="lyric in lyricObject">-->
                            <!--{{lyric.text}}</p>-->
                        <!--<p class="j-flag">无歌词</p>-->
                    </div>
                    <div class="bline bline-1 j-flag" id="auto-id-S1nHGo6kcOHCmmNc">
              <span class="scrol scrol-1 j-flag" hidefocus="true" id="auto-id-WtLt5o8WrU2cbmQc"
                    style="height: 37.859px; display: block; top: 0px;"></span>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    import Vue from 'vue'
    import filters from './../service/filters';
    Vue.filter('MillisecondToDate', filters['MillisecondToDate']);
    //  这里为啥需要自己定义个filter不能取到main里边的filter
    export default {
        name: 'player',
        data () {
            return {
                isDisplay: true
            }
        },
        methods: {
            loopChange(){
                this.$store.commit('loopFresh');
            },
            prev(){
                this.$store.commit('prev');
                this.$store.dispatch('getMusicUrl')
            },
            next(){
                this.$store.commit('next');
                this.$store.dispatch('getMusicUrl')
            },
            play(){
                this.$store.commit('play');
            },
            jump(e){
                let parent = document.getElementsByClassName('play')[0];
                let track = document.getElementsByClassName('barbg')[0];
                let outParent = document.getElementById('g_player');

                let parentLeft = parent.offsetLeft + outParent.offsetLeft;   //两层查找，到left的距离

                let progress = e.pageX - parentLeft - 2;
                let tracklong = track.offsetWidth;
                console.log(progress/tracklong)
                this.$store.commit('drag',progress / tracklong);//控制进度条的长短
                this.$store.commit('jump', progress / tracklong)//控制歌曲的进度
            }

        },
        computed: {
            loopStyle(){
              return {
                    "icn-loop":this.$store.state.loopStyle==0,
                    "icn-shuffle":this.$store.state.loopStyle==1,
                    "icn-one":this.$store.state.loopStyle==2
                  }
            },
            duration () {
                return this.$store.state.duration;
            },
            currentTime(){
//              注册一个事件，判断歌曲是否唱完了
                if(this.$store.state.currentTime >0 && this.$store.state.currentTime==this.$store.state.duration) {
                    //  先说loop的切换方式
                    //    其实这里应该想办法调用next的方法的
                    switch (this.$store.state.loopStyle) {
                        case 0:
                            this.$store.commit('next');
                            this.$store.dispatch('getMusicUrl')
                            break;
                        case 1:
                            this.$store.commit('random');
                            this.$store.dispatch('getMusicUrl')
                            break;
                        case 2:
                            this.$store.commit('drag', 0);//控制进度条的长短
                            this.$store.commit('jump', 0)//控制歌曲的进度
                            break;
                    }
                }
                return this.$store.state.currentTime;
            },
            loading(){
                return this.$store.state.loading;
            },
            trackQueue(){
                return this.$store.state.trackQueue;
            },
            trackIndex(){
                return this.$store.state.trackIndex;
            },
            lyricObject(){
                return this.$store.state.lyricObject;
            },
            currentIndex(){
                return this.$store.state.currentIndex
            },
            VariableHeight(){
                return this.$store.state.VariableHeight
            },
            songDetail(){
                if (this.$store.state.trackQueue.length > 0) {
                    return this.$store.state.trackQueue[this.$store.state.trackIndex];
                } else {
                    return {
                        name: '',
                        singer: '',
                        al: {
                            picUrl: ''
                        }
                    }
                }
            },

        },
        mounted () {
            var This = this;
            var loading = document.getElementsByClassName('z-load')[0];
            let track = document.getElementsByClassName('barbg')[0];
            let tracklong = track.offsetWidth;
            let originX=0;
            let lengthX = 0;
            let flag = false;
            loading.addEventListener('mousedown', function (e) {
                originX = e.pageX;
                flag = true;
//                这里的取消默认行为的搞了我半天时间，也不知道为啥
                if (e.preventDefault) {
                     e.preventDefault();
                 }else {
                     e.returnValue = false;
                 }
            },false)
            document.addEventListener('mousemove', function (e) {
                if(flag){
                    let nowX = e.pageX;
                    lengthX = nowX - originX;
                    let per=(This.$store.state.currentTime/This.$store.state.duration)+lengthX/tracklong;
                    This.$store.commit('drag',per);
//                这是至关重要的地方。搞了一晚上，不然进度会叠加
                    originX=nowX
                }
           },false)
            document.addEventListener('mouseup', function (e) {
                if(flag){
                    let nowX = e.pageX;
                    lengthX = nowX - originX;
                    let per=(This.$store.state.currentTime/This.$store.state.duration)+lengthX/tracklong;
                    console.log(per)
                    This.$store.commit('jump',per)
                }
                flag = false;

            },false)


        },
        components: {}
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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

    .m-playbar .icn-list:hover {
        background-position: -42px -98px;
        text-decoration: none;
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

    .m-table .ply:hover {
        background-position: 0 -128px;
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

    .m-table tr:nth-child(even) td {
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

    .g-btmbar {
        position: fixed;
        _position: absolute;
        zoom: 1;
        bottom: 0;
        left: 0;
        right: 0;
        height: 0;
        width: 100%;
        z-index: 1002;
    }

    .m-playbar {
        position: absolute;
        zoom: 1;
        top: -53px;
        left: 0;
        width: 100%;
        height: 53px;
        margin: 0 auto;
    }

    .m-playbar .updn {
        position: relative;
        z-index: 11;
    }

    .m-playbar .updn .left, .m-playbar .updn .right, .m-playbar .updn .btn, .m-playbar .bg, .m-playbar .btns a, .m-playbar .head .mask, .m-playbar .icn, .m-playbar .ctrl, .m-playbar .tip, .m-vol .curr, .m-playbar .words .mv, .m-vol .barbg, .m-playbar .words .src {
        background: url(../image/playbar.png) no-repeat 0 9999px;
    }

    .m-playbar .updn .left {
        position: absolute;
        top: -14px;
        right: 15px;
        width: 52px;
        height: 67px;
        background-position: 0 -380px;
    }

    .m-playbar .updn .btn {
        display: block;
        width: 18px;
        height: 18px;
        margin: 6px 0 0 17px;
    }

    .m-playbar-unlock .updn .btn {
        background-position: -80px -380px;
    }

    .m-playbar-unlock .updn .btn:hover {
        background-position: -80px -400px;
    }

    .m-playbar-lock .updn .btn:hover {
        background-position: -100px -400px;
    }

    .m-playbar-lock .updn .btn {
        background-position: -100px -380px;
    }

    .m-playbar .updn .right {
        position: absolute;
        top: -1px;
        right: 0;
        width: 15px;
        height: 54px;
        background-position: -52px -393px;
        pointer-events: none;
    }

    .m-playbar .bg {
        height: 53px;
        zoom: 1;
        margin-right: 67px;
        background-position: 0 0;
        background-repeat: repeat-x;
    }

    .m-playbar .hand {
        position: absolute;
        top: -10px;
        width: 100%;
        height: 20px;
        cursor: pointer;
    }

    .m-playbar .wrap {
        position: absolute;
        left: 50%;
        top: 6px;
        z-index: 15;
        width: 980px;
        height: 47px;
        margin: 0 auto;
        margin-left: -490px;
    }

    .m-playbar .btns, .m-playbar .head, .m-playbar .play, .m-playbar .volum, .m-playbar .oper {
        float: left;
    }

    .m-playbar .btns {
        width: 137px;
        padding: 6px 0 0 0;
    }

    .m-playbar .btns a {
        display: block;
        float: left;
        width: 28px;
        height: 28px;
        margin-right: 8px;
        margin-top: 5px;
        text-indent: -9999px;
    }

    .m-playbar .btns .prv {
        background-position: 0 -130px;
    }

    .m-playbar .btns .prv:hover {
        background-position: -30px -130px;
    }

    .m-playbar .btns .ply {
        width: 36px;
        height: 36px;
        margin-top: 0;
        background-position: 0 -204px;
    }

    .m-playbar .btns .ply:hover {
        background-position: -40px -204px;
    }

    .m-playbar .btns .nxt {
        background-position: -80px -130px;
    }

    .m-playbar .btns .nxt:hover {
        background-position: -110px -130px;
    }

    .m-playbar .head, .m-playbar .head img {
        width: 34px;
        height: 34px;
    }

    .m-playbar .head {
        position: relative;
        margin: 6px 15px 0 0;
    }

    .m-playbar .head .mask {
        position: absolute;
        top: 0px;
        left: 0px;
        display: block;
        width: 34px;
        height: 35px;
        background-position: 0 -80px;
    }

    .m-playbar .play {
        position: relative;
        width: 608px;
    }

    .m-playbar .words {
        height: 28px;
        overflow: hidden;
        color: #e8e8e8;
        text-shadow: 0 1px 0 #171717;
        line-height: 28px;
    }

    .m-playbar .words .fc1 {
        color: #e8e8e8;
    }

    .m-playbar .words .name {
        max-width: 300px;
    }

    .m-playbar .words .mv {
        width: 19px;
        height: 17px;
        margin: 6px 0 0 3px;
        background-position: 0 -57px;
    }

    .m-playbar .words .mv:hover {
        background-position: -20px -57px;
    }

    .m-playbar .words .by {
        max-width: 220px;
        margin-left: 15px;
        color: #9b9b9b;
    }

    .m-playbar .words .by a {
        color: #9b9b9b !important;
    }

    .m-playbar .words .src {
        float: left;
        width: 14px;
        height: 15px;
        margin: 7px 0 0 13px;
        background-position: -110px -103px;
    }

    .m-playbar .words .src:hover {
        background-position: -130px -103px;
    }

    .m-pbar {
        position: relative;
    }

    .m-pbar .barbg, .m-pbar .cur, .m-pbar .rdy, .m-pbar .left {
        background: url(../image/statbar.png) no-repeat 0 9999px;
    }

    .m-pbar, .m-pbar .barbg {
        width: 493px;
    }

    .m-pbar .barbg, .m-pbar .cur, .m-pbar .rdy {
        height: 9px;
        background-position: right 0;
    }

    .m-pbar .rdy {
        background-position: right -30px;
    }

    .m-pbar .cur {
        position: absolute;
        top: 0;
        left: 0;
        width: 1%;
        background-position: left -66px;
    }

    .m-pbar .btn, .m-vol .btn {
        background: url(../image/iconall.png) no-repeat;
    }

    .m-pbar .btn {
        position: absolute;
        top: -7px;
        right: -13px;
        width: 22px;
        height: 24px;
        margin-left: -11px;
        background-position: 0 -250px;
        _background-position: 0 0;
    }

    .m-pbar .btn i {
        visibility: hidden;
        position: absolute;
        left: 5px;
        top: 5px;
        width: 12px;
        height: 12px;
        background: url(../image/loading.gif);
    }

    .m-pbar .z-load i {
        visibility: visible;
        cursor: default;
    }

    .m-pbar .time {
        position: absolute;
        top: -3px;
        right: -84px;
        color: #797979;
        text-shadow: 0 1px 0 #121212;
    }

    .m-pbar .time em {
        color: #a1a1a1;
    }

    .m-playbar .oper {
        width: 60px;
    }

    .m-playbar .icn {
        float: left;
        width: 25px;
        height: 25px;
        margin: 11px 2px 0 0;
        text-indent: -9999px;
    }

    .m-playbar .icn-add {
        background-position: -88px -163px;
    }

    .m-playbar .icn-add:hover {
        background-position: -88px -189px;
    }

    .m-playbar .icn-share {
        background-position: -114px -163px;
    }

    .m-playbar .icn-share:hover {
        background-position: -114px -189px;
    }

    .m-playbar .ctrl {
        position: relative;
        z-index: 10;
        width: 113px;
        padding-left: 13px;
        background-position: -147px -238px;
    }

    .m-vol {
        position: absolute;
        top: -113px;
        left: 9px;
        clear: both;
        width: 32px;
        height: 113px;
    }

    .m-vol .barbg {
        position: absolute;
        top: 0;
        left: 0;
        width: 32px;
        height: 113px;
        background-position: 0 -503px;
    }

    .m-vol .vbg, .m-vol .curr {
        position: absolute;
        top: 11px;
        left: 14px;
        width: 4px;
        height: 93px;
    }

    .m-vol .vbg {
        padding: 4px 0;
        top: 7px;
    }

    .m-vol .curr {
        top: auto;
        bottom: 4px;
        left: 0;
        background-position: -40px bottom;
        overflow: hidden;
    }

    .m-vol .btn {
        position: absolute;
        top: 0;
        left: -7px;
        display: block;
        width: 18px;
        height: 20px;
        background-position: -40px -250px;
        _background-position: 0 0;
        cursor: pointer;
    }

    .m-playbar .icn-vol {
        background-position: -2px -248px;
    }

    .m-playbar .icn-vol:hover {
        background-position: -31px -248px;
    }

    .m-playbar .icn-shuffle {
        background-position: -66px -248px;
    }

    .m-playbar .icn-shuffle:hover {
        background-position: -66px -248px;
    }

    .m-playbar .icn-loop {
        background-position: -3px -344px;
    }

    .m-playbar .icn-loop:hover {
        background-position: -33px -344px;
    }

    .m-playbar .icn-one {
        background-position: -66px -344px;
    }

    .m-playbar .icn-one:hover {
        background-position: -66px -344px;
    }

    .f-pr {
        position: relative;
        zoom: 1;
    }

    .m-playbar .add {
        float: left;
        width: 59px;
        height: 36px;
    }

    .m-playbar .tip {
        position: absolute;
        top: -51px;
        left: -65px;
        clear: both;
        width: 152px;
        height: 49px;
        background-position: 0 -287px;
        text-align: center;
        color: #fff;
        line-height: 37px;
    }

    .m-playbar .icn-list {
        display: block;
        float: none;
        width: 38px;
        padding-left: 21px;
        background-position: -42px -68px;
        line-height: 27px;
        text-align: center;
        color: #666;
        text-shadow: 0 1px 0 #080707;
        text-indent: 0;
        text-decoration: none;
    }

    .m-playbar .tip {
        position: absolute;
        top: -51px;
        left: -65px;
        clear: both;
        width: 152px;
        height: 49px;
        background-position: 0 -287px;
        text-align: center;
        color: #fff;
        line-height: 37px;
    }

    .m-playbar .tip-1 {
        top: -35px;
        left: 12px;
        width: 81px;
        height: 39px;
        line-height: 34px;
        background-position: 0 -457px;
    }

    .m-playbar .list {
        position: absolute;
        left: 50%;
        bottom: 47px;
        _bottom: 46px;
        width: 986px;
        _width: 982px;
        height: 301px;
        margin-left: -493px;
        _marign-left: -491px;
    }

    .is_display {
        display: none;
    }

    .m-playbar .listhd, .m-playbar .listbd {
        background: url(../image/playlist_bg.png) no-repeat;
    }

    .m-playbar .listhd, .m-playbar .listbd {
        padding: 0 5px;
    }

    .m-playbar .listhd {
        background-position: 0 0;
        height: 41px;
    }

    .m-playbar .listhdc {
        position: relative;
        height: 40px;
    }

    .m-playbar .listhdc h4 {
        position: absolute;
        left: 25px;
        top: 0;
        height: 39px;
        line-height: 39px;
        font-size: 14px;
        color: #e2e2e2;
    }

    .m-playbar .list .close, .m-playbar .playicn, .m-playbar .ico {
        background: url(../image/playlist.png) no-repeat 0 9999px;
    }

    .m-playbar .ico {
        height: 16px;
    }

    .m-playbar .ico-add {
        width: 16px;
        background-position: -24px 0;
    }

    .m-playbar .listhdc .line {
        position: absolute;
        top: 13px;
        left: 477px;
        height: 15px;
        border-left: 1px solid #000;
        border-right: 1px solid #2c2c2c;
    }

    .m-playbar .listhdc a {
        color: #ccc;
    }

    .m-playbar .listhdc .clear, .m-playbar .listhdc .addall {
        position: absolute;
        left: 490px;
        top: 12px;
        height: 15px;
        line-height: 15px;
        cursor: pointer;
    }

    .m-playbar .listhdc .addall {
        left: 398px;
    }

    .m-playbar .icn-del {
        width: 13px;
        background-position: -51px 0;
    }

    .m-playbar .listhdc .ico {
        float: left;
        margin: 1px 6px 0 0;
    }

    .m-playbar .icn-del:hover, .m-playbar a:hover .icn-del {
        background-position: -51px -20px;
    }

    .m-playbar .ico-add:hover, .m-playbar a:hover .ico-add {
        background-position: -24px -20px;
    }

    .f-ff0 {
        font-family: Arial, Helvetica, sans-serif;
    }

    .f-thide {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        word-wrap: normal;
    }

    .m-playbar .listhdc .lytit {
        position: absolute;
        left: 595px;
        top: 0;
        width: 346px;
        text-align: center;
        height: 39px;
        line-height: 39px;
        color: #fff;
        font-size: 14px;
    }

    .m-playbar .listhdc .close {
        position: absolute;
        top: 6px;
        right: 8px;
        width: 30px;
        height: 30px;
        overflow: hidden;
        text-indent: -999px;
        cursor: pointer;
        background-position: -195px 9px;
    }

    .m-playbar .listhdc .close:hover {
        background-position: -195px -21px;
    }

    .m-playbar .listhd, .m-playbar .listbd {
        background: url(../image/playlist_bg.png) no-repeat;
    }

    .m-playbar .listhd, .m-playbar .listbd {
        padding: 0 5px;
    }

    .m-playbar .listbd {
        position: absolute;
        left: 0;
        top: 41px;
        width: 976px;
        _width: 972px;
        height: 260px;
        overflow: hidden;
        background-position: -1014px 0;
        background-repeat: repeat-y;
    }

    .m-playbar .imgbg {
        position: absolute;
        left: 2px;
        _left: 0;
        top: -1px;
        z-index: 1;
        width: 980px;
        height: auto;
        opacity: .2;
        filter: Alpha(opacity=20);
    }

    .m-playbar .msk {
        position: absolute;
        left: 2px;
        _left: 0;
        top: 0;
        z-index: 2;
        width: 558px;
        height: 260px;
        background: #121212;
        opacity: .5;
        filter: Alpha(opacity=50);
    }

    .m-playbar .listbdc {
        position: absolute;
        left: 2px;
        _left: 0;
        top: 0;
        z-index: 4;
        height: 260px;
        width: 553px;
        overflow: hidden;
    }

    .m-playbar .listbdc ul {
        overflow: hidden;
    }

    .m-playbar .list ul {
        color: #ccc;
    }

    .m-playbar .list li {
        float: left;
        width: 100%;
    }

    .m-playbar .list li.zsel {
        background-color: rgba(0, 0, 0, 0.3);
        _background-color: #202020;
    }

    .m-playbar .col {
        float: left;
        padding-left: 10px;
        height: 28px;
        line-height: 28px;
        _line-height: 29px;
        overflow: hidden;
        cursor: pointer;
    }

    .m-playbar .col-1 {
        width: 10px;
    }

    .m-playbar .list li:hover .col, .m-playbar .list li:hover .col a, .m-playbar .list li:hover .col a:hover, .m-playbar .list li.zsel .col, .m-playbar .list li.zsel .col a, .m-playbar .list li.zsel .col a:hover {
        color: #fff;
    }

    .m-playbar .playicn {
        display: none;
        margin-top: 8px;
        width: 10px;
        height: 13px;
        background-position: -182px 0;
    }

    .m-playbar .list li.zsel .playicn, .m-playbar .list li:hover .icns, .m-playbar .list li.z-hover1 .icns {
        display: block;
    }

    .m-playbar .col-2, .m-playbar .col-4 {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }

    .m-playbar .col-2 {
        width: 256px;
    }

    .m-playbar .col-3 {
        width: 78px;
        position: relative;
    }

    .m-playbar .col .icns {
        display: none;
        position: absolute;
        right: 0;
        top: 0;
        width: 100px;
        height: 23px;
    }

    .m-playbar .icn-del {
        width: 13px;
        background-position: -51px 0;
    }

    .m-playbar .ico-dl {
        width: 14px;
        background-position: -57px -50px;
    }

    .m-playbar .ico-share {
        width: 14px;
        background-position: 0 0;
    }

    .m-playbar .ico-add {
        width: 16px;
        background-position: -24px 0;
    }

    .m-playbar .col .ico {
        float: right;
        overflow: hidden;
        margin: 7px 0 0 10px;
        text-indent: -9999px;
    }

    .m-playbar .col-2, .m-playbar .col-4 {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }

    .m-playbar .col-4 {
        width: 70px;
    }

    .m-playbar .col-5 {
        width: 35px;
        color: #666;
    }

    .m-playbar .col-6 {
        width: 37px;
        padding-left: 6px;
    }

    .m-playbar .col .ico-src {
        width: 14px;
        margin-left: 0;
        background-position: -80px 0px;
    }

    .m-playbar .col a, .m-playbar .col a:hover {
        color: #9b9b9b;
    }

    .m-playbar .listbd .bline {
        position: absolute;
        left: 555px;
        _left: 553px;
        top: -1px;
        z-index: 2;
        width: 6px;
        height: 260px;
        background: #000;
        opacity: .5;
        filter: Alpha(opacity=50);
    }

    .m-playbar .listbd .scrol {
        position: absolute;
        left: 0;
        top: 0px;
        width: 4px;
        border-radius: 5px;
        height: 100px;
        cursor: pointer;
        background: #868686;
        border: 1px solid #a6a6a6;
        opacity: .8;
        filter: Alpha(opacity=80);
    }

    .m-playbar .ask {
        position: absolute;
        right: 25px;
        top: 12px;
        cursor: pointer;
        z-index: 5;
    }

    .m-playbar .ico-ask {
        display: inline-block;
        width: 21px;
        height: 21px;
        background-position: 0 -50px;
        text-indent: 0;
        _background: none;
    }

    .m-playbar .upload {
        position: absolute;
        right: 12px;
        top: 40px;
        box-shadow: 0 2px 3px rgba(0, 0, 0, .75);
        width: 81px;
        z-index: 5;
        display: none;
    }

    .m-playbar .upload a {
        display: block;
        text-align: center;
        padding: 8px 0;
        color: #666;
        background: #ebebeb;
        text-shadow: 0 1px 0 #fff;
    }

    .m-playbar .msk2 {
        position: absolute;
        left: 560px;
        _left: 560px;
        top: 0;
        z-index: 3;
        width: 420px;
        height: 250px;
        background: #121212;
        opacity: .01;
        filter: Alpha(opacity=1);
    }

    .m-playbar .listlyric {
        position: absolute;
        right: 40px;
        top: 0;
        z-index: 4;
        margin: 21px 0 20px 0;
        height: 219px;
        width: 354px;
        overflow: hidden;
    }
    .m-playbar .listlyric .position {
      position: absolute;
      height: 219px;
      width: 354px;
    }

    .m-playbar .listlyric p {
        color: #989898;
        word-wrap: break-word;
        text-align: center;
        line-height: 32px;
        height: auto !important;
        height: 32px;
        min-height: 32px;
        -webkit-transition: color 0.7s linear;
        -moz-transition: color 0.7s linear;
        -o-transition: color 0.7s linear;
        transition: color 0.7s linear;
    }

    .m-playbar .listlyric p.zsel {
        color: #fff;
        font-size: 14px;
        -webkit-transition: color 0.7s linear;
        -moz-transition: color 0.7s linear;
        -o-transition: color 0.7s linear;
        transition: color 0.7s linear;
    }

    .m-playbar .listbd .bline {
        position: absolute;
        left: 555px;
        _left: 553px;
        top: -1px;
        z-index: 2;
        width: 6px;
        height: 260px;
        background: #000;
        opacity: .5;
        filter: Alpha(opacity=50);
    }

    .m-playbar .listbd .bline-1 {
        left: auto;
        right: 2px;
        _right: 0;
    }

    .m-playbar .listbd .scrol {
        position: absolute;
        left: 0;
        top: 0px;
        width: 4px;
        border-radius: 5px;
        height: 100px;
        cursor: pointer;
        background: #868686;
        border: 1px solid #a6a6a6;
        opacity: .8;
        filter: Alpha(opacity=80);
    }

    .m-playbar .listbd .scrol-1 {
        left: auto;
        right: 0;
    }
    .m-playbar .icn-shuffle {
        background-position: -66px -248px;
    }
    .m-playbar .icn-one {
        background-position: -66px -344px;
    }
    .m-playbar .icn-loop {
        background-position: -3px -344px;
    }

</style>
