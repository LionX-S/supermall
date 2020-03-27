<template>
  <div id="bottom-nav">
    <div class="left">
      <div>
        <i></i>
        <span>客服</span>
      </div>
      <div>
        <i></i>
        <span>店铺</span>
      </div>
      <div>
        <i></i>
        <span>收藏</span>
      </div>
    </div>
    <div class="right">
      <div style="background-color: yellow;color:#000000" @click="addCart">加入购物车</div>
      <div style="background-color: var(--color-high-text);color:#ffffff">购买</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailBottomBar",
    methods:{
      addCart(){
        this.$emit('addCart');
      }
    }
  }
</script>

<style scoped>
#bottom-nav{
  height: 49px;
  position: relative;
  background-color: #fff;
  z-index: 100;
  display: flex;
  font-size: 14px;
}
  #bottom-nav div{
    height: 100%;
    flex: 1;
    line-height: 49px;
  }
  .left,.right{
    display: flex;
    text-align: center;
  }
  .left>div,.right>div{
    flex: 1;
  }
</style>
