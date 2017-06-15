<template>
  <div id="app">
    <top></top>
    <router-view></router-view>
    <foot></foot>
    <player></player>
  </div>
</template>

<script>

import top from './components/top'
import foot from './components/foot'
import player from './components/player'

export default {
  name: 'app',
  components: {
    top,
    foot, player
  }
}
</script>

<style>
@import './style/common.css';
#app {
  float: left;
  width: 100%;
}
</style>
