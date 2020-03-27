<template>
  <div id="detail">
    <detail-nav @detailnavcli="detailnavcli" ref="detailnav"></detail-nav>
    <scroll class="content" ref="scroll" @scrollSpace="scrollSpace" :probe-type="3">
      <detail-swiper :img-item="imgList"></detail-swiper>
      <detail-base-info :goods-info="GoodsInfo"></detail-base-info>
      <detail-store :store-info="StoreInfo"></detail-store>
      <detail-table :goods-para="GoodsPara" :goods-size="GoodsSize" ref="table"></detail-table>
      <div class="line"></div>
      <detail-content :content-msg="contentMsg" ref="content"></detail-content>
      <goods-list :goods-list="recommend" ref="recommend"></goods-list>
    </scroll>
    <detail-bottom-bar @addCart="addCart"></detail-bottom-bar>
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
  import DetailBottomBar from "./detailchild/DetailBottomBar";

  import Scroll from "components/common/scroll/Scroll";
  import {getDetail, GoodInfo, StroeInfo, getRecommend} from "network/detail";
  import {itemListMixin} from "common/mixin";
  import {debounce} from "common/until";

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
        recommend: [],
      //  获取每个组件距离顶部距离的数组
        componentTop:[],
      //  将获取距离封装成函数
        funcTop:null
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
      DetailBottomBar,
      Scroll
    },
    updated() {
      this.funcTop();
    },
    mixins:[itemListMixin],
    created() {
      this.id = this.$route.query.iid;
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
      });
      //封装获取距离防抖函数
      this.funcTop=debounce(()=>{
        this.componentTop=[];
        this.componentTop.push(0);
        this.componentTop.push(this.$refs.table.$el.offsetTop-44);
        this.componentTop.push(this.$refs.content.$el.offsetTop-44);
        this.componentTop.push(this.$refs.recommend.$el.offsetTop-44);
        this.componentTop.push(Number.MAX_VALUE);
        // console.log(this.componentTop);
      });
    },
    methods:{
      detailnavcli(index){
        //将每个需要点击到达的组件的距离顶部距离push到一个数组中，点击时调用scroll的backtotop函数
        this.$refs.scroll.BackToTop(0,-this.componentTop[index]);
      },
    //  根据手动滚动距离切换导航栏
      scrollSpace(position){
        // console.log(position);
        let length=this.componentTop.length;
        for(let i=0;i<length-1;i++){
          if((-position.y)>=this.componentTop[i]&&(-position.y)<this.componentTop[i+1]){
            this.$refs.detailnav.currentIndex=i;
          }
        }
      },
      //添加商品到购物车(使用VueX)
      addCart(){
      //  获取加入购物车的商品的部分信息
        const product={};
        product.image=this.imgList[0];
        product.title=this.GoodsInfo.title;
        product.desc=this.GoodsInfo.desc;
        product.price=this.GoodsInfo.realPrice;
        product.id=this.id;
        this.$store.commit('addCart',product);
      }
    }
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
    height: calc(100% - 44px - 49px);
  }

  .line {
    height: 2px;
    background-color: #cccccc;
  }
</style>
