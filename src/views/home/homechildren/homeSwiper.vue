<template>
  <swiper>
    <swiper-item v-for="(item,index) in banner" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt="" @load="imgLoad">
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
  import {Swiper, SwiperItem} from 'components/common/swiper/index'
  export default {
    name: "homeSwiper",
    props:{
      banner:{
        type:Array,
        default(){
          return []
        }
      }
    },
    data(){
      return {
        isEndLoad:false
      }
    },
    components:{
      Swiper,
      SwiperItem
    },
    methods:{
      //滚动图片加载完成事件，只要一张图片加载完成div高度就会确定，因此加判断条件，发出一次自定义事件就可以
      imgLoad(){
        if(!this.isEndLoad){
          this.$emit('imgLoad');
          this.isEndLoad=true;
        }
      }
    }

  }
</script>

<style scoped>

</style>
