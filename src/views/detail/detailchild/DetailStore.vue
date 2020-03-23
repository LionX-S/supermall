<template>
  <div id="detailstore">
    <div id="info-top">
      <img :src="storeInfo.logo" alt="" class="logoimg">
      <span class="storename">{{storeInfo.name}}</span>
    </div>
    <div id="info-bott">
      <div class="GoodsNum">
        <div class="zong">
          <p style="font-size: 18px;color: #000000">{{storeInfo.sells}}</p>
          <p style="font-size: 12px">总销量</p>
        </div>
        <div class="quanbu">
          <p style="font-size: 18px;color: #000000">{{storeInfo.goodCount}}</p>
          <p style="font-size: 12px">全部宝贝</p>
        </div>
      </div>
      <div class="Miaoshu">
        <ul>
          <li v-for="item in storeInfo.score">{{item.name}}{{item.score}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailStore",
    props: {
      storeInfo: {
        type: Object,
        default() {
          return {}
        }
      }
    }
  }
</script>

<style scoped>
  #info-top {
    background-color: #fff;
    position: relative;
    height: 100px;
  }
  .storename{
    display: inline-block;
    height: 80px;
    line-height: 80px;
    margin-left: 100px;
    position: absolute;
    top: 50%;
    margin-top: -40px;
  }
  .logoimg {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    margin-top: -40px;
    margin-left: 15px;
    border: 1px solid #cccccc;
  }
  #info-bott{
    display: flex;

  }
  .GoodsNum,.Miaoshu{
    flex: 1;
  }
  .GoodsNum{
    display: flex;
    text-align: center;
    padding: 10px;
  }
  .zong,.quanbu{
    flex: 1;
  }
  .quanbu{
    border-right: 1px solid #cccccc;
  }
</style>
