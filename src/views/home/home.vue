<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swiper :banner="banner"></home-swiper>
    <recommend-views :recommend="recommend"></recommend-views>
  </div>
</template>

<script>
  import navBar from "components/common/navbar/navBar";
  import {getHomeMultidata} from "network/home";
  import homeSwiper from "./homechildren/homeSwiper";
  import RecommendViews from "./homechildren/RecommendViews";

  export default {
    name: "home",
    components:{
      navBar,
      homeSwiper,
      RecommendViews
    },
    data(){
      return {
        banner:[],
        recommend:[]
      }
    },
    created() {
      getHomeMultidata().then(res=>{
        console.log(res);
        this.banner=res.data.banner.list;
        this.recommend=res.data.recommend.list;
      })
    }
  }
</script>

<style scoped>
  .home-nav{
    background-color:#FF0036;
    color: #ffffff;
  }
</style>
