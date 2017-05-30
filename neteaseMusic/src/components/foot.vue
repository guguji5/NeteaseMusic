<template>
  <div class="bottom">
      <h1>
          {{msg}}  &nbsp;&nbsp;&nbsp;<router-link to="/">Home</router-link>
          <router-link to="about">about</router-link>
      </h1>

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
  .bottom{
      text-align: center;
      border-top:1px solid #d3d3d3;
  }
</style>
