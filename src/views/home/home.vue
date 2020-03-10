<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
  </div>
</template>

<script>
  import navBar from "components/common/navbar/navBar";
  export default {
    name: "home",
    components:{
      navBar
    }
  }
</script>

<style scoped>
  .home-nav{
    background-color:#FF0036;
    color: #ffffff;
  }
</style>
