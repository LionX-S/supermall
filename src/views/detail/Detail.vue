<template>
  <div id="detail">
    <detail-nav></detail-nav>
    <scroll class="content">
    <detail-swiper :img-item="imgList"></detail-swiper>
    <detail-base-info :goods-info="GoodsInfo"></detail-base-info>
    <detail-store :store-info="StoreInfo"></detail-store>
    </scroll>
  </div>
</template>

<script>
  import DetailNav from "./detailchild/DetailNav";
  import DetailSwiper from "./detailchild/DetailSwiper";
  import DetailBaseInfo from "./detailchild/DetailBaseInfo";
  import DetailStore from "./detailchild/DetailStore";
  import Scroll from "components/common/scroll/Scroll";
  import {getDetail,GoodInfo,StroeInfo} from "network/detail";

  export default {
    name: "Detail",
    data(){
      return{
        id:null,
        imgList:[],
        GoodsInfo:{},
        StoreInfo:{}
      }
    },
    components:{
      DetailNav,
      DetailSwiper,
      DetailBaseInfo,
      DetailStore,
      Scroll
    },
    created() {
      this.id=this.$route.params.id;
      //根据id获取商品详细数据
      getDetail(this.id).then((res)=>{
        // console.log(res);
        //获取顶部轮播图图片
        const data=res.result;
        this.imgList=data.itemInfo.topImages;
      //  获取商品信息
        this.GoodsInfo=new GoodInfo(data.itemInfo,data.columns,data.shopInfo.services);
      //  获取商家详细信息
        this.StoreInfo=new StroeInfo(data.shopInfo);
      })
    },
    //这里activeted会有bug，还是使用keep-alive的exclude属性将detail组件忽略
    // activated() {
    //   console.log('actived');
    //   this.id=this.$route.params.id;
    //   getDetail(this.id).then((res)=>{
    //     console.log(res);
    //     this.imgList=res.result.itemInfo.topImages;
    //     console.log(this.imgList);
    //   })
    // },
    // deactivated() {
    //   this.id=null;
    //   console.log(this.imgList);
    // }
  }
</script>

<style scoped>
  #detail{
    height: 100vh;
    position: relative;
    z-index: 9;
    background-color: #fff;
    border: 1px solid #cccccc;
  }
  .content{
    height: calc(100% - 44px);
  }
</style>
