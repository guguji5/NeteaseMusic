<template>
  <div id="app">
    <top></top>
    <router-view></router-view>
    <foot></foot>
  </div>
</template>

<script>

import top from './components/top'
import foot from './components/foot'

export default {
  name: 'app',
  components: {
    top,
    foot
  }
}
</script>

<style>
@import './style/common.css';
#app {
  
}
</style>
