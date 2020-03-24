<template>
  <div id="detail">
    <detail-nav></detail-nav>
    <scroll class="content" ref="scroll">
      <detail-swiper :img-item="imgList"></detail-swiper>
      <detail-base-info :goods-info="GoodsInfo"></detail-base-info>
      <detail-store :store-info="StoreInfo"></detail-store>
      <detail-table :goods-para="GoodsPara" :goods-size="GoodsSize"></detail-table>
      <div class="line"></div>
      <detail-content :content-msg="contentMsg"></detail-content>
      <goods-list :goods-list="recommend"></goods-list>
    </scroll>
  </div>
</template>

<script>
  import DetailNav from "./detailchild/DetailNav";
  import DetailSwiper from "./detailchild/DetailSwiper";
  import DetailBaseInfo from "./detailchild/DetailBaseInfo";
  import DetailStore from "./detailchild/DetailStore";
  import DetailTable from "./detailchild/DetailTable";
  import DetailContent from "./detailchild/DetailContent";
  import GoodsList from "components/content/goods/GoodsList";

  import Scroll from "components/common/scroll/Scroll";
  import {getDetail, GoodInfo, StroeInfo, getRecommend} from "network/detail";
  import {itemListMixin} from "common/mixin";

  export default {
    name: "Detail",
    data() {
      return {
        id: null,
        imgList: [],
        GoodsInfo: {},
        StoreInfo: {},
        GoodsPara: [],
        GoodsSize: [],
        contentMsg: {},
        recommend: []
      }
    },
    components: {
      DetailNav,
      DetailSwiper,
      DetailBaseInfo,
      DetailStore,
      DetailTable,
      DetailContent,
      GoodsList,
      Scroll
    },
    mixins:[itemListMixin],
    created() {
      this.id = this.$route.params.id;
      //根据id获取商品详细数据
      getDetail(this.id).then((res) => {
        // console.log(res);
        //获取顶部轮播图图片
        const data = res.result;
        this.imgList = data.itemInfo.topImages;
        //  获取商品信息
        this.GoodsInfo = new GoodInfo(data.itemInfo, data.columns, data.shopInfo.services);
        //  获取商家详细信息
        this.StoreInfo = new StroeInfo(data.shopInfo);
        //  获取商品参数
        this.GoodsPara = data.itemParams.info.set;
        this.GoodsSize = data.itemParams.rule.tables[0];
        // console.log(this.GoodsPara);
        // console.log(this.GoodsSize);
        //  获取评论
        if (data.rate.list) {
          this.contentMsg = data.rate.list[0];
        }
      });
      getRecommend().then(res=>{
        this.recommend=res.data.list;
        // console.log(this.recommend);
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
  #detail {
    height: 100vh;
    position: relative;
    z-index: 9;
    background-color: #fff;
    border: 1px solid #cccccc;
  }

  .content {
    height: calc(100% - 44px);
  }

  .line {
    height: 2px;
    background-color: #cccccc;
  }
</style>
