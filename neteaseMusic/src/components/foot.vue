<template>
  <div class="bottom">
      <!--<h1>-->
          <!--{{msg}}  &nbsp;&nbsp;&nbsp;<router-link to="/">Home</router-link>-->
          <!--<router-link to="about">about</router-link>-->
      <!--</h1>-->
      <div class="g-ft ">
          <div class="m-ft">
              <div class="wrap f-cb">
                  <div class="copy">
                      <p>
                          <a href="//music.163.com/about" target="_blank" class="s-fc4">关于网易</a><span class="line">|</span>
                          <a href="//help.163.com/" target="_blank" class="s-fc4">客户服务</a><span class="line">|</span>
                          <a href="//music.163.com/html/web2/service.html" target="_blank" class="s-fc4">服务条款</a><span class="line">|</span>
                          <a href="//sitemap.163.com/" target="_blank" class="s-fc4">网站导航</a><span class="line">|</span>
                          <a id="g_feedback" href="#" class="s-fc4" onclick="nm.x.feedback();return false;" hidefocus="true">意见反馈</a>
                      </p>
                      <p class="s-fc3">
                          <span class="sep">网易公司版权所有©1997-2017</span>杭州乐读科技有限公司运营：<a href="http://p1.music.126.net/-DB9zs1FAJq8vg7HOb-yOQ==/3250156395654666.jpg" target="_blank" class="s-fc3">浙网文[2015] 0415-135号</a>
                      </p>
                  </div>
                  <ul class="enter f-fr">
                      <li>
                          <a class="logo logo-musician f-tid" href="//music.163.com/recruit" target="_blank">独立音乐人</a>
                      </li>
                      <li>
                          <a class="logo logo-topic f-tid" href="//music.163.com/topic/recruit" target="_blank">音乐专栏</a>
                      </li>
                      <li>
                          <a class="logo logo-midea f-tid" href="//music.163.com/topic/selfmedia" target="_blank">自媒体</a>
                      </li>
                      <li>
                          <a class="logo logo-reward f-tid" href="//music.163.com/web/reward" target="_blank">赞赏</a>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'bottom',
  data () {
    return {
      msg: 'this is the bottom of demo'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .g-ft {
        position: relative;
        height: 140px;
        overflow: hidden;
        border-top: 1px solid #d3d3d3;
        background: #f2f2f2;
    }
    .m-ft {
        width: 980px;
        margin: 0 auto;
    }
    .m-ft .copy {
        float: left;
        width: 490px;
        padding-top: 35px;
        line-height: 24px;
    }
    .f-fr {
        float: right;
    }
    .m-ft .enter {
        width: 330px;
        margin-top: 21px;
    }
    .f-tid {
        text-indent: -9999px;
    }
    .m-ft .logo {
        background: url(../image/foot_enter.png) no-repeat 0 9999px;
    }
    .m-ft .logo {
        float: left;
        width: 60px;
        height: 70px;
        margin-left: 30px;
    }
    .s-fc3, a.s-fc3:hover {
        color: #666;
    }
    .m-ft .copy .sep {
        margin-right: 14px;
    }
    .m-ft .logo-musician {
        background-position: -60px -80px;
        margin-left: 0;
    }
    .m-ft .logo-topic {
        background-position: 0 -80px;
    }
    .m-ft .logo-midea {
        background-position: 0 0;
    }
    .m-ft .logo-reward {
        background-position: -60px 0;
    }
    .m-ft .copy .line {
        margin: 0 8px 0 10px;
        color: #c2c2c2;
    }
</style>
