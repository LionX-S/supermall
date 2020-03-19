<template>
  <swiper class="detailswiper">
    <swiper-item v-for="item in imgItem">
      <img :src="item" alt="">
    </swiper-item>
  </swiper>
</template>

<script>
  import {Swiper,SwiperItem} from 'components/common/swiper'
  export default {
    name: "DetailSwiper",
    components:{
      Swiper,
      SwiperItem
    },
    props:{
      imgItem:{
        type:Array,
        default(){
          return []
        }
      }
    },
  }
</script>

<style scoped>
  .detailswiper{
    height: 300px;
  }
</style>
