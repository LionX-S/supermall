<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swiper :banner="banner"></home-swiper>
    <recommend-views :recommend="recommend"></recommend-views>
    <feature-view></feature-view>
    <tab-control :titles="titles"></tab-control>
    <ul>
      <li>礼包1</li>
      <li>礼包2</li>
      <li>礼包3</li>
      <li>礼包4</li>
      <li>礼包5</li>
      <li>礼包6</li>
      <li>礼包7</li>
      <li>礼包8</li>
      <li>礼包9</li>
      <li>礼包10</li>
      <li>礼包11</li>
      <li>礼包12</li>
      <li>礼包13</li>
      <li>礼包14</li>
      <li>礼包15</li>
      <li>礼包16</li>
      <li>礼包17</li>
      <li>礼包18</li>
      <li>礼包19</li>
      <li>礼包20</li>
    </ul>
  </div>
</template>

<script>
  import navBar from "components/common/navbar/navBar";
  import TabControl from "components/content/tabControl/TabControl";

  import {getHomeMultidata} from "network/home";

  import homeSwiper from "./homechildren/homeSwiper";
  import RecommendViews from "./homechildren/RecommendViews";
  import FeatureView from "./homechildren/FeatureView";

  export default {
    name: "home",
    components:{
      navBar,
      TabControl,
      homeSwiper,
      RecommendViews,
      FeatureView

    },
    data(){
      return {
        banner:[],
        recommend:[],
        titles:['流行','新款','精选']
      }
    },
    created() {
      getHomeMultidata().then(res=>{
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
    position: fixed;
    top:0;
    left:0;
    right: 0;
    z-index: 9;
  }
  #home{
    padding-top:44px;
  }
</style>
