<template>
  <div class="top">
   {{msg}}
         <router-link to="/">Home</router-link>
      <router-link to="about">about</router-link>
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
    .top{
      color:purple;
      border: 1px solid purple;
    }
</style>
