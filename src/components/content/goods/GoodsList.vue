<template>
<!--  <div class="wrapper">-->
    <div class="goods-list">
      <goods-list-item v-for="(item,index) in GoodsList" :goods-list-item="item" :key="index"></goods-list-item>
      <!--   {{GoodsList}}-->
    </div>
<!--  </div>-->
</template>

<script>
  import GoodsListItem from "./GoodsListItem";
  // import BScroll from 'better-scroll'

  export default {
    name: "GoodsList",
    components: {
      GoodsListItem
    },
    props: {
      GoodsList: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data(){
      return {}
    },

  }
</script>

<style scoped>
  .goods-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
</style>
