<template>
  <div id="car">
    <nav-bar class="navbar">
      <div slot="center">购物车({{$store.state.carList.length}})</div>
    </nav-bar>
    <scroll class="content" ref="scroll">
      <car-list></car-list>
    </scroll>
  </div>
</template>

<script>
  import navBar from "components/common/navbar/navBar";
  import Scroll from "components/common/scroll/Scroll";
  import CarList from "./carchildren/CarList";
  export default {
    name: "shopcar",
    components:{
      navBar,
      Scroll,
      CarList
    },
    activated() {
      this.$refs.scroll.refresh();
    }
  }
</script>

<style scoped>
  .nav-bar{
    background-color: var(--color-tint);
    color: #ffffff;
  }
  #car{
    height: 100vh;
  }
  .content{
    height: calc(100% - 44px - 49px);
  }
</style>
