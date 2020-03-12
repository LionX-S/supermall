<template>
  <div class="goods-list-item">
    <img :src="GoodsListItem.show.img" alt="">
    <div class="info">
      <p>{{GoodsListItem.title}}</p>
      <span class="price">￥{{GoodsListItem.price}}</span>
      <span class="collect">{{GoodsListItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "GoodsListItem",
    props:{
      GoodsListItem:{
        type:Object,
        default(){
          return {}
        }
      }
    }
  }
</script>

<style scoped>
  .goods-list-item{
    width: 46%;
    height: 100%;
    position: relative;
    float: left;
    /*margin: 6px;*/
    border: 1px solid #fff;
    font-size: 12px;
  }
  .goods-list-item>img{
    width: 100%;
    height: 100%;
    border-radius: 5px;
  }
  .info>p{
    height:20px;
    line-height: 20px;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .info>span{
    margin:0 20px 0 20px;
  }
  .price{
    color: var(--color-high-text);
  }
</style>
