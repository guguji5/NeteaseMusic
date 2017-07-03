# neteasemusic

> guguji's music demo

这个demo旨在练习vue.js,尝试用vue2.0重构网易云音乐pc版。后台接口是从网上找的开源的[网易云音乐的api](https://binaryify.github.io/NeteaseCloudMusicApi)。
下载到本地并执行`node app`然后监听localhost:3000端口即可访问。

*后台api是本地获取数据必备*

![首页](/home.gif "首页")
![歌词页](/detail.gif "歌词页")
## 安装

``` bash
#download repository
git clone https://github.com/guguji5/NeteaseMusic.git

#switch file catalog
cd NeteaseMusic/neteaseMusic/

# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev
```
## 实现功能

 1. H5 audio实现音乐播放                 ★★
 2. 拖拽，点击改变歌曲进度                 ★
 3. 歌词同步展示                         ★★
 4. 歌曲清单功能及上一曲，下一曲功能        ★
 5. vuex组件，单一状态管理                ★★
 6. vue-router路由管理                   ★
 7. filters配置                          ★
 8. 主页，歌单页，歌单详情页编写            ★
 9. 代理配置                              ★
 10.循环方式切换，实现单曲循环，随机播放     ★

 ## 有待完善
 网易云音乐是个十分庞大的站，分类巨多，但功能点相似，所以目前demo只做了首页和歌单两个页面。
 目前也在逐步完善，重点的会挑有意思的功能优先实现。欢迎提交代码。
