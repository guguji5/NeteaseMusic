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
      <div id="cateListBox" class="n-sltlyr d-flag " style="left:0;">
        <div class="hd"><i class="icn"></i></div>
        <div class="bd">
          <h3><a href="/discover/playlist/" class="j-flag u-btn u-btn-g s-fc1" data-cat="全部"><em>全部风格</em></a></h3>
          <dl class="f-cb">
            <dt><i class="u-icn u-icn-71"></i>语种</dt>
            <dd>
              <a class="s-fc1 " href="/discover/playlist/?cat=%E5%8D%8E%E8%AF%AD" data-cat="华语">华语</a><span
              class="line">|</span>
              <a class="s-fc1 " href="/discover/playlist/?cat=%E6%AC%A7%E7%BE%8E" data-cat="欧美">欧美</a><span
              class="line">|</span>
              <a class="s-fc1 " href="/discover/playlist/?cat=%E6%97%A5%E8%AF%AD" data-cat="日语">日语</a><span
              class="line">|</span>
              <a class="s-fc1 " href="/discover/playlist/?cat=%E9%9F%A9%E8%AF%AD" data-cat="韩语">韩语</a><span
              class="line">|</span>
              <a class="s-fc1 " href="/discover/playlist/?cat=%E7%B2%A4%E8%AF%AD" data-cat="粤语">粤语</a><span
              class="line">|</span>
              <a class="s-fc1 " href="/discover/playlist/?cat=%E5%B0%8F%E8%AF%AD%E7%A7%8D" data-cat="小语种">小语种</a><span
              class="line">|</span>
            </dd>
          </dl>
          <dl class="f-cb">
            <dt><i class="u-icn u-icn-6"></i>风格</dt>
            <dd>
              <a class="s-fc1 " href="/discover/playlist/?cat=%E6%B5%81%E8%A1%8C" data-cat="流行">流行</a><span
              class="line">|</span>
              <a class="s-fc1 " href="/discover/playlist/?cat=%E6%91%87%E6%BB%9A" data-cat="摇滚">摇滚</a><span
              class="line">|</span>
              <a class="s-fc1 " href="/discover/playlist/?cat=%E6%B0%91%E8%B0%A3" data-cat="民谣">民谣</a><span
              class="line">|</span>
              <a class="s-fc1 " href="/discover/playlist/?cat=%E7%94%B5%E5%AD%90" data-cat="电子">电子</a><span
              class="line">|</span>
              <a class="s-fc1 " href="/discover/playlist/?cat=%E8%88%9E%E6%9B%B2" data-cat="舞曲">舞曲</a><span
              class="line">|</span>
              <a class="s-fc1 " href="/discover/playlist/?cat=%E8%AF%B4%E5%94%B1" data-cat="说唱">说唱</a><span
              class="line">|</span>
              <a class="s-fc1 " href="/discover/playlist/?cat=%E8%BD%BB%E9%9F%B3%E4%B9%90" data-cat="轻音乐">轻音乐</a><span
              class="line">|</span>
              <a class="s-fc1 " href="/discover/playlist/?cat=%E7%88%B5%E5%A3%AB" data-cat="爵士">爵士</a><span
              class="line">|</span>
              <a class="s-fc1 " href="/discover/playlist/?cat=%E4%B9%A1%E6%9D%91" data-cat="乡村">乡村</a><span
              class="line">|</span>
              <a class="s-fc1 " href="/discover/playlist/?cat=R%26B%2FSoul"
                 data-cat="R&amp;B/Soul">R&amp;B/Soul</a><span class="line">|</span>
              <a class="s-fc1 " href="/discover/playlist/?cat=%E5%8F%A4%E5%85%B8" data-cat="古典">古典</a><span
              class="line">|</span>
              <a class="s-fc1 " href="/discover/playlist/?cat=%E6%B0%91%E6%97%8F" data-cat="民族">民族</a><span
              class="line">|</span>
              <a class="s-fc1 " href="/discover/playlist/?cat=%E8%8B%B1%E4%BC%A6" data-cat="英伦">英伦</a><span
              class="line">|</span>
              <a class="s-fc1 " href="/discover/playlist/?cat=%E9%87%91%E5%B1%9E" data-cat="金属">金属</a><span
              class="line">|</span>
              <a class="s-fc1 " href="/discover/playlist/?cat=%E6%9C%8B%E5%85%8B" data-cat="朋克">朋克</a><span
              class="line">|</span>
              <a class="s-fc1 " href="/discover/playlist/?cat=%E8%93%9D%E8%B0%83" data-cat="蓝调">蓝调</a><span
              class="line">|</span>
              <a class="s-fc1 " href="/discover/playlist/?cat=%E9%9B%B7%E9%AC%BC" data-cat="雷鬼">雷鬼</a><span
              class="line">|</span>
              <a class="s-fc1 " href="/discover/playlist/?cat=%E4%B8%96%E7%95%8C%E9%9F%B3%E4%B9%90"
                 data-cat="世界音乐">世界音乐</a><span class="line">|</span>
              <a class="s-fc1 " href="/discover/playlist/?cat=%E6%8B%89%E4%B8%81" data-cat="拉丁">拉丁</a><span
              class="line">|</span>
              <a class="s-fc1 " href="/discover/playlist/?cat=%E5%8F%A6%E7%B1%BB%2F%E7%8B%AC%E7%AB%8B" data-cat="另类/独立">另类/独立</a><span
              class="line">|</span>
              <a class="s-fc1 " href="/discover/playlist/?cat=New%20Age" data-cat="New Age">New Age</a><span
              class="line">|</span>
              <a class="s-fc1 " href="/discover/playlist/?cat=%E5%8F%A4%E9%A3%8E" data-cat="古风">古风</a><span
              class="line">|</span>
              <a class="s-fc1 " href="/discover/playlist/?cat=%E5%90%8E%E6%91%87" data-cat="后摇">后摇</a><span
              class="line">|</span>
              <a class="s-fc1 " href="/discover/playlist/?cat=Bossa%20Nova" data-cat="Bossa Nova">Bossa Nova</a><span
              class="line">|</span>
            </dd>
          </dl>
          <dl class="f-cb">
            <dt><i class="u-icn u-icn-7"></i>场景</dt>
            <dd>
              <a class="s-fc1 " href="/discover/playlist/?cat=%E6%B8%85%E6%99%A8" data-cat="清晨">清晨</a><span
              class="line">|</span>
              <a class="s-fc1 " href="/discover/playlist/?cat=%E5%A4%9C%E6%99%9A" data-cat="夜晚">夜晚</a><span
              class="line">|</span>
              <a class="s-fc1 " href="/discover/playlist/?cat=%E5%AD%A6%E4%B9%A0" data-cat="学习">学习</a><span
              class="line">|</span>
              <a class="s-fc1 " href="/discover/playlist/?cat=%E5%B7%A5%E4%BD%9C" data-cat="工作">工作</a><span
              class="line">|</span>
              <a class="s-fc1 " href="/discover/playlist/?cat=%E5%8D%88%E4%BC%91" data-cat="午休">午休</a><span
              class="line">|</span>
              <a class="s-fc1 " href="/discover/playlist/?cat=%E4%B8%8B%E5%8D%88%E8%8C%B6" data-cat="下午茶">下午茶</a><span
              class="line">|</span>
              <a class="s-fc1 " href="/discover/playlist/?cat=%E5%9C%B0%E9%93%81" data-cat="地铁">地铁</a><span
              class="line">|</span>
              <a class="s-fc1 " href="/discover/playlist/?cat=%E9%A9%BE%E8%BD%A6" data-cat="驾车">驾车</a><span
              class="line">|</span>
              <a class="s-fc1 " href="/discover/playlist/?cat=%E8%BF%90%E5%8A%A8" data-cat="运动">运动</a><span
              class="line">|</span>
              <a class="s-fc1 " href="/discover/playlist/?cat=%E6%97%85%E8%A1%8C" data-cat="旅行">旅行</a><span
              class="line">|</span>
              <a class="s-fc1 " href="/discover/playlist/?cat=%E6%95%A3%E6%AD%A5" data-cat="散步">散步</a><span
              class="line">|</span>
              <a class="s-fc1 " href="/discover/playlist/?cat=%E9%85%92%E5%90%A7" data-cat="酒吧">酒吧</a><span
              class="line">|</span>
            </dd>
          </dl>
          <dl class="f-cb">
            <dt><i class="u-icn u-icn-8"></i>情感</dt>
            <dd>
              <a class="s-fc1 " href="/discover/playlist/?cat=%E6%80%80%E6%97%A7" data-cat="怀旧">怀旧</a><span
              class="line">|</span>
              <a class="s-fc1 " href="/discover/playlist/?cat=%E6%B8%85%E6%96%B0" data-cat="清新">清新</a><span
              class="line">|</span>
              <a class="s-fc1 " href="/discover/playlist/?cat=%E6%B5%AA%E6%BC%AB" data-cat="浪漫">浪漫</a><span
              class="line">|</span>
              <a class="s-fc1 " href="/discover/playlist/?cat=%E6%80%A7%E6%84%9F" data-cat="性感">性感</a><span
              class="line">|</span>
              <a class="s-fc1 " href="/discover/playlist/?cat=%E4%BC%A4%E6%84%9F" data-cat="伤感">伤感</a><span
              class="line">|</span>
              <a class="s-fc1 " href="/discover/playlist/?cat=%E6%B2%BB%E6%84%88" data-cat="治愈">治愈</a><span
              class="line">|</span>
              <a class="s-fc1 " href="/discover/playlist/?cat=%E6%94%BE%E6%9D%BE" data-cat="放松">放松</a><span
              class="line">|</span>
              <a class="s-fc1 " href="/discover/playlist/?cat=%E5%AD%A4%E7%8B%AC" data-cat="孤独">孤独</a><span
              class="line">|</span>
              <a class="s-fc1 " href="/discover/playlist/?cat=%E6%84%9F%E5%8A%A8" data-cat="感动">感动</a><span
              class="line">|</span>
              <a class="s-fc1 " href="/discover/playlist/?cat=%E5%85%B4%E5%A5%8B" data-cat="兴奋">兴奋</a><span
              class="line">|</span>
              <a class="s-fc1 " href="/discover/playlist/?cat=%E5%BF%AB%E4%B9%90" data-cat="快乐">快乐</a><span
              class="line">|</span>
              <a class="s-fc1 " href="/discover/playlist/?cat=%E5%AE%89%E9%9D%99" data-cat="安静">安静</a><span
              class="line">|</span>
              <a class="s-fc1 " href="/discover/playlist/?cat=%E6%80%9D%E5%BF%B5" data-cat="思念">思念</a><span
              class="line">|</span>
            </dd>
          </dl>
          <dl class="f-cb">
            <dt><i class="u-icn u-icn-9"></i>主题</dt>
            <dd class="last">
              <a class="s-fc1 " href="/discover/playlist/?cat=%E5%BD%B1%E8%A7%86%E5%8E%9F%E5%A3%B0"
                 data-cat="影视原声">影视原声</a><span class="line">|</span>
              <a class="s-fc1 " href="/discover/playlist/?cat=ACG" data-cat="ACG">ACG</a><span class="line">|</span>
              <a class="s-fc1 " href="/discover/playlist/?cat=%E6%A0%A1%E5%9B%AD" data-cat="校园">校园</a><span
              class="line">|</span>
              <a class="s-fc1 " href="/discover/playlist/?cat=%E6%B8%B8%E6%88%8F" data-cat="游戏">游戏</a><span
              class="line">|</span>
              <a class="s-fc1 " href="/discover/playlist/?cat=70%E5%90%8E" data-cat="70后">70后</a><span
              class="line">|</span>
              <a class="s-fc1 " href="/discover/playlist/?cat=80%E5%90%8E" data-cat="80后">80后</a><span
              class="line">|</span>
              <a class="s-fc1 " href="/discover/playlist/?cat=90%E5%90%8E" data-cat="90后">90后</a><span
              class="line">|</span>
              <a class="s-fc1 " href="/discover/playlist/?cat=%E7%BD%91%E7%BB%9C%E6%AD%8C%E6%9B%B2"
                 data-cat="网络歌曲">网络歌曲</a><span class="line">|</span>
              <a class="s-fc1 " href="/discover/playlist/?cat=KTV" data-cat="KTV">KTV</a><span class="line">|</span>
              <a class="s-fc1 " href="/discover/playlist/?cat=%E7%BB%8F%E5%85%B8" data-cat="经典">经典</a><span
              class="line">|</span>
              <a class="s-fc1 " href="/discover/playlist/?cat=%E7%BF%BB%E5%94%B1" data-cat="翻唱">翻唱</a><span
              class="line">|</span>
              <a class="s-fc1 " href="/discover/playlist/?cat=%E5%90%89%E4%BB%96" data-cat="吉他">吉他</a><span
              class="line">|</span>
              <a class="s-fc1 " href="/discover/playlist/?cat=%E9%92%A2%E7%90%B4" data-cat="钢琴">钢琴</a><span
              class="line">|</span>
              <a class="s-fc1 " href="/discover/playlist/?cat=%E5%99%A8%E4%B9%90" data-cat="器乐">器乐</a><span
              class="line">|</span>
              <a class="s-fc1 " href="/discover/playlist/?cat=%E5%84%BF%E7%AB%A5" data-cat="儿童">儿童</a><span
              class="line">|</span>
              <a class="s-fc1 " href="/discover/playlist/?cat=%E6%A6%9C%E5%8D%95" data-cat="榜单">榜单</a><span
              class="line">|</span>
              <a class="s-fc1 " href="/discover/playlist/?cat=00%E5%90%8E" data-cat="00后">00后</a><span
              class="line">|</span>
            </dd>
          </dl>
        </div>
        <div class="ft"></div>
      </div>
      <ul class="m-cvrlst f-cb" id="m-pl-container">
        <li>
          <div class="u-cover u-cover-1">
            <img class="j-flag"
                 src="http://p1.music.126.net/20UHPmTJQfPqdRfRWzepLw==/19032546276957519.jpg?param=140y140">
            <a title="与你最后的夏天，不舍趟过肺腑" href="/playlist?id=739121492" class="msk"></a>
            <div class="bottom">
              <a class="icon-play f-fr" title="播放" href="javascript:;" data-res-type="13" data-res-id="739121492"
                 data-res-action="play"></a>
              <span class="icon-headset"></span>
              <span class="nb">40万</span>
            </div>
          </div>
          <p class="dec">
            <a title="与你最后的夏天，不舍趟过肺腑" href="/playlist?id=739121492" class="tit f-thide s-fc0">与你最后的夏天，不舍趟过肺腑</a>
          </p>
          <p><span class="s-fc4">by</span> <a title="林落夏" href="/user/home?id=126014458"
                                              class="nm nm-icn f-thide s-fc3">林落夏</a> <sup
            class="u-icn u-icn-84 "></sup>
          </p>
        </li>
        <li>
          <div class="u-cover u-cover-1">
            <img class="j-flag"
                 src="http://p1.music.126.net/1_IrdbTCiYsplY489pLS2g==/18866520021166216.jpg?param=140y140">
            <a title="民谣丨吟游山水间，一念净心花开遍世界" href="/playlist?id=740274735" class="msk"></a>
            <div class="bottom">
              <a class="icon-play f-fr" title="播放" href="javascript:;" data-res-type="13" data-res-id="740274735"
                 data-res-action="play"></a>
              <span class="icon-headset"></span>
              <span class="nb">22万</span>
            </div>
          </div>
          <p class="dec">
            <a title="民谣丨吟游山水间，一念净心花开遍世界" href="/playlist?id=740274735" class="tit f-thide s-fc0">民谣丨吟游山水间，一念净心花开遍世界</a>
          </p>
          <p><span class="s-fc4">by</span> <a title="____________刂巾___________" href="/user/home?id=95943913"
                                              class="nm nm-icn f-thide s-fc3">____________刂巾___________</a> <sup
            class="u-icn u-icn-84 "></sup>
          </p>
        </li>
        <li>
          <div class="u-cover u-cover-1">
            <img class="j-flag"
                 src="http://p1.music.126.net/_9oexX-jyywYRl2zaKusdg==/109951162935643862.jpg?param=140y140">
            <a title="复古情歌集°夏日舞步" href="/playlist?id=741528492" class="msk"></a>
            <div class="bottom">
              <a class="icon-play f-fr" title="播放" href="javascript:;" data-res-type="13" data-res-id="741528492"
                 data-res-action="play"></a>
              <span class="icon-headset"></span>
              <span class="nb">74741</span>
            </div>
          </div>
          <p class="dec">
            <a title="复古情歌集°夏日舞步" href="/playlist?id=741528492" class="tit f-thide s-fc0">复古情歌集°夏日舞步</a>
          </p>
          <p><span class="s-fc4">by</span> <a title="玛丽锁链是耶稣" href="/user/home?id=68140853"
                                              class="nm nm-icn f-thide s-fc3">玛丽锁链是耶稣</a></p>
        </li>
        <li>
          <div class="u-cover u-cover-1">
            <img class="j-flag"
                 src="http://p1.music.126.net/LhiJtjBhoZZeTIl4IwhzqA==/109951162933505715.jpg?param=140y140">
            <a title="「柔美温醇」生而优雅 旁若无人的美丽" href="/playlist?id=723185970" class="msk"></a>
            <div class="bottom">
              <a class="icon-play f-fr" title="播放" href="javascript:;" data-res-type="13" data-res-id="723185970"
                 data-res-action="play"></a>
              <span class="icon-headset"></span>
              <span class="nb">13万</span>
            </div>
          </div>
          <p class="dec">
            <a title="「柔美温醇」生而优雅 旁若无人的美丽" href="/playlist?id=723185970" class="tit f-thide s-fc0">「柔美温醇」生而优雅 旁若无人的美丽</a>
          </p>
          <p><span class="s-fc4">by</span> <a title="JonathanHyden" href="/user/home?id=117282496"
                                              class="nm nm-icn f-thide s-fc3">JonathanHyden</a> <sup
            class="u-icn u-icn-84 "></sup>
          </p>
        </li>
        <li>
          <div class="u-cover u-cover-1">
            <img class="j-flag"
                 src="http://p1.music.126.net/sQQNqXHxklTkxbO1u30tCw==/18928092672296349.jpg?param=140y140">
            <a title="【韩语】粉红式旋律//闻到恋爱的臭酸味了～" href="/playlist?id=601618154" class="msk"></a>
            <div class="bottom">
              <a class="icon-play f-fr" title="播放" href="javascript:;" data-res-type="13" data-res-id="601618154"
                 data-res-action="play"></a>
              <span class="icon-headset"></span>
              <span class="nb">10万</span>
            </div>
          </div>
          <p class="dec">
            <a title="【韩语】粉红式旋律//闻到恋爱的臭酸味了～" href="/playlist?id=601618154" class="tit f-thide s-fc0">【韩语】粉红式旋律//闻到恋爱的臭酸味了～</a>
          </p>
          <p><span class="s-fc4">by</span> <a title="Sugamiaomiao" href="/user/home?id=276586493"
                                              class="nm nm-icn f-thide s-fc3">Sugamiaomiao</a></p>
        </li>
        <li>
          <div class="u-cover u-cover-1">
            <img class="j-flag"
                 src="http://p1.music.126.net/xKDBkJJm78xWnHBEQcKxcQ==/109951162935702655.jpg?param=140y140">
            <a title="日系の纯音 | 记忆之境中的女孩与时光°" href="/playlist?id=741427337" class="msk"></a>
            <div class="bottom">
              <a class="icon-play f-fr" title="播放" href="javascript:;" data-res-type="13" data-res-id="741427337"
                 data-res-action="play"></a>
              <span class="icon-headset"></span>
              <span class="nb">67286</span>
            </div>
          </div>
          <p class="dec">
            <a title="日系の纯音 | 记忆之境中的女孩与时光°" href="/playlist?id=741427337"
               class="tit f-thide s-fc0">日系の纯音 | 记忆之境中的女孩与时光°</a>
          </p>
          <p><span class="s-fc4">by</span> <a title="百夜丶米迦儿" href="/user/home?id=250010398"
                                              class="nm nm-icn f-thide s-fc3">百夜丶米迦儿</a> <sup
            class="u-icn u-icn-84 "></sup>
          </p>
        </li>
        <li>
          <div class="u-cover u-cover-1">
            <img class="j-flag"
                 src="http://p1.music.126.net/o0qdmsW_ZVU63XQftkRRiw==/18872017579298238.jpg?param=140y140">
            <a title="Gěr-♥" href="/playlist?id=740909807" class="msk"></a>
            <div class="bottom">
              <a class="icon-play f-fr" title="播放" href="javascript:;" data-res-type="13" data-res-id="740909807"
                 data-res-action="play"></a>
              <span class="icon-headset"></span>
              <span class="nb">43544</span>
            </div>
          </div>
          <p class="dec">
            <a title="Gěr-♥" href="/playlist?id=740909807" class="tit f-thide s-fc0">Gěr-♥</a>
          </p>
          <p><span class="s-fc4">by</span> <a title="_Amorr" href="/user/home?id=90213213"
                                              class="nm nm-icn f-thide s-fc3">_Amorr</a></p>
        </li>
        <li>
          <div class="u-cover u-cover-1">
            <img class="j-flag"
                 src="http://p1.music.126.net/vuPDRsBSPjjRUG2D_CGngw==/109951162933606208.jpg?param=140y140">
            <a title="『一百首』经典华语怀旧老歌" href="/playlist?id=737535139" class="msk"></a>
            <div class="bottom">
              <a class="icon-play f-fr" title="播放" href="javascript:;" data-res-type="13" data-res-id="737535139"
                 data-res-action="play"></a>
              <span class="icon-headset"></span>
              <span class="nb">11万</span>
            </div>
          </div>
          <p class="dec">
            <a title="『一百首』经典华语怀旧老歌" href="/playlist?id=737535139" class="tit f-thide s-fc0">『一百首』经典华语怀旧老歌</a>
          </p>
          <p><span class="s-fc4">by</span> <a title="哥哥-Leslie" href="/user/home?id=40136303"
                                              class="nm nm-icn f-thide s-fc3">哥哥-Leslie</a></p>
        </li>
        <li>
          <div class="u-cover u-cover-1">
            <img class="j-flag"
                 src="http://p1.music.126.net/9xKYvDnDk6bldkzyH5hPgw==/109951162933957288.jpg?param=140y140">
            <a title="EDM 嗑药 今夜不回家 ⚡️" href="/playlist?id=736339924" class="msk"></a>
            <div class="bottom">
              <a class="icon-play f-fr" title="播放" href="javascript:;" data-res-type="13" data-res-id="736339924"
                 data-res-action="play"></a>
              <span class="icon-headset"></span>
              <span class="nb">16万</span>
            </div>
          </div>
          <p class="dec">
            <a title="EDM 嗑药 今夜不回家 ⚡️" href="/playlist?id=736339924" class="tit f-thide s-fc0">EDM 嗑药 今夜不回家 ⚡️</a>
          </p>
          <p><span class="s-fc4">by</span> <a title="-PIGALLE" href="/user/home?id=107130968"
                                              class="nm nm-icn f-thide s-fc3">-PIGALLE</a></p>
        </li>
        <li>
          <div class="u-cover u-cover-1">
            <img class="j-flag"
                 src="http://p1.music.126.net/GMcEfluDVZhXcuYnCWxW4A==/18885211718830252.jpg?param=140y140">
            <a title="⚡️17年5月新热电音推送" href="/playlist?id=739592141" class="msk"></a>
            <div class="bottom">
              <a class="icon-play f-fr" title="播放" href="javascript:;" data-res-type="13" data-res-id="739592141"
                 data-res-action="play"></a>
              <span class="icon-headset"></span>
              <span class="nb">63065</span>
            </div>
          </div>
          <p class="dec">
            <a title="⚡️17年5月新热电音推送" href="/playlist?id=739592141" class="tit f-thide s-fc0">⚡️17年5月新热电音推送</a>
          </p>
          <p><span class="s-fc4">by</span> <a title="大小姐不高兴" href="/user/home?id=73591747"
                                              class="nm nm-icn f-thide s-fc3">大小姐不高兴</a> <sup
            class="u-icn u-icn-84 "></sup>
          </p>
        </li>
        <li>
          <div class="u-cover u-cover-1">
            <img class="j-flag"
                 src="http://p1.music.126.net/-mpiogK3-I0TggGXOhS5MQ==/19078725765307496.jpg?param=140y140">
            <a title="【科幻向】之时空旅行的邂逅" href="/playlist?id=729913476" class="msk"></a>
            <div class="bottom">
              <a class="icon-play f-fr" title="播放" href="javascript:;" data-res-type="13" data-res-id="729913476"
                 data-res-action="play"></a>
              <span class="icon-headset"></span>
              <span class="nb">59万</span>
            </div>
          </div>
          <p class="dec">
            <a title="【科幻向】之时空旅行的邂逅" href="/playlist?id=729913476" class="tit f-thide s-fc0">【科幻向】之时空旅行的邂逅</a>
          </p>
          <p><span class="s-fc4">by</span> <a title="Dav飞飞飞飞飞" href="/user/home?id=250429644"
                                              class="nm nm-icn f-thide s-fc3">Dav飞飞飞飞飞</a></p>
        </li>
        <li>
          <div class="u-cover u-cover-1">
            <img class="j-flag"
                 src="http://p1.music.126.net/oKCrwDMWUTdqZAFuSNu6kw==/18788454697348326.jpg?param=140y140">
            <a title="100位欧美90后歌手：这些人把青春给了音乐" href="/playlist?id=733122887" class="msk"></a>
            <div class="bottom">
              <a class="icon-play f-fr" title="播放" href="javascript:;" data-res-type="13" data-res-id="733122887"
                 data-res-action="play"></a>
              <span class="icon-headset"></span>
              <span class="nb">205万</span>
            </div>
          </div>
          <p class="dec">
            <a title="100位欧美90后歌手：这些人把青春给了音乐" href="/playlist?id=733122887" class="tit f-thide s-fc0">100位欧美90后歌手：这些人把青春给了音乐</a>
          </p>
          <p><span class="s-fc4">by</span> <a title="第十三个神" href="/user/home?id=92582150"
                                              class="nm nm-icn f-thide s-fc3">第十三个神</a> <sup
            class="u-icn u-icn-84 "></sup>
          </p>
        </li>
        <li>
          <div class="u-cover u-cover-1">
            <img class="j-flag"
                 src="http://p1.music.126.net/P8VwgDjdLDN4spkwIv8QXg==/18722483999690981.jpg?param=140y140">
            <a title="一个旋律两首歌 | 是无意穿堂风 偏偏引山洪" href="/playlist?id=733787899" class="msk"></a>
            <div class="bottom">
              <a class="icon-play f-fr" title="播放" href="javascript:;" data-res-type="13" data-res-id="733787899"
                 data-res-action="play"></a>
              <span class="icon-headset"></span>
              <span class="nb">423万</span>
            </div>
          </div>
          <p class="dec">
            <a title="一个旋律两首歌 | 是无意穿堂风 偏偏引山洪" href="/playlist?id=733787899" class="tit f-thide s-fc0">一个旋律两首歌 | 是无意穿堂风 偏偏引山洪</a>
          </p>
          <p><span class="s-fc4">by</span> <a title="阿陳的橙" href="/user/home?id=120199044"
                                              class="nm nm-icn f-thide s-fc3">阿陳的橙</a></p>
        </li>
        <li>
          <div class="u-cover u-cover-1">
            <img class="j-flag"
                 src="http://p1.music.126.net/mwcSeBPyDrtjl9S21T6Pkg==/109951162931191040.jpg?param=140y140">
            <a title="内地优秀影视作曲人•作品选辑" href="/playlist?id=730426023" class="msk"></a>
            <div class="bottom">
              <a class="icon-play f-fr" title="播放" href="javascript:;" data-res-type="13" data-res-id="730426023"
                 data-res-action="play"></a>
              <span class="icon-headset"></span>
              <span class="nb">266万</span>
            </div>
          </div>
          <p class="dec">
            <a title="内地优秀影视作曲人•作品选辑" href="/playlist?id=730426023" class="tit f-thide s-fc0">内地优秀影视作曲人•作品选辑</a>
          </p>
          <p><span class="s-fc4">by</span> <a title="可尼晏" href="/user/home?id=283413472"
                                              class="nm nm-icn f-thide s-fc3">可尼晏</a> <sup
            class="u-icn u-icn-84 "></sup>
          </p>
        </li>
        <li>
          <div class="u-cover u-cover-1">
            <img class="j-flag"
                 src="http://p1.music.126.net/Q3CScArPnO2-IdR5VumO7g==/19098516974628576.jpg?param=140y140">
            <a title="他们居然合唱了| 超越你脑洞的惊喜搭配" href="/playlist?id=734019883" class="msk"></a>
            <div class="bottom">
              <a class="icon-play f-fr" title="播放" href="javascript:;" data-res-type="13" data-res-id="734019883"
                 data-res-action="play"></a>
              <span class="icon-headset"></span>
              <span class="nb">300万</span>
            </div>
          </div>
          <p class="dec">
            <a title="他们居然合唱了| 超越你脑洞的惊喜搭配" href="/playlist?id=734019883"
               class="tit f-thide s-fc0">他们居然合唱了| 超越你脑洞的惊喜搭配</a>
          </p>
          <p><span class="s-fc4">by</span> <a title="陶天然Nature" href="/user/home?id=124004819"
                                              class="nm nm-icn f-thide s-fc3">陶天然Nature</a> <sup
            class="icn u-icn2 u-icn2-music2 "></sup>
          </p>
        </li>
        <li>
          <div class="u-cover u-cover-1">
            <img class="j-flag"
                 src="http://p1.music.126.net/NQ6yvFeVRSUNq9g7U-JIMQ==/18867619532775509.jpg?param=140y140">
            <a title="➳♡ 愿有真爱可相遇，且以深情共白首 ♡゛" href="/playlist?id=731267515" class="msk"></a>
            <div class="bottom">
              <a class="icon-play f-fr" title="播放" href="javascript:;" data-res-type="13" data-res-id="731267515"
                 data-res-action="play"></a>
              <span class="icon-headset"></span>
              <span class="nb">90万</span>
            </div>
          </div>
          <p class="dec">
            <a title="➳♡ 愿有真爱可相遇，且以深情共白首 ♡゛" href="/playlist?id=731267515" class="tit f-thide s-fc0">➳♡ 愿有真爱可相遇，且以深情共白首 ♡゛</a>
          </p>
          <p><span class="s-fc4">by</span> <a title="____________刂巾___________" href="/user/home?id=95943913"
                                              class="nm nm-icn f-thide s-fc3">____________刂巾___________</a> <sup
            class="u-icn u-icn-84 "></sup>
          </p>
        </li>
        <li>
          <div class="u-cover u-cover-1">
            <img class="j-flag"
                 src="http://p1.music.126.net/OiWWkRM1jZ7cDVl-SvG78g==/18516875325284317.jpg?param=140y140">
            <a title="【科幻向】之蒸汽朋克的幻想" href="/playlist?id=726239497" class="msk"></a>
            <div class="bottom">
              <a class="icon-play f-fr" title="播放" href="javascript:;" data-res-type="13" data-res-id="726239497"
                 data-res-action="play"></a>
              <span class="icon-headset"></span>
              <span class="nb">89万</span>
            </div>
          </div>
          <p class="dec">
            <a title="【科幻向】之蒸汽朋克的幻想" href="/playlist?id=726239497" class="tit f-thide s-fc0">【科幻向】之蒸汽朋克的幻想</a>
          </p>
          <p><span class="s-fc4">by</span> <a title="Dav飞飞飞飞飞" href="/user/home?id=250429644"
                                              class="nm nm-icn f-thide s-fc3">Dav飞飞飞飞飞</a></p>
        </li>
        <li>
          <div class="u-cover u-cover-1">
            <img class="j-flag"
                 src="http://p1.music.126.net/P15ZfifMd6QEeiQRtO5R7g==/109951162928316337.jpg?param=140y140">
            <a title="「高考季」2017一起听歌记单词吧" href="/playlist?id=727047864" class="msk"></a>
            <div class="bottom">
              <a class="icon-play f-fr" title="播放" href="javascript:;" data-res-type="13" data-res-id="727047864"
                 data-res-action="play"></a>
              <span class="icon-headset"></span>
              <span class="nb">263万</span>
            </div>
          </div>
          <p class="dec">
            <a title="「高考季」2017一起听歌记单词吧" href="/playlist?id=727047864" class="tit f-thide s-fc0">「高考季」2017一起听歌记单词吧</a>
          </p>
          <p><span class="s-fc4">by</span> <a title="-Huberto-" href="/user/home?id=279511069"
                                              class="nm nm-icn f-thide s-fc3">-Huberto-</a> <sup
            class="u-icn u-icn-84 "></sup>
          </p>
        </li>
        <li>
          <div class="u-cover u-cover-1">
            <img class="j-flag"
                 src="http://p1.music.126.net/ZoSOoFuCwx_QeT-8Xfsfvw==/19190875951326088.jpg?param=140y140">
            <a title="爸爸的录音机丨怀旧华语" href="/playlist?id=723609586" class="msk"></a>
            <div class="bottom">
              <a class="icon-play f-fr" title="播放" href="javascript:;" data-res-type="13" data-res-id="723609586"
                 data-res-action="play"></a>
              <span class="icon-headset"></span>
              <span class="nb">388万</span>
            </div>
          </div>
          <p class="dec">
            <a title="爸爸的录音机丨怀旧华语" href="/playlist?id=723609586" class="tit f-thide s-fc0">爸爸的录音机丨怀旧华语</a>
          </p>
          <p><span class="s-fc4">by</span> <a title="浩子Joe" href="/user/home?id=43906015"
                                              class="nm nm-icn f-thide s-fc3">浩子Joe</a></p>
        </li>
        <li>
          <div class="u-cover u-cover-1">
            <img class="j-flag"
                 src="http://p1.music.126.net/aDzomT-pEeL3km9S32gSHQ==/18687299627582453.jpg?param=140y140">
            <a title="『欧美』佳片有约 , 细品译名之美" href="/playlist?id=726228034" class="msk"></a>
            <div class="bottom">
              <a class="icon-play f-fr" title="播放" href="javascript:;" data-res-type="13" data-res-id="726228034"
                 data-res-action="play"></a>
              <span class="icon-headset"></span>
              <span class="nb">117万</span>
            </div>
          </div>
          <p class="dec">
            <a title="『欧美』佳片有约 , 细品译名之美" href="/playlist?id=726228034" class="tit f-thide s-fc0">『欧美』佳片有约 , 细品译名之美</a>
          </p>
          <p><span class="s-fc4">by</span> <a title="蝶影丛虫" href="/user/home?id=311877725"
                                              class="nm nm-icn f-thide s-fc3">蝶影丛虫</a> <sup
            class="u-icn u-icn-84 "></sup>
          </p>
        </li>
        <li>
          <div class="u-cover u-cover-1">
            <img class="j-flag"
                 src="http://p1.music.126.net/Qae0edxAHunfxC5Kyab6rg==/18662010860076706.jpg?param=140y140">
            <a title="陆地小甜歌" href="/playlist?id=728275502" class="msk"></a>
            <div class="bottom">
              <a class="icon-play f-fr" title="播放" href="javascript:;" data-res-type="13" data-res-id="728275502"
                 data-res-action="play"></a>
              <span class="icon-headset"></span>
              <span class="nb">34万</span>
            </div>
          </div>
          <p class="dec">
            <a title="陆地小甜歌" href="/playlist?id=728275502" class="tit f-thide s-fc0">陆地小甜歌</a>
          </p>
          <p><span class="s-fc4">by</span> <a title="大宝sod613" href="/user/home?id=261794993"
                                              class="nm nm-icn f-thide s-fc3">大宝sod613</a></p>
        </li>
        <li>
          <div class="u-cover u-cover-1">
            <img class="j-flag"
                 src="http://p1.music.126.net/Y8zz3wS2Pp6at1_xaSFwSA==/18996262393211036.jpg?param=140y140">
            <a title="听歌||你爱的那些民谣艺人是这样过端午的" href="/playlist?id=725568495" class="msk"></a>
            <div class="bottom">
              <a class="icon-play f-fr" title="播放" href="javascript:;" data-res-type="13" data-res-id="725568495"
                 data-res-action="play"></a>
              <span class="icon-headset"></span>
              <span class="nb">155万</span>
            </div>
          </div>
          <p class="dec">
            <a title="听歌||你爱的那些民谣艺人是这样过端午的" href="/playlist?id=725568495"
               class="tit f-thide s-fc0">听歌||你爱的那些民谣艺人是这样过端午的</a>
          </p>
          <p><span class="s-fc4">by</span> <a title="民谣在路上onthefolk" href="/user/home?id=50252373"
                                              class="nm nm-icn f-thide s-fc3">民谣在路上onthefolk</a> <sup
            class="u-icn u-icn-1 "></sup>
          </p>
        </li>
        <li>
          <div class="u-cover u-cover-1">
            <img class="j-flag"
                 src="http://p1.music.126.net/_aXaqvpfFu2uoAgIXlOTAg==/109951162934529390.jpg?param=140y140">
            <a title="情爱里无智者 智者无爱河" href="/playlist?id=727258593" class="msk"></a>
            <div class="bottom">
              <a class="icon-play f-fr" title="播放" href="javascript:;" data-res-type="13" data-res-id="727258593"
                 data-res-action="play"></a>
              <span class="icon-headset"></span>
              <span class="nb">53万</span>
            </div>
          </div>
          <p class="dec">
            <a title="情爱里无智者 智者无爱河" href="/playlist?id=727258593" class="tit f-thide s-fc0">情爱里无智者 智者无爱河</a>
          </p>
          <p><span class="s-fc4">by</span> <a title="捉到一只民谣狗" href="/user/home?id=276936601"
                                              class="nm nm-icn f-thide s-fc3">捉到一只民谣狗</a> <sup
            class="u-icn u-icn-84 "></sup>
          </p>
        </li>
        <li>
          <div class="u-cover u-cover-1">
            <img class="j-flag"
                 src="http://p1.music.126.net/Xo-PTqmD_NLez-BJC8v8Gw==/18774161046183876.jpg?param=140y140">
            <a title="初夏微风阵阵～悠闲躺在床上的八组鹅" href="/playlist?id=726676006" class="msk"></a>
            <div class="bottom">
              <a class="icon-play f-fr" title="播放" href="javascript:;" data-res-type="13" data-res-id="726676006"
                 data-res-action="play"></a>
              <span class="icon-headset"></span>
              <span class="nb">80万</span>
            </div>
          </div>
          <p class="dec">
            <a title="初夏微风阵阵～悠闲躺在床上的八组鹅" href="/playlist?id=726676006" class="tit f-thide s-fc0">初夏微风阵阵～悠闲躺在床上的八组鹅</a>
          </p>
          <p><span class="s-fc4">by</span> <a title="afghi" href="/user/home?id=366610749"
                                              class="nm nm-icn f-thide s-fc3">afghi</a></p>
        </li>
        <li>
          <div class="u-cover u-cover-1">
            <img class="j-flag"
                 src="http://p1.music.126.net/MRwlgyCPindBzqu_vRzj4w==/19154592067586619.jpg?param=140y140">
            <a title="日式清新女声，漫游在初夏的阳光下" href="/playlist?id=721109251" class="msk"></a>
            <div class="bottom">
              <a class="icon-play f-fr" title="播放" href="javascript:;" data-res-type="13" data-res-id="721109251"
                 data-res-action="play"></a>
              <span class="icon-headset"></span>
              <span class="nb">49万</span>
            </div>
          </div>
          <p class="dec">
            <a title="日式清新女声，漫游在初夏的阳光下" href="/playlist?id=721109251" class="tit f-thide s-fc0">日式清新女声，漫游在初夏的阳光下</a>
          </p>
          <p><span class="s-fc4">by</span> <a title="xept" href="/user/home?id=74029445"
                                              class="nm nm-icn f-thide s-fc3">xept</a> <sup
            class="u-icn u-icn-84 "></sup>
          </p>
        </li>
        <li>
          <div class="u-cover u-cover-1">
            <img class="j-flag"
                 src="http://p1.music.126.net/iV-KDN7hMYBcVWUgDbjebQ==/3420580745908209.jpg?param=140y140">
            <a title="纯音：一百五十位韩国音乐人，每人一首佳作" href="/playlist?id=718346554" class="msk"></a>
            <div class="bottom">
              <a class="icon-play f-fr" title="播放" href="javascript:;" data-res-type="13" data-res-id="718346554"
                 data-res-action="play"></a>
              <span class="icon-headset"></span>
              <span class="nb">44万</span>
            </div>
          </div>
          <p class="dec">
            <a title="纯音：一百五十位韩国音乐人，每人一首佳作" href="/playlist?id=718346554"
               class="tit f-thide s-fc0">纯音：一百五十位韩国音乐人，每人一首佳作</a>
          </p>
          <p><span class="s-fc4">by</span> <a title="洛伦兹力做功酶" href="/user/home?id=128544338"
                                              class="nm nm-icn f-thide s-fc3">洛伦兹力做功酶</a></p>
        </li>
        <li>
          <div class="u-cover u-cover-1">
            <img class="j-flag"
                 src="http://p1.music.126.net/3zTbjOlqQFh8H8yRKJCR_A==/18543263604344025.jpg?param=140y140">
            <a title="韩国男团全收录，一团一精选" href="/playlist?id=717877021" class="msk"></a>
            <div class="bottom">
              <a class="icon-play f-fr" title="播放" href="javascript:;" data-res-type="13" data-res-id="717877021"
                 data-res-action="play"></a>
              <span class="icon-headset"></span>
              <span class="nb">117万</span>
            </div>
          </div>
          <p class="dec">
            <a title="韩国男团全收录，一团一精选" href="/playlist?id=717877021" class="tit f-thide s-fc0">韩国男团全收录，一团一精选</a>
          </p>
          <p><span class="s-fc4">by</span> <a title="Mrs-闵" href="/user/home?id=55660353"
                                              class="nm nm-icn f-thide s-fc3">Mrs-闵</a> <sup
            class="u-icn u-icn-84 "></sup>
          </p>
        </li>
        <li>
          <div class="u-cover u-cover-1">
            <img class="j-flag"
                 src="http://p1.music.126.net/fUqW3dySriFyaRAFV8OH8w==/19038043835049936.jpg?param=140y140">
            <a title="Show Me The Money 6 预热单" href="/playlist?id=714537618" class="msk"></a>
            <div class="bottom">
              <a class="icon-play f-fr" title="播放" href="javascript:;" data-res-type="13" data-res-id="714537618"
                 data-res-action="play"></a>
              <span class="icon-headset"></span>
              <span class="nb">84万</span>
            </div>
          </div>
          <p class="dec">
            <a title="Show Me The Money 6 预热单" href="/playlist?id=714537618" class="tit f-thide s-fc0">Show Me The Money 6 预热单</a>
          </p>
          <p><span class="s-fc4">by</span> <a title="叫我斯斯欧尼" href="/user/home?id=135786413"
                                              class="nm nm-icn f-thide s-fc3">叫我斯斯欧尼</a> <sup
            class="u-icn u-icn-84 "></sup>
          </p>
        </li>
        <li>
          <div class="u-cover u-cover-1">
            <img class="j-flag"
                 src="http://p1.music.126.net/yY59whvKN6m3R3HeVojPUA==/19149094509473301.jpg?param=140y140">
            <a title="Billboard2010年十年榜即时（2010-2017）" href="/playlist?id=724614446" class="msk"></a>
            <div class="bottom">
              <a class="icon-play f-fr" title="播放" href="javascript:;" data-res-type="13" data-res-id="724614446"
                 data-res-action="play"></a>
              <span class="icon-headset"></span>
              <span class="nb">46253</span>
            </div>
          </div>
          <p class="dec">
            <a title="Billboard2010年十年榜即时（2010-2017）" href="/playlist?id=724614446" class="tit f-thide s-fc0">Billboard2010年十年榜即时（2010-2017）</a>
          </p>
          <p><span class="s-fc4">by</span> <a title="GaryGates" href="/user/home?id=327642310"
                                              class="nm nm-icn f-thide s-fc3">GaryGates</a></p>
        </li>
        <li>
          <div class="u-cover u-cover-1">
            <img class="j-flag"
                 src="http://p1.music.126.net/uoSvbxfhYqSEQOFIaf6faQ==/19244752021115471.jpg?param=140y140">
            <a title="『华语』在外国取景的华语歌曲MV" href="/playlist?id=716626478" class="msk"></a>
            <div class="bottom">
              <a class="icon-play f-fr" title="播放" href="javascript:;" data-res-type="13" data-res-id="716626478"
                 data-res-action="play"></a>
              <span class="icon-headset"></span>
              <span class="nb">71万</span>
            </div>
          </div>
          <p class="dec">
            <a title="『华语』在外国取景的华语歌曲MV" href="/playlist?id=716626478" class="tit f-thide s-fc0">『华语』在外国取景的华语歌曲MV</a>
          </p>
          <p><span class="s-fc4">by</span> <a title="你的半杯可乐" href="/user/home?id=325726984"
                                              class="nm nm-icn f-thide s-fc3">你的半杯可乐</a></p>
        </li>
        <li>
          <div class="u-cover u-cover-1">
            <img class="j-flag"
                 src="http://p1.music.126.net/JJIt4Pqh8Vb23WO7rl0hBA==/19009456532734981.jpg?param=140y140">
            <a title="心要野，在青春的怀里轻歌曼舞" href="/playlist?id=716136265" class="msk"></a>
            <div class="bottom">
              <a class="icon-play f-fr" title="播放" href="javascript:;" data-res-type="13" data-res-id="716136265"
                 data-res-action="play"></a>
              <span class="icon-headset"></span>
              <span class="nb">245万</span>
            </div>
          </div>
          <p class="dec">
            <a title="心要野，在青春的怀里轻歌曼舞" href="/playlist?id=716136265" class="tit f-thide s-fc0">心要野，在青春的怀里轻歌曼舞</a>
          </p>
          <p><span class="s-fc4">by</span> <a title="丑萌的猫" href="/user/home?id=437728739"
                                              class="nm nm-icn f-thide s-fc3">丑萌的猫</a> <sup
            class="u-icn u-icn-84 "></sup>
          </p>
        </li>
        <li>
          <div class="u-cover u-cover-1">
            <img class="j-flag"
                 src="http://p1.music.126.net/y8LIAlBhMsKMCaaVhmduUA==/18624627464807144.jpg?param=140y140">
            <a title="「华语」三字歌，唱游大世界" href="/playlist?id=714598394" class="msk"></a>
            <div class="bottom">
              <a class="icon-play f-fr" title="播放" href="javascript:;" data-res-type="13" data-res-id="714598394"
                 data-res-action="play"></a>
              <span class="icon-headset"></span>
              <span class="nb">124万</span>
            </div>
          </div>
          <p class="dec">
            <a title="「华语」三字歌，唱游大世界" href="/playlist?id=714598394" class="tit f-thide s-fc0">「华语」三字歌，唱游大世界</a>
          </p>
          <p><span class="s-fc4">by</span> <a title="丑萌的猫" href="/user/home?id=437728739"
                                              class="nm nm-icn f-thide s-fc3">丑萌的猫</a> <sup
            class="u-icn u-icn-84 "></sup>
          </p>
        </li>
        <li>
          <div class="u-cover u-cover-1">
            <img class="j-flag"
                 src="http://p1.music.126.net/vYDzHj-NBMGUD9JRnQfvug==/109951162935254996.jpg?param=140y140">
            <a title="Remix | 欧美热单的重新演绎" href="/playlist?id=717650125" class="msk"></a>
            <div class="bottom">
              <a class="icon-play f-fr" title="播放" href="javascript:;" data-res-type="13" data-res-id="717650125"
                 data-res-action="play"></a>
              <span class="icon-headset"></span>
              <span class="nb">89万</span>
            </div>
          </div>
          <p class="dec">
            <a title="Remix | 欧美热单的重新演绎" href="/playlist?id=717650125" class="tit f-thide s-fc0">Remix | 欧美热单的重新演绎</a>
          </p>
          <p><span class="s-fc4">by</span> <a title="炮女_" href="/user/home?id=258653372"
                                              class="nm nm-icn f-thide s-fc3">炮女_</a> <sup
            class="u-icn u-icn-84 "></sup>
          </p>
        </li>
        <li>
          <div class="u-cover u-cover-1">
            <img class="j-flag"
                 src="http://p1.music.126.net/UW4V3ZjR5GIFdOY50XTCzA==/109951162920938605.jpg?param=140y140">
            <a title="『追本溯源』华语歌坛翻唱过的日语精选" href="/playlist?id=716285984" class="msk"></a>
            <div class="bottom">
              <a class="icon-play f-fr" title="播放" href="javascript:;" data-res-type="13" data-res-id="716285984"
                 data-res-action="play"></a>
              <span class="icon-headset"></span>
              <span class="nb">141万</span>
            </div>
          </div>
          <p class="dec">
            <a title="『追本溯源』华语歌坛翻唱过的日语精选" href="/playlist?id=716285984" class="tit f-thide s-fc0">『追本溯源』华语歌坛翻唱过的日语精选</a>
          </p>
          <p><span class="s-fc4">by</span> <a title="朩朩青尘" href="/user/home?id=7394345" class="nm nm-icn f-thide s-fc3">朩朩青尘</a>
            <sup class="u-icn u-icn-84 "></sup>
          </p>
        </li>
        <li>
          <div class="u-cover u-cover-1">
            <img class="j-flag"
                 src="http://p1.music.126.net/baJY6bCBgKuTEBRoYBpDhw==/109951162922997889.jpg?param=140y140">
            <a title="你觉得最悲伤的歌词是哪一段" href="/playlist?id=716360960" class="msk"></a>
            <div class="bottom">
              <a class="icon-play f-fr" title="播放" href="javascript:;" data-res-type="13" data-res-id="716360960"
                 data-res-action="play"></a>
              <span class="icon-headset"></span>
              <span class="nb">865万</span>
            </div>
          </div>
          <p class="dec">
            <a title="你觉得最悲伤的歌词是哪一段" href="/playlist?id=716360960" class="tit f-thide s-fc0">你觉得最悲伤的歌词是哪一段</a>
          </p>
          <p><span class="s-fc4">by</span> <a title="偏文" href="/user/home?id=247883585" class="nm nm-icn f-thide s-fc3">偏文</a>
            <sup class="icn u-icn2 u-icn2-music2 "></sup>
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
  export default {
    name: 'playlist',
    data () {
      return {
        msg: 'this is the content of area'
      }
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

  .u-btn2-1 {
    color: #333;
    background-position: right -100px;
  }

  .u-btn2, .u-btn2:hover {
    text-decoration: none;
  }

  .u-btn2 {
    padding: 0 5px 0 0;
    white-space: nowrap;
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

  .u-btn2, .u-btn2 i, .u-btn2 .icn, .u-btni, .u-btni i, .u-tag, .u-tag i, .u-btni-addply .ply {
    background: url(../image/button2.png) no-repeat 0 9999px;
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
  .u-icn, .u-icn2, .u-icn3 {
    display: inline-block;
    overflow: hidden;
    vertical-align: middle;
  }
  .u-icn, .u-title-1 .out .icon {
    background: url(../image/icon.png) no-repeat 0 9999px;
  }
  .u-btn-hot {
    width: 93px;
    height: 29px;
    background-position: 0 0;
  }

  .u-btn {
    display: inline-block;
  }

  .u-btn, div.u-page a, div.u-page a.js-selected, div.u-page a.znxt.js-disabled, div.u-page a.zprv.js-disabled {
    background: url(../image/button.png) no-repeat 0 9999px;
  }

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

</style>
