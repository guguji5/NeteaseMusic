<template>
    <div>
        <banner></banner>
        <div class="g-bd1 f-cb">
            <div class="g-mn1">
                <div class="g-mn1c">
                    <div class="g-wrap3">
                        <div class="n-rcmd">
                            <div class="v-hd2">
                                <a href="/discover/playlist/" class="tit f-ff2 f-tdn">热门推荐</a>
                                <div class="tab">
                                    <a href="/discover/playlist/?cat=%E5%8D%8E%E8%AF%AD" class="s-fc3">华语</a>
                                    <span class="line">|</span>
                                    <a href="/discover/playlist/?cat=%E6%B5%81%E8%A1%8C" class="s-fc3">流行</a>
                                    <span class="line">|</span>
                                    <a href="/discover/playlist/?cat=%E6%91%87%E6%BB%9A" class="s-fc3">摇滚</a>
                                    <span class="line">|</span>
                                    <a href="/discover/playlist/?cat=%E6%B0%91%E8%B0%A3" class="s-fc3">民谣</a>
                                    <span class="line">|</span>
                                    <a href="/discover/playlist/?cat=%E7%94%B5%E5%AD%90" class="s-fc3">电子</a>
                                </div>
                                <span class="more"><a href="/discover/playlist/" class="s-fc3">更多</a><i
                                        class="cor s-bg s-bg-6">&nbsp;</i></span>
                            </div>
                            <ul class="m-cvrlst f-cb">
                                <li v-for="item in personalized">
                                    <div class="u-cover u-cover-1">
                                        <img v-bind:src="item.picUrl">
                                        <router-link :to="{path:'playlistDetail',query:{id:item.id}}" :title="item.name" class="msk"></router-link>
                                        <div class="bottom">
                                            <a class="icon-play f-fr" title="播放" href="javascript:;"></a>
                                            <span class="icon-headset"></span>
                                            <span class="nb" v-if="item.playCount ">{{item.playCount | toWan}}</span>
                                            <span class="nb" v-else>{{item.program.listenerCount | toWan}}</span>
                                        </div>
                                    </div>
                                    <p class="dec">
                                        <!--<a title="item.name" class="tit s-fc0" href="/playlist?id=568857491">-->
                                            <!--<i class="u-icn u-icn-53" v-if="item.type==1"></i>-->
                                            <!--{{item.name}}-->
                                        <!--</a>-->
                                        <router-link :to="{path:'playlistDetail',query:{id:item.id}}" :title="item.name" class="tit s-fc0">
                                            <i class="u-icn u-icn-53" v-if="item.type==1"></i>
                                            {{item.name}}
                                        </router-link>
                                    </p>
                                </li>
                                <!--<li> 留个原版的demo，以备事件绑定啊
                                    <div class="u-cover u-cover-1">
                                        <img src="http://p1.music.126.net/FQkA98WGP5uzTF1hi7zVgQ==/18748872278752961.jpg?param=140y140">
                                        <a title="华语篇丨这些歌的歌名你都能记住吗？" href="/playlist?id=740393902" class="msk"
                                           data-res-id="740393902" data-res-type="13" data-res-action="log"
                                           data-res-data="recommendclick|1|featured|user-playlist"></a>
                                        <div class="bottom">
                                            <a class="icon-play f-fr" title="播放" href="javascript:;" data-res-type="13"
                                               data-res-id="740393902" data-res-action="play"></a>
                                            <span class="icon-headset"></span>
                                            <span class="nb">92万</span>
                                        </div>
                                    </div>
                                    <p class="dec">
                                        <a title="华语篇丨这些歌的歌名你都能记住吗？" class="tit s-fc0" href="/playlist?id=740393902"
                                           data-res-id="740393902" data-res-type="13" data-res-action="log"
                                           data-res-data="recommendclick|1|featured|user-playlist">
                                            <i class="u-icn u-icn-53"></i>
                                            华语篇丨这些歌的歌名你都能记住吗？
                                        </a>
                                    </p>
                                </li>-->

                            </ul>
                        </div>
                    </div>
                </div>

            </div>
            <div class="g-sd1">
                <div class="n-myinfo s-bg s-bg-5">
                    <div class="f-cb">
                        <a href="/user/home?id=352725071" class="head f-pr">
                            <img src="http://p1.music.126.net/Q-m-4IqNr4u4YAt77Q-ZtQ==/18758767883277617.jpg?param=80y80">
                        </a>
                        <div class="info">
                            <h4><a href="/user/home?id=352725071" class="nm nm-icn f-fs1 f-ib f-thide">咕咕鸡5</a></h4>
                            <p><a href="/user/level" class="u-lv u-icn2 u-icn2-lv">4<i class="right u-icn2 u-icn2-lvright"></i></a></p>
                            <div class="btnwrap f-pr">
                                <a data-need-safety="false" data-action="checkin" href="javascript:;" hidefocus="true" class="sign u-btn2 u-btn2-2"><i>签 到</i></a>
                            </div>
                        </div>
                    </div>
                    <ul class="dny s-fc3 f-cb">
                        <li class="fst"><a href="/user/event?id=352725071"><strong id="event_count">0</strong><span>动态</span></a></li>
                        <li><a href="/user/follows?id=352725071"><strong id="follow_count">2</strong><span>关注</span></a></li>
                        <li class="lst"><a href="/user/fans?id=352725071"><strong id="fan_count">0</strong><span>粉丝</span></a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import banner from '../components/banner';
    import {personalized,djprogram} from  './../service/getDate';

    export default {
        name: 'home',
        data () {
            return {
                personalized: []
            }
        },
        mounted(){

            var getPersonalized= new Promise((resolve, reject) =>{
                personalized(this).get().then(res => {
                    this.personalized=res.body.result;
                    resolve(res.body.result.length)
//                    console.log(res.body.result)
                });
            })

            getPersonalized.then((length) =>{
                if(length>=8){
                    return
                }
                djprogram(this).get().then(res => {
                    let temp=res.body.result.slice(0,8-length)
                    this.personalized=this.personalized.concat(temp)
//                    console.log('djprogram',res.body.result)
                });
            })

//            personalized(this).get().then(res => {
//                this.personalized=res.body.result;
//                console.log('personalized',res.body.result)
//            });
//            djprogram(this).get().then(res => {
//                console.log('djprogram',res.body.result)
//            });
        },
        components: {
            banner
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1, h2 {
        font-weight: normal;
    }
    /*the left*/
    .g-bd1 {
        background: url(./../image/wrap1.png) repeat-y 100% 100%;
    }

    .g-mn1 {
        float: left;
        width: 100%;
        margin-right: -250px;
    }

    .g-mn1c {
        margin-right: 251px;
    }

    .g-sd1 {
        position: relative;
        float: right;
        width: 250px;
        zoom: 1;
    }

    .g-wrap3 {
        padding: 20px 20px 20px;/* 微调成下边距20px*/
        /*padding: 20px 20px 40px;*/
    }

    .v-hd2 {
        height: 33px;
        padding: 0 10px 0 34px;
        background-position: -225px -156px;
        border-bottom: 2px solid #C10D0C;
    }

    .v-hd2 .tit {
        float: left;
        font-size: 20px;
        font-weight: normal;
        line-height: 28px;
    }

    .v-hd2 .tab {
        float: left;
        margin: 7px 0 0 20px;
    }

    .s-fc3, a.s-fc3:hover {
        color: #666;
    }

    .v-hd2 .tab .line {
        margin: 0 10px;
        color: #ccc;
    }

    .v-hd2 .more {
        float: right;
        margin-top: 9px;
        _margin-top: 11px;
    }

    a, a *, .f-hand, .f-hand * {
        cursor: pointer;
    }

    .s-fc3, a.s-fc3:hover {
        color: #666;
    }

    .s-bg-6 {
        background-position: 0 -240px;
    }

    .v-hd2 .more .cor, .v-hd3 .more .cor {
        display: inline-block;
        width: 12px;
        height: 12px;
        margin-left: 4px;
        vertical-align: middle;
    }

    .n-rcmd .m-cvrlst {
        margin: 20px 0 0 -42px;
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

    .n-rcmd .m-cvrlst li {
        width: 140px;
        height: 204px;
        padding-left: 42px;
    }

    .u-cover {
        position: relative;
        display: block;
    }

    .u-cover-1 {
        width: 140px;
        height: 140px;
    }

    .u-cover img {
        display: block;
        width: 100%;
        height: 100%;
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

    .u-cover .nb {
        float: left;
        margin: 7px 0 0 0;
    }

    .m-cvrlst li p {
        width: 100%;
    }

    .m-cvrlst li .dec {
        margin: 8px 0 3px;
        font-size: 14px;
    }
    .u-cover .bottom, .u-cover .msk, .n-musicsd .lst .avatar .msk {
        background: url(../image/coverall.png) no-repeat;
    }
    .u-cover .msk {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
    .u-cover-1 .msk {
        background-position: 0 0;
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

    .u-cover .icon-headset {
        float: left;
        width: 14px;
        height: 11px;
        background-position: 0 -24px;
        margin: 9px 5px 9px 10px;
    }
    /*the left above and right below*/
    .g-sd1 {
        position: relative;
        float: right;
        width: 250px;
        zoom: 1;
    }
    .s-bg-5 {
        background-position: 0 -270px;
    }
    .n-myinfo {
        height: 165px;
        padding-top: 20px;
    }
    .n-myinfo .head {
        float: left;
        width: 80px;
        height: 80px;
        margin-left: 20px;
        _margin-left: 10px;
        padding: 2px;
        background: #fff;
        border: 1px solid #dadada;
    }
    .n-myinfo .head img {
        display: block;
        width: 80px;
        height: 80px;
    }
    .n-myinfo .info {
        float: left;
        width: 115px;
        margin-left: 18px;
        padding-top: 3px;
    }
    .n-myinfo .info .nm-icn {
        width: auto;
        max-width: 100%;
        vertical-align: middle;
    }
    .n-myinfo .info p {
        width: 100%;
        margin-top: 5px;
    }
    .u-icn2 {
        background: url(./../image/icon2.png) no-repeat 0 9999px;
    }
    .u-icn, .u-icn2, .u-icn3 {
        display: inline-block;
        overflow: hidden;
        vertical-align: middle;
    }
    .u-icn2-lv {
        background-position: -130px -64px;
    }
    .u-icn2-lvright {
        width: 8px;
        height: 17px;
        background-position: -192px -64px;
    }
    .u-lv i {
        float: right;
    }
    .u-lv {
        display: inline-block;
        height: 17px;
        overflow: hidden;
        padding-left: 25px;
        line-height: 18px;
        color: #999;
        font-weight: bold;
        font-style: italic;
    }
    .n-myinfo .info .btnwrap {
        margin-top: 15px;
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
    .u-btn2, .u-btn2 i {
        display: inline-block;
        height: 31px;
        line-height: 31px;
        overflow: hidden;
        vertical-align: top;
        text-align: center;
        cursor: pointer;
    }
    .u-btn2 i {
        padding: 0 15px 0 20px;
        pointer-events: none;
    }
    .u-btn2-2 i {
        color: #fff;
        background-position: 0 -387px;
    }
    .n-myinfo .info .btnwrap .sign i {
        width: 60px;
    }
    .f-fs1 {
        font-size: 14px;
    }
    .s-fc3, a.s-fc3:hover {
        color: #666;
    }
    .n-myinfo .dny {
        margin: 22px 0 0 20px;
    }
    .n-myinfo .dny li {
        float: left;
        height: 40px;
        padding: 0 18px;
        border-right: 1px solid #e4e4e4;
    }
    .n-myinfo .dny li.fst {
        padding-left: 0;
    }
    .n-myinfo .dny li a {
        display: block;
        color: #666;
    }
    .n-myinfo .dny strong {
        display: block;
        font-size: 20px;
        font-weight: normal;
    }
    .n-myinfo .dny li a * {
        cursor: pointer;
    }
    .n-myinfo .dny span {
        margin-left: 2px;
    }
    .n-myinfo .dny li a * {
        cursor: pointer;
    }
    .n-myinfo .dny li.lst {
        padding-right: 0;
        border-right: none;
    }
    .f-cb:after {
        clear: both;
        content: '.';
        display: block;
        height: 0;
        visibility: hidden;
    }
    .u-icn-53 {
        width: 35px;
        height: 15px;
        background-position: -31px -658px;
    }
    .m-cvrlst li .dec i {
        position: relative;
        top: -1px;
        margin-right: 3px;
        vertical-align: middle;
    }

</style>
