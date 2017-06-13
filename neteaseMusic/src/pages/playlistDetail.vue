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
                  <a data-res-action="play" :data-res-id="list.id" data-res-type="13" href="javascript:;"
                     class="u-btn2 u-btn2-2 u-btni-addply f-fl" hidefocus="true" title="播放"><i><em
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
                        <div class="hd "><span data-res-id="193121" data-res-type="18" data-res-action="play"
                                               data-res-from="13" :data-res-data="list.id"
                                               class="ply ">&nbsp;</span><span class="num">{{index+1}}</span></div>
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
          <!--<div class="n-cmt" id="comment-box" data-tid="A_PL_0_759153394" data-count="8" data-uid="291551773">-->
          <!--<div id="auto-id-mhl2WF8C7fBkzFz3">-->
          <!--<div class="u-title u-title-1">-->
          <!--<h3><span class="f-ff2">评论</span></h3><span class="sub s-fc3">共<span class="j-flag">8</span>条评论</span>-->
          <!--</div>-->
          <!--<div class="m-cmmt">-->
          <!--<div class="iptarea">-->
          <!--<div class="head"><img-->
          <!--src="http://p4.music.126.net/VnZiScyynLG7atLIZ2YPkw==/18686200114669622.jpg?param=50y50"></div>-->
          <!--<div class="j-flag">-->
          <!--<div>-->
          <!--<div class="m-cmmtipt f-cb f-pr">-->
          <!--<div class="u-txtwrap holder-parent f-pr" style="display: block;"><textarea-->
          <!--class="u-txt area j-flag" placeholder="评论" id="auto-id-9FClIpwf73ddaJ5h"></textarea></div>-->
          <!--<div class="btns f-cb f-pr"><i class="icn u-icn u-icn-36 j-flag"-->
          <!--id="auto-id-sIZOzdKoNRvWNF7i"></i><i-->
          <!--class="icn u-icn u-icn-41 j-flag" id="auto-id-yc6QG4A7o0eKX4Fl"></i><a-->
          <!--href="javascript:void(0)" class="btn u-btn u-btn-1 j-flag"-->
          <!--id="auto-id-SPQw1JxlArM67ncI">评论</a><span class="zs s-fc4 j-flag">140</span></div>-->
          <!--<div class="corr u-arr"><em class="arrline">◆</em><span class="arrclr">◆</span></div>-->
          <!--</div>-->
          <!--</div>-->
          <!--</div>-->
          <!--</div>-->
          <!--<div class="cmmts j-flag" id="auto-id-Cp6GbkXhvGs8QChb"><h3 class="u-hd4">最新评论(8)</h3>-->
          <!--<div id="4371207501497259431552" class="itm" data-id="437120750">-->
          <!--<div class="head"><a href="/user/home?id=381231445"><img-->
          <!--src="http://p1.music.126.net/uFKdw5SQyftjAuHd_eUq7A==/109951162893591907.jpg?param=50y50"></a>-->
          <!--</div>-->
          <!--<div class="cntwrap">-->
          <!--<div class="">-->
          <!--<div class="cnt f-brk"><a href="/user/home?id=381231445" class="s-fc7">July-C_</a><sup-->
          <!--class="u-icn u-icn-84"></sup>：看到第二首的歌曲封面感触颇多，直到现在还是挺喜欢何润东与赵文卓&nbsp;电视剧版的《风云》。记得03年读小学，有一次度假期中，看到剧里面关于火炼&nbsp;绝世好剑的片段，就找了一小段木棍想用火熏成黑木剑，当然，最后自然是然并卵，木棍烧成木炭，乌漆墨黑，一碰就碎&nbsp;<img-->
          <!--src="http://s1.music.126.net/style/web2/emt/emoji_353.png"></div>-->
          <!--</div>-->
          <!--<div class="rp">-->
          <!--<div class="time s-fc4">5分钟前</div>-->
          <!--<a data-id="437120750" data-type="like" href="javascript:void(0)"><i-->
          <!--class="zan u-icn2 u-icn2-12"></i></a><span class="sep">|</span><a href="javascript:void(0)"-->
          <!--class="s-fc3"-->
          <!--data-id="437120750"-->
          <!--data-type="reply">回复</a>-->
          <!--</div>-->
          <!--</div>-->
          <!--</div>-->
          <!--<div id="4371271571497259431552" class="itm" data-id="437127157">-->
          <!--<div class="head"><a href="/user/home?id=446746775"><img-->
          <!--src="http://p1.music.126.net/tQ1xrM-qOpiYQF6Ni9S1Sg==/18640020627546631.jpg?param=50y50"></a>-->
          <!--</div>-->
          <!--<div class="cntwrap">-->
          <!--<div class="">-->
          <!--<div class="cnt f-brk"><a href="/user/home?id=446746775" class="s-fc7">Cherry&#45;&#45;T</a>：好几首胡歌的，和与他有关的-->
          <!--</div>-->
          <!--</div>-->
          <!--<div class="rp">-->
          <!--<div class="time s-fc4">20分钟前</div>-->
          <!--<a data-id="437127157" data-type="like" href="javascript:void(0)"><i-->
          <!--class="zan u-icn2 u-icn2-12"></i></a><span class="sep">|</span><a href="javascript:void(0)"-->
          <!--class="s-fc3"-->
          <!--data-id="437127157"-->
          <!--data-type="reply">回复</a>-->
          <!--</div>-->
          <!--</div>-->
          <!--</div>-->
          <!--<div id="4371124231497259431552" class="itm" data-id="437112423">-->
          <!--<div class="head"><a href="/user/home?id=252954259"><img-->
          <!--src="http://p1.music.126.net/5mZMd5jFtWhTa4oNrzZWGw==/19099616486236560.jpg?param=50y50"></a>-->
          <!--</div>-->
          <!--<div class="cntwrap">-->
          <!--<div class="">-->
          <!--<div class="cnt f-brk"><a href="/user/home?id=252954259" class="s-fc7">余生不会盛开</a>：很适合许嵩半城烟沙-->
          <!--</div>-->
          <!--</div>-->
          <!--<div class="rp">-->
          <!--<div class="time s-fc4">38分钟前</div>-->
          <!--<a data-id="437112423" data-type="like" href="javascript:void(0)"><i-->
          <!--class="zan u-icn2 u-icn2-12"></i></a><span class="sep">|</span><a href="javascript:void(0)"-->
          <!--class="s-fc3"-->
          <!--data-id="437112423"-->
          <!--data-type="reply">回复</a>-->
          <!--</div>-->
          <!--</div>-->
          <!--</div>-->
          <!--<div id="4371045511497259431552" class="itm" data-id="437104551">-->
          <!--<div class="head"><a href="/user/home?id=293517276"><img-->
          <!--src="http://p1.music.126.net/JVJCA_IaMwVs41a_VCNgfQ==/1376588569899947.jpg?param=50y50"></a></div>-->
          <!--<div class="cntwrap">-->
          <!--<div class="">-->
          <!--<div class="cnt f-brk"><a href="/user/home?id=293517276" class="s-fc7">你要等1997</a>：封面233</div>-->
          <!--</div>-->
          <!--<div class="rp">-->
          <!--<div class="time s-fc4">39分钟前</div>-->
          <!--<a data-id="437104551" data-type="like" href="javascript:void(0)"><i-->
          <!--class="zan u-icn2 u-icn2-12"></i></a><span class="sep">|</span><a href="javascript:void(0)"-->
          <!--class="s-fc3"-->
          <!--data-id="437104551"-->
          <!--data-type="reply">回复</a>-->
          <!--</div>-->
          <!--</div>-->
          <!--</div>-->
          <!--<div id="4371041721497259431552" class="itm" data-id="437104172">-->
          <!--<div class="head"><a href="/user/home?id=279944226"><img-->
          <!--src="http://p1.music.126.net/UaIBJY1Vf1cgYIHrgILK-Q==/3393092912157244.jpg?param=50y50"></a></div>-->
          <!--<div class="cntwrap">-->
          <!--<div class="">-->
          <!--<div class="cnt f-brk"><a href="/user/home?id=279944226" class="s-fc7">-是年少的欢喜</a>：教主的杨过<img-->
          <!--src="http://s1.music.126.net/style/web2/emt/emoji_343.png"></div>-->
          <!--</div>-->
          <!--<div class="que f-brk f-pr s-fc3"><span class="darr"><i class="bd">◆</i><i class="bg">◆</i></span><a-->
          <!--class="s-fc7" href="/user/home?id=303214711">一生-&#45;&#45;死&#45;&#45;</a>：封面是谁呢？-->
          <!--</div>-->
          <!--<div class="rp">-->
          <!--<div class="time s-fc4">53分钟前</div>-->
          <!--<a data-id="437104172" data-type="like" href="javascript:void(0)"><i-->
          <!--class="zan u-icn2 u-icn2-12"></i></a><span class="sep">|</span><a href="javascript:void(0)"-->
          <!--class="s-fc3"-->
          <!--data-id="437104172"-->
          <!--data-type="reply">回复</a>-->
          <!--</div>-->
          <!--</div>-->
          <!--</div>-->
          <!--<div id="4370893911497259431552" class="itm" data-id="437089391">-->
          <!--<div class="head"><a href="/user/home?id=303214711"><img-->
          <!--src="http://p1.music.126.net/oChtDFHa7p2diT3ZeF5pfQ==/1398578804825766.jpg?param=50y50"></a></div>-->
          <!--<div class="cntwrap">-->
          <!--<div class="">-->
          <!--<div class="cnt f-brk"><a href="/user/home?id=303214711" class="s-fc7">一生-&#45;&#45;死&#45;&#45;</a>：封面是谁呢？</div>-->
          <!--</div>-->
          <!--<div class="que f-brk f-pr s-fc3"><span class="darr"><i class="bd">◆</i><i class="bg">◆</i></span><a-->
          <!--class="s-fc7" href="/user/home?id=279944226">-是年少的欢喜</a>：冲着封面进来的≧ˍ≦-->
          <!--</div>-->
          <!--<div class="rp">-->
          <!--<div class="time s-fc4">53分钟前</div>-->
          <!--<a data-id="437089391" data-type="like" href="javascript:void(0)"><i-->
          <!--class="zan u-icn2 u-icn2-12"></i></a><span class="sep">|</span><a href="javascript:void(0)"-->
          <!--class="s-fc3"-->
          <!--data-id="437089391"-->
          <!--data-type="reply">回复</a>-->
          <!--</div>-->
          <!--</div>-->
          <!--</div>-->
          <!--<div id="4370804561497259431552" class="itm" data-id="437080456">-->
          <!--<div class="head"><a href="/user/home?id=303347331"><img-->
          <!--src="http://p1.music.126.net/gNbloODdPTD9gvpX_N-AzQ==/3444769935961821.jpg?param=50y50"></a></div>-->
          <!--<div class="cntwrap">-->
          <!--<div class="">-->
          <!--<div class="cnt f-brk"><a href="/user/home?id=303347331" class="s-fc7">曌緒</a>：挺经典的</div>-->
          <!--</div>-->
          <!--<div class="rp">-->
          <!--<div class="time s-fc4">16:03</div>-->
          <!--<a data-id="437080456" data-type="like" href="javascript:void(0)"><i-->
          <!--class="zan u-icn2 u-icn2-12"></i></a><span class="sep">|</span><a href="javascript:void(0)"-->
          <!--class="s-fc3"-->
          <!--data-id="437080456"-->
          <!--data-type="reply">回复</a>-->
          <!--</div>-->
          <!--</div>-->
          <!--</div>-->
          <!--<div id="4370382291497259431552" class="itm" data-id="437038229">-->
          <!--<div class="head"><a href="/user/home?id=279944226"><img-->
          <!--src="http://p1.music.126.net/UaIBJY1Vf1cgYIHrgILK-Q==/3393092912157244.jpg?param=50y50"></a></div>-->
          <!--<div class="cntwrap">-->
          <!--<div class="">-->
          <!--<div class="cnt f-brk"><a href="/user/home?id=279944226" class="s-fc7">-是年少的欢喜</a>：冲着封面进来的≧ˍ≦-->
          <!--</div>-->
          <!--</div>-->
          <!--<div class="rp">-->
          <!--<div class="time s-fc4">15:23</div>-->
          <!--<a data-id="437038229" data-type="like" href="javascript:void(0)"><i-->
          <!--class="zan u-icn2 u-icn2-12"></i> (1)</a><span class="sep">|</span><a-->
          <!--href="javascript:void(0)" class="s-fc3" data-id="437038229" data-type="reply">回复</a></div>-->
          <!--</div>-->
          <!--</div>-->
          <!--</div>-->
          <!--<div class="j-flag auto-1497259431553-parent" style="display: none;">-->
          <!--<div class="auto-1497259431553 u-page"><a href="#" class="zbtn zprv js-p-1497259431552 js-disabled"-->
          <!--id="auto-id-VJuQonzIq6EbyRh7">上一页</a><a href="#"-->
          <!--class="zpgi zpg1 js-i-1497259431552 js-selected"-->
          <!--id="auto-id-0b38xGZb9GzI8w35">1</a><a-->
          <!--href="#" class="zpgi zpg2 js-i-1497259431552" id="auto-id-b6iSBBd7ly9V3OhN"-->
          <!--style="display: none;"></a><a href="#" class="zpgi zpg3 js-i-1497259431552"-->
          <!--id="auto-id-zOO4wK5TfWfhTavf" style="display: none;"></a><a href="#"-->
          <!--class="zpgi zpg4 js-i-1497259431552"-->
          <!--id="auto-id-RJZZSyTk80gmMgxc"-->
          <!--style="display: none;"></a><a-->
          <!--href="#" class="zpgi zpg5 js-i-1497259431552" id="auto-id-xE7NhzC0KhTTxDy5"-->
          <!--style="display: none;"></a><a href="#" class="zpgi zpg6 js-i-1497259431552"-->
          <!--id="auto-id-w0STz3adaHmAhcEM" style="display: none;"></a><a href="#"-->
          <!--class="zpgi zpg7 js-i-1497259431552"-->
          <!--id="auto-id-Thl1CQiS9UoEF9ng"-->
          <!--style="display: none;"></a><a-->
          <!--href="#" class="zpgi zpg8 js-i-1497259431552" id="auto-id-iwxVhCvU9mIspTg0"-->
          <!--style="display: none;"></a><a href="#" class="zpgi zpg9 js-i-1497259431552"-->
          <!--id="auto-id-FnpRJNDCqxzTn8MG" style="display: none;"></a><a href="#"-->
          <!--class="zbtn znxt js-n-1497259431552 js-disabled"-->
          <!--id="auto-id-4Q4IaLTA9sJodKfl">下一页</a>-->
          <!--</div>-->
          <!--</div>-->
          <!--</div>-->
          <!--</div>-->
          <!--</div>-->
        </div>
      </div>
    </div>
    <!--<div class="g-sd4">-->
    <!--<div class="g-wrap7">-->
    <!--<div id="j-music-ad" class="m-sidead" data-has-music-ad="0">-->
    <!--<div class="j-flag f-hide" id="auto-id-oWArsGKmsWZfXTn2"></div>-->
    <!--<div class="j-flag">-->
    <!--<ins class="adsbydm" inner-prod="adbid" inner-width="200" inner-height="220"-->
    <!--inner-src="https://iad.g.163.com/wa/ad?site=netease&amp;affiliate=music&amp;cat=detail&amp;type=logo200x220&amp;location=1"-->
    <!--check-src="https://iad.g.163.com/wa/ad_check?site=netease&amp;affiliate=music&amp;cat=detail&amp;type=logo200x220&amp;location=1">-->
    <!--<div>-->
    <!--<iframe id="f4285852170d448a8603a0a9f3def714" width="200" height="220" prod="adbid" frameborder="0"-->
    <!--scrolling="no" border="0"-->
    <!--src="https://iad.g.163.com/wa/ad?site=netease&amp;affiliate=music&amp;cat=detail&amp;type=logo200x220&amp;location=1&amp;uuid=f4285852170d448a8603a0a9f3def714"></iframe>-->
    <!--</div>-->
    <!--</ins>-->
    <!--</div>-->
    <!--</div>-->
    <!--<h3 class="u-hd3">-->
    <!--<span class="f-fl">喜欢这个歌单的人</span>-->
    <!--</h3>-->
    <!--<ul class="m-piclist f-cb">-->
    <!--<li>-->
    <!--<a href="/user/home?id=364353690" class="f-tdn" title="琥珀资深音乐人"><img-->
    <!--src="http://p1.music.126.net/jUZSSZNcANsqQaW8n5Cy2w==/18670806953236108.jpg?param=40y40">-->
    <!--</a></li>-->
    <!--<li>-->
    <!--<a href="/user/home?id=435251352" class="f-tdn" title="uestc默言"><img-->
    <!--src="http://p1.music.126.net/VnZiScyynLG7atLIZ2YPkw==/18686200114669622.jpg?param=40y40">-->
    <!--</a></li>-->
    <!--<li>-->
    <!--<a href="/user/home?id=352217911" class="f-tdn" title="慈悲生佛"><img-->
    <!--src="http://p1.music.126.net/fUSFkpHSN2GFVOQNNDwq1Q==/18635622580960734.jpg?param=40y40">-->
    <!--</a></li>-->
    <!--<li>-->
    <!--<a href="/user/home?id=273005380" class="f-tdn" title="歲月如歌vw"><img-->
    <!--src="http://p1.music.126.net/uJesHpJ4QNSvUhKojn52aw==/18504780697281394.jpg?param=40y40">-->
    <!--</a></li>-->
    <!--<li>-->
    <!--<a href="/user/home?id=289861408" class="f-tdn" title="一梦三年全是她颜"><img-->
    <!--src="http://p1.music.126.net/D6No9l_p6wxEe73Acldibw==/1422768058078441.jpg?param=40y40">-->
    <!--</a></li>-->
    <!--<li>-->
    <!--<a href="/user/home?id=432758161" class="f-tdn" title="湘弟弟"><img-->
    <!--src="http://p1.music.126.net/4Krkui7mUc1u_23D6RajNw==/19150194020988199.jpg?param=40y40">-->
    <!--</a></li>-->
    <!--<li>-->
    <!--<a href="/user/home?id=466915731" class="f-tdn" title="香白菜-"><img-->
    <!--src="http://p1.music.126.net/S2Gcvn77ZV4ZErGye1EDzw==/18923694625733033.jpg?param=40y40">-->
    <!--</a></li>-->
    <!--<li>-->
    <!--<a href="/user/home?id=361320097" class="f-tdn" title="亲爱的请安好"><img-->
    <!--src="http://p1.music.126.net/Dnyw5mrv5Hp32Zb7tlnFyw==/18738976674086742.jpg?param=40y40">-->
    <!--</a></li>-->
    <!--</ul>-->
    <!--<h3 class="u-hd3">-->
    <!--<span class="f-fl">热门歌单</span>-->
    <!--</h3>-->
    <!--<ul class="m-rctlist f-cb">-->
    <!--<li>-->
    <!--<div class="cver u-cover u-cover-3">-->
    <!--<a href="/playlist?id=759153394" title="武侠丨江湖恩怨何时了，一曲逍遥终罢了。" data-res-id="759153394" data-res-type="13"-->
    <!--data-res-action="log" data-res-data="recommendclick|0||playlist-playlist-recommend|759153394"><img-->
    <!--src="http://p4.music.126.net/Y33TAK_8JxdfKE8hXqJOJA==/19050138463028113.jpg?param=50y50">-->
    <!--</a>-->
    <!--</div>-->
    <!--<div class="info">-->
    <!--<p class="f-thide">-->
    <!--<a class="sname f-fs1 s-fc0" href="/playlist?id=759153394" title="武侠丨江湖恩怨何时了，一曲逍遥终罢了。"-->
    <!--data-res-id="759153394" data-res-type="13" data-res-action="log"-->
    <!--data-res-data="recommendclick|0||playlist-playlist-recommend|759153394">武侠丨江湖恩怨何时了，一曲逍遥终罢了。</a>-->
    <!--</p>-->
    <!--<p><span class="by s-fc4">by</span><a class="nm nm f-thide s-fc3" href="/user/home?id=291551773"-->
    <!--title="十年断魂潮尾">十年断魂潮尾</a>-->
    <!--</p></div>-->
    <!--</li>-->
    <!--<li>-->
    <!--<div class="cver u-cover u-cover-3">-->
    <!--<a href="/playlist?id=744381058" title="心事集| 那些时光里，偷偷攒下的故事" data-res-id="744381058" data-res-type="13"-->
    <!--data-res-action="log" data-res-data="recommendclick|1||playlist-playlist-recommend|759153394"><img-->
    <!--src="http://p4.music.126.net/YFduwKSHcfaUo_NLXmdLFA==/109951162936874372.jpg?param=50y50">-->
    <!--</a>-->
    <!--</div>-->
    <!--<div class="info">-->
    <!--<p class="f-thide">-->
    <!--<a class="sname f-fs1 s-fc0" href="/playlist?id=744381058" title="心事集| 那些时光里，偷偷攒下的故事"-->
    <!--data-res-id="744381058" data-res-type="13" data-res-action="log"-->
    <!--data-res-data="recommendclick|1||playlist-playlist-recommend|759153394">心事集| 那些时光里，偷偷攒下的故事</a>-->
    <!--</p>-->
    <!--<p><span class="by s-fc4">by</span><a class="nm nm f-thide s-fc3" href="/user/home?id=60348755"-->
    <!--title="Double7琦">Double7琦</a>-->
    <!--<sup class="u-icn u-icn-84 "></sup>-->
    <!--</p></div>-->
    <!--</li>-->
    <!--<li>-->
    <!--<div class="cver u-cover u-cover-3">-->
    <!--<a href="/playlist?id=728981890" title="欧美 | 膳后小憩，让耳朵和音乐来一场约会" data-res-id="728981890" data-res-type="13"-->
    <!--data-res-action="log" data-res-data="recommendclick|2||playlist-playlist-recommend|759153394"><img-->
    <!--src="http://p4.music.126.net/ActzzW7xNm4A5lwAUaqLaA==/109951162933755027.jpg?param=50y50">-->
    <!--</a>-->
    <!--</div>-->
    <!--<div class="info">-->
    <!--<p class="f-thide">-->
    <!--<a class="sname f-fs1 s-fc0" href="/playlist?id=728981890" title="欧美 | 膳后小憩，让耳朵和音乐来一场约会"-->
    <!--data-res-id="728981890" data-res-type="13" data-res-action="log"-->
    <!--data-res-data="recommendclick|2||playlist-playlist-recommend|759153394">欧美 | 膳后小憩，让耳朵和音乐来一场约会</a>-->
    <!--</p>-->
    <!--<p><span class="by s-fc4">by</span><a class="nm nm f-thide s-fc3" href="/user/home?id=95155098"-->
    <!--title="滴嘀迪">滴嘀迪</a>-->
    <!--</p></div>-->
    <!--</li>-->
    <!--<li>-->
    <!--<div class="cver u-cover u-cover-3">-->
    <!--<a href="/playlist?id=748435904" title="『韩语』如夏日般的歌曲陪伴你这个季节" data-res-id="748435904" data-res-type="13"-->
    <!--data-res-action="log" data-res-data="recommendclick|3||playlist-playlist-recommend|759153394"><img-->
    <!--src="http://p3.music.126.net/-Kz23YWXlHyjDcs95i2w9A==/18796151278765715.jpg?param=50y50">-->
    <!--</a>-->
    <!--</div>-->
    <!--<div class="info">-->
    <!--<p class="f-thide">-->
    <!--<a class="sname f-fs1 s-fc0" href="/playlist?id=748435904" title="『韩语』如夏日般的歌曲陪伴你这个季节"-->
    <!--data-res-id="748435904" data-res-type="13" data-res-action="log"-->
    <!--data-res-data="recommendclick|3||playlist-playlist-recommend|759153394">『韩语』如夏日般的歌曲陪伴你这个季节</a>-->
    <!--</p>-->
    <!--<p><span class="by s-fc4">by</span><a class="nm nm f-thide s-fc3" href="/user/home?id=253478656"-->
    <!--title="-POTATOVMIN-">-POTATOVMIN-</a>-->
    <!--</p></div>-->
    <!--</li>-->
    <!--<li>-->
    <!--<div class="cver u-cover u-cover-3">-->
    <!--<a href="/playlist?id=721015141" title="电子| 夏日必备☀Tropical Vibes 精选" data-res-id="721015141"-->
    <!--data-res-type="13" data-res-action="log"-->
    <!--data-res-data="recommendclick|4||playlist-playlist-recommend|759153394"><img-->
    <!--src="http://p4.music.126.net/M78ErX9NUvb7tMY21yxIUQ==/19066631137381930.jpg?param=50y50">-->
    <!--</a>-->
    <!--</div>-->
    <!--<div class="info">-->
    <!--<p class="f-thide">-->
    <!--<a class="sname f-fs1 s-fc0" href="/playlist?id=721015141" title="电子| 夏日必备☀Tropical Vibes 精选"-->
    <!--data-res-id="721015141" data-res-type="13" data-res-action="log"-->
    <!--data-res-data="recommendclick|4||playlist-playlist-recommend|759153394">电子| 夏日必备☀Tropical Vibes-->
    <!--精选</a>-->
    <!--</p>-->
    <!--<p><span class="by s-fc4">by</span><a class="nm nm f-thide s-fc3" href="/user/home?id=96242821"-->
    <!--title="孤单旅人c">孤单旅人c</a>-->
    <!--</p></div>-->
    <!--</li>-->
    <!--</ul>-->
    <!--<div class="m-multi">-->
    <!--<h3 class="u-hd3">-->
    <!--<span class="f-fl">网易云音乐多端下载</span>-->
    <!--</h3>-->
    <!--<ul class="bg f-cb">-->
    <!--<li><a data-res-action="bilog" data-log-action="downloadapp"-->
    <!--data-log-json="{&quot;type&quot;:&quot;iPhone&quot;,&quot;source&quot;:&quot;detail&quot;}"-->
    <!--href="https://itunes.apple.com/app/id590338362" class="ios" hidefocus="true"-->
    <!--target="_blank">iPhone</a></li>-->
    <!--<li><a data-res-action="bilog" data-log-action="downloadapp"-->
    <!--data-log-json="{&quot;type&quot;:&quot;pc&quot;,&quot;source&quot;:&quot;detail&quot;}"-->
    <!--href="https://music.163.com/api/pc/download/latest" class="pc" hidefocus="true"-->
    <!--target="_blank">PC</a></li>-->
    <!--<li><a data-res-action="bilog" data-log-action="downloadapp"-->
    <!--data-log-json="{&quot;type&quot;:&quot;android&quot;,&quot;source&quot;:&quot;detail&quot;}"-->
    <!--href="https://music.163.com/api/android/download/latest2" class="aos" hidefocus="true"-->
    <!--target="_blank">Android</a></li>-->
    <!--</ul>-->
    <!--<p class="s-fc4">同步歌单，随时畅听320k好音乐</p>-->
    <!--</div>-->
    <!--</div>-->
    <!--</div>-->
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
    methods: {},

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
</style>
