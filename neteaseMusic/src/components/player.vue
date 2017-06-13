<template>
    <div class="g-btmbar">
        <div class="m-playbar m-playbar-unlock" style="top: -7px; visibility: visible;" id="auto-id-zyo2XUaTamTQsQvf">
            <div class="updn">
                <div class="left f-fl"><a href="javascript:;" class="btn" hidefocus="true" data-action="lock"></a></div>
                <div class="right f-fl"></div>
            </div>
            <div class="bg"></div>
            <div class="hand" title="展开播放条"></div>
            <div class="wrap" id="g_player" style="margin-left: -498.5px;">
                <div class="btns">
                    <a href="javascript:;" @click="test" class="prv" title="上一首(ctrl+←)">上一首</a>
                    <a href="javascript:;" hidefocus="true" data-action="pause" class="ply j-flag pas" title="播放/暂停(p)">播放/暂停</a>
                    <a href="javascript:;" hidefocus="true" data-action="next" class="nxt" title="下一首(ctrl+→)">下一首</a>
                </div>
                <div class="head j-flag"><img src="http://p1.music.126.net/h_jIa6jZSuI8gBW6a89Dhg==/16667496765602378.jpg?param=34y34"><a href="/song?id=34780516" hidefocus="true" class="mask"></a></div>
                <div class="play">
                    <div class="j-flag words"> <a hidefocus="true" href="/song?id=34780516" class="f-thide name fc1 f-fl" title="JUMP">JUMP</a><span class="by f-thide f-fl"><span title="徐梦圆"><a class="" href="/artist?id=1142042" hidefocus="true">徐梦圆</a></span></span><a href="/playlist?id=520486422&amp;_hash=songlist-34780516" class="src" title="来自歌单"></a></div>
                    <div class="m-pbar" data-action="noop">
                        <div class="barbg j-flag" id="auto-id-T27m1S1kISk8XMKo">
                            <div class="rdy" style="width: 100%;"></div>
                            <div class="cur" style="width: 35.6378%;"><span class="btn f-tdn f-alpha" id="auto-id-LUEElBI7trq8kQkc"><i></i></span></div>
                        </div>
                        <span class="j-flag time"><em>00:55</em> / 02:34</span>
                    </div>
                </div>
                <div class="oper f-fl">
                    <a href="javascript:;" hidefocus="true" data-action="like" class="icn icn-add j-flag" title="收藏">收藏</a>
                    <a href="javascript:;" hidefocus="true" data-action="share" class="icn icn-share" title="分享">分享</a>
                </div>
                <div class="ctrl f-fl f-pr j-flag">
                    <div class="m-vol" style="visibility:hidden;" id="auto-id-m00A2CDpkgiM74IT">
                        <div class="barbg"></div>
                        <div class="vbg j-t" id="auto-id-spNH86r0h3gt1Bsa"><div class="curr j-t" style="height: 2.2963px;"></div>
                            <span class="btn f-alpha j-t" style="top: 79px;"></span></div>
                    </div>
                    <a href="javascript:;" hidefocus="true" data-action="volume" class="icn icn-vol"></a>
                    <a href="javascript:;" hidefocus="true" data-action="mode" class="icn icn-loop" title="循环"></a>
                    <span class="add f-pr">
                        <span class="tip" style="display: none;">已开始播放</span>
                        <a href="javascript:;" title="播放列表" hidefocus="true" data-action="panel" class="icn icn-list s-fc3">66</a>
                        </span>
                    <div class="tip tip-1" style="display:none;">循环</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'player',
        data () {
            return {
                song:null
            }
        },
        methods: {
            test () {
                this.song.pause();
            }
        },
        mounted () {
            this.song = new Audio('http://m10.music.126.net/20170613230048/2451d0efbbd95109414c0c9b11a3c97c/ymusic/f1ae/0bd1/31a9/5d64960d0cbebc0d089bc85a6ef54680.mp3');
            this.song.play();
        },
        components: {

        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .m-playbar .head, .m-playbar .head img {
        width: 34px;
        height: 34px;
    }
    img, .txt {
        border: 0;
    }
    html, body, img, iframe {
        border: 0;
    }
    .g-btmbar {
        position: fixed;
        _position: absolute;
        zoom: 1;
        bottom: 45px;
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
    .m-pbar .btn, .m-vol .btn {
        background: url(../image/iconall.png) no-repeat;
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
    .m-playbar .head, .m-playbar .head img {
        width: 34px;
        height: 34px;
    }
    .m-playbar .head {
        position: relative;
        margin: 6px 15px 0 0;
    }
    .m-playbar .play {
        position: relative;
        width: 608px;
    }
    .m-playbar .oper {
        width: 60px;
    }
    .m-playbar .ctrl {
        position: relative;
        z-index: 10;
        width: 113px;
        padding-left: 13px;
        background-position: -147px -238px;
    }
    .m-playbar .updn .left {
        position: absolute;
        top: -14px;
        right: 15px;
        width: 52px;
        height: 67px;
        background-position: 0 -380px;
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
    .m-playbar .updn .btn {
        display: block;
        width: 18px;
        height: 18px;
        margin: 6px 0 0 17px;
    }
    .m-playbar-unlock .updn .btn {
        background-position: -80px -380px;
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
    .m-playbar .btns .ply {
        width: 36px;
        height: 36px;
        margin-top: 0;
        background-position: 0 -204px;
    }
    .m-playbar .btns .pas {
        background-position: 0 -165px;
    }
    .m-playbar .btns .nxt {
        background-position: -80px -130px;
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
    .m-playbar .words {
        height: 28px;
        overflow: hidden;
        color: #e8e8e8;
        text-shadow: 0 1px 0 #171717;
        line-height: 28px;
    }
    .m-playbar .words .name {
        max-width: 300px;
    }
    .m-playbar .words .fc1 {
        color: #e8e8e8;
    }
    .m-playbar .words .by a {
        color: #9b9b9b;
    }
    .f-thide {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        word-wrap: normal;
    }
    .f-fl {
        float: left;
    }
    [hidefocus] {
        outline: none;
    }
    .f-thide {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        word-wrap: normal;
    }
    .m-playbar .words .by {
        max-width: 220px;
        margin-left: 15px;
        color: #9b9b9b;
    }
    .m-pbar {
        position: relative;
    }
    .m-pbar, .m-pbar .barbg {
        width: 493px;
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
    .m-playbar .icn-share {
        background-position: -114px -163px;
    }
    .m-vol {
        position: absolute;
        top: -113px;
        left: 9px;
        clear: both;
        width: 32px;
        height: 113px;
    }
    .m-playbar .icn-vol {
        background-position: -2px -248px;
    }
    .m-playbar .icn-loop {
        background-position: -3px -344px;
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
    .m-playbar .tip-1 {
        top: -35px;
        left: 12px;
        width: 81px;
        height: 39px;
        line-height: 34px;
        background-position: 0 -457px;
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
    .m-pbar .barbg, .m-pbar .cur, .m-pbar .rdy, .m-pbar .left{
        background:url(../image/statbar.png) no-repeat 0 9999px;
    }
    .m-pbar .barbg, .m-pbar .cur, .m-pbar .rdy{
        height:9px;
    }
    .m-pbar .rdy{
        background-position: right -30px;
    }
    .m-pbar .cur{
        position: absolute;
        top:0;
        left:0;
        width:1px;
        background-position: left -66px;
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
    em,i{
        font-style:normal;
        text-align:left;
        font-size:inherit;
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
</style>
