<template>
    <div id="slider">
        <!-- 写死的值，可以直接用height，interval，如果是双向绑定的需要写   v-bind:height -->
        <slider animation="fade" height='336px'>
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
    import {banner} from  './../service/getDate'
    import {Slider, SliderItem} from 'vue-easy-slider'

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
//            var api=this.$store.state.proxyUrl;
//          因为vue-resource绑定的this必须是当前的上下文，所以得传进去
            banner(this).get().then(res => {
                this.list = res.body.banners;
            });
//           也可以这么bind一下，但是，实在是uglify
//           banner.bind(this)().get()
//               .then(res => {
//                console.log(res)
//                this.list = res.body.banners;
//            });

        },
        components: {
            'Slider': Slider,
            'SliderItem': SliderItem
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    img {
        width: 980px;
        /*height: 336px;*/
    }

    .wrap {
        text-align: center
    }
</style>
