<template>
  <div v-if="Object.keys(GoodsInfo).length!==0" class="base-info">
    <div class="info-title">{{GoodsInfo.title}}</div>
    <div class="info-price">
      <span class="n-price">{{GoodsInfo.newPrice}}</span>
      <span class="o-price">{{GoodsInfo.oldPrice}}</span>
      <span v-if="GoodsInfo.discount" class="discount">{{GoodsInfo.discount}}</span>
    </div>
    <div class="info-other">
      <span>{{GoodsInfo.columns[0]}}</span>
      <span>{{GoodsInfo.columns[1]}}</span>
      <span>{{GoodsInfo.services[GoodsInfo.services.length-1].name}}</span>
    </div>
    <div class="info-service">
      <span class="info-service-item" v-for="index in GoodsInfo.services.length-1" :key="index">
        <img :src="GoodsInfo.services[index-1].icon" alt="">
        <span>{{GoodsInfo.services[index-1].name}}</span>
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailBaseInfo",
    props: {
      GoodsInfo: {
        type: Object,
        default() {
          return {}
        }
      }
    }
  }
</script>

<style scoped>
  .base-info {
    padding: 5px;

  }

  .info-title {
    font-size: 16px;
    font-weight: 600;
    height: 60px;
  }

  .n-price {
    color: var(--color-high-text);
    font-size: 20px;
  }

  .o-price {
    font-size: 12px;
    text-decoration: line-through;
    margin-left: 5px;
  }

  .discount {
    display: inline-block;
    padding: 3px;
    height: 20px;
    border-radius: 10px;
    background-color: var(--color-high-text);
    font-size: 12px;
    color: #ffffff;
    margin-left: 5px;
  }

  .info-other {
    display: flex;
    margin-top: 10px;
    border-bottom: 1px solid #cccccc;
    padding: 5px;
  }

  .info-other > span {
    flex: 1;
    font-size: 12px;
    text-align: center;
    color: #cccccc;
  }

  .info-service {
    display: flex;
    height: 44px;
    line-height: 44px;
    font-size: 14px;
  }

  .info-service-item {
    flex: 1;
    text-align: center;
  }

  .info-service-item > img {
    width: 10px;
    height: 10px;
  }
</style>
