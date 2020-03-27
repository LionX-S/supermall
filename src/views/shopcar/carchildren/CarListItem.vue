<template>
  <div id="carlistitem">
    <div class="carlistitem">
      <img src="~assets/img/cart/tick.svg" alt="" class="checkbox" :class="{activecheck:activecheck}">
      <img :src="product.image" alt="" class="shopimage">
      <div class="shopmsg">
        <p class="title">{{product.title}}</p>
        <p class="desc">{{product.desc}}</p>
        <p>
          <span class="left">￥{{product.price}}</span>
          <span class="right">×{{product.count}}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "CarListItem",
    data(){
      return{
        activecheck:false
      }
    },
    props:{
      product:{
        type:Object,
        default(){
          return {}
        }
      }
    }
  }
</script>

<style scoped>
  .carlistitem{
    border-bottom: 1px solid #cccccc;
    width: 100%;
    height: 150px;
    position: relative;
  }
  .checkbox{
    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border:1px solid #cccccc;
    top:65px;
    left: 5px;
  }
  .activecheck{
    background-color: red;
    border-color: red;
  }
  .shopimage{
    height: 130px;
    width: 90px;
    border-radius: 5px;
    position: absolute;
    top:10px;
    left: 40px;
  }
  .shopmsg{
    height: 130px;
    width: 55%;
    position: absolute;
    right: 10px;
    top: 10px;
  }
  .shopmsg>p{
    width: 100%;
    height: 43px;
    overflow: hidden;
    line-height: 43px;
  }
  .title{
    font-size: 16px;
    color: #000000;
  }
  .desc{
    font-size: 14px;
    color: #cccccc;
  }
  .left{
    font-size: 16px;
    color: var(--color-tint);
  }
</style>
