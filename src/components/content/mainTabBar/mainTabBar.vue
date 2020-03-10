<template>
  <tabbar>
    <tab-bar-item a-link="/home" active-color="deepPink">
      <img slot="item-icon" src="~assets/img/tabbar/home.svg" alt="">
      <div slot="item-text">主页</div>
    </tab-bar-item>
    <tab-bar-item a-link="/list" active-color="deepPink">
      <img slot="item-icon" src="~assets/img/tabbar/list.svg" alt="">
      <div slot="item-text">分类</div>
    </tab-bar-item>
    <tab-bar-item a-link="/shopcar" active-color="deepPink">
      <img slot="item-icon" src="~assets/img/tabbar/shopcar.svg" alt="">
      <div slot="item-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item a-link="/mine" active-color="deepPink">
      <img slot="item-icon" src="~assets/img/tabbar/mine.svg" alt="">
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tabbar>
</template>

<script>
  import tabbar from 'components/common/tabbar/tabbar';
  import tabBarItem from 'components/common/tabbar/tabBarItem';
  export default {
    name: "mainTabBar",
    components:{
      tabbar,
      tabBarItem
    }
  }
</script>

<style scoped>

</style>
