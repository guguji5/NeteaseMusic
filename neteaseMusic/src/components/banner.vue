<template>
  <div id="slider">
  <!-- 写死的值，可以直接用height，interval，如果是双向绑定的需要写   v-bind:height -->
    <slider animation="fade" height='336px' interval='10000'>
      <p style="line-height: 280px; font-size: 5rem; text-align: center;" v-if="!list.length">Loading...</p>
      <slider-item v-for="(i, index) in list" :key="index" :on-click="test">
        <div class="wrap">
          <img :src="i.pic">
        </div>
      </slider-item>
    </slider>
  </div>
</template>

<script>
  import { Slider, SliderItem } from 'vue-easy-slider'
  export default {
    name: 'banner',
    data () {
      return {
        list: []
      }
    },
    methods: {
      test () {
        console.log(1)
      }
    },
    mounted () {
      setTimeout(() => {
        let data = {
          "banners":[
          {
            "targetType":10,
            "url":"",
            "titleColor":"red",
            "typeTitle":"新碟首发",
            "pic":"http://p3.music.126.net/s25q2x5QyqsAzilCurD-2w==/7973658325212564.jpg",
            "exclusive":false,
            "targetId":3165446
          },
          {
            "targetType":1005,
            "url":"http://music.163.com/m/topic/170001",
            "titleColor":"blue",
            "typeTitle":"专栏",
            "pic":"http://p4.music.126.net/V9-MXz6b2MNhEKjutoDWIg==/7937374441542745.jpg",
            "exclusive":false,
            "targetId":170001
          },
          {
            "targetType":1005,
            "url":"http://music.163.com/m/topic/169001",
            "titleColor":"blue",
            "typeTitle":"专栏",
            "pic":"http://p4.music.126.net/CTU5B9R9y3XyYBZXJUXzTg==/2897213141428023.jpg",
            "exclusive":false,
            "targetId":169001
          },
          {
            "targetType":1000,
            "url":"",
            "titleColor":"red",
            "typeTitle":"歌单",
            "pic":"http://p4.music.126.net/tGPljf-IMOCyPvumoWLOTg==/7987951976374270.jpg",
            "exclusive":false,
            "targetId":81662699
          },
          {
            "targetType":3000,
            "url":"http://wlj2015.qq.com/",
            "titleColor":"blue",
            "typeTitle":"推广",
            "pic":"http://p4.music.126.net/mp2Y2n4ueZzIj6JSnUOdtw==/7875801790676538.jpg",
            "exclusive":false,
            "targetId":0
          },
          {
            "targetType":10,
            "url":"",
            "titleColor":"red",
            "typeTitle":"新碟首发",
            "pic":"http://p3.music.126.net/e0gGadEhjur2UuUpDF9hPg==/7788940372125389.jpg",
            "exclusive":false,
            "targetId":3165337
          }
          ],
          "code":200
        }
      this.list = data.banners;
    }, 1000)
    },
    components: {
      'Slider': Slider,
      'SliderItem': SliderItem
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  slider{
    
  }
  img{
    height: 336px;
  }
  .wrap{
    text-align: center
  }
</style>
