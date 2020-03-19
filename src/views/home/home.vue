<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <tab-control :titles="titles"
                 @tabClick="tabClick"
                 ref="tabcontrol1"
                 v-show="isFixed" class="tab-control"></tab-control>
    <scroll class="content" ref="scroll"
            :probe-type="3"
            @scrollSpace="scrollSpace"
            :pull-up-load="true"
            @pullingUp="loadMore">
      <home-swiper :banner="banner" @imgLoad="imgLoad"></home-swiper>
      <recommend-views :recommend="recommend"></recommend-views>
      <feature-view></feature-view>
      <tab-control :titles="titles"
                   @tabClick="tabClick" ref="tabcontrol2" ></tab-control>
      <goods-list :GoodsList="goods[currentType].list"></goods-list>
    </scroll>
    <back-top @click.native="backTop" v-show="isShow"></back-top>
  </div>
</template>

<script>
  import navBar from "components/common/navbar/navBar";
  import TabControl from "components/content/tabControl/TabControl";
  import GoodsList from "components/content/goods/GoodsList";
  import Scroll from "components/common/scroll/Scroll";
  import BackTop from "components/content/backtop/BackTop";

  import {getHomeMultidata, getHomeGoods} from "network/home";

  import homeSwiper from "./homechildren/homeSwiper";
  import RecommendViews from "./homechildren/RecommendViews";
  import FeatureView from "./homechildren/FeatureView";

  export default {
    name: "home",
    components: {
      navBar,
      TabControl,
      GoodsList,
      Scroll,
      BackTop,
      homeSwiper,
      RecommendViews,
      FeatureView

    },
    data() {
      return {
        banner: [],
        recommend: [],
        titles: ['流行', '新款', '精选'],
        goods: {
          'pop': {page: 0, list: []},
          'new': {page: 0, list: []},
          'sell': {page: 0, list: []}
        },
        currentType: 'pop',
        isShow:false,
        tabControlOffsetTop:0,
        isFixed:false,
        scrollY:0
      }
    },
    methods: {
      getCHomeMultidata() {
        getHomeMultidata().then(res => {
          // console.log(res);
          this.banner = res.data.banner.list;
          this.recommend = res.data.recommend.list;
        });
      },
      getCHomeGoods(type) {
        const page = this.goods[type].page + 1;
        getHomeGoods(type, page).then(res => {
          // console.log(res);
          //push(...param) 三个点表示可以是多个或者没有参数
          this.goods[type].list.push(...res.data.list);
          this.goods[type].page += 1;
          //调用finishPullUp方法，以便继续调用上拉加载更多方法
          this.$refs.scroll.finishPullUp();
        })
      },
      tabClick(index) {
        switch (index) {
          case 0:
            this.currentType = 'pop';
            break;
          case 1:
            this.currentType = 'new';
            break;
          case 2:
            this.currentType = 'sell';
            break;
        }
        this.$refs.tabcontrol1.currentIndex=index;
        this.$refs.tabcontrol2.currentIndex=index;
      },
      backTop(){
        this.$refs.scroll.BackToTop(0,0,500);
      },
      scrollSpace(position){
        this.isShow=-(position.y)>1000;
        this.isFixed=-(position.y)>this.tabControlOffsetTop;
      },
      loadMore(){
        // console.log('加载更多');
        this.getCHomeGoods(this.currentType)
      },
      //防抖函数 避免过多请求refresh函数
      debounce(func,delay){
        let time=null;
        return function (...args) {
          if (time) clearTimeout(time);
          time=setTimeout(()=>{
            func.apply(this,args);
          },delay)
        }
      },
      //
      imgLoad(){
        this.tabControlOffsetTop=this.$refs.tabcontrol2.$el.offsetTop;
      }
    },
    created() {
      this.getCHomeMultidata();
      this.getCHomeGoods('pop');
      this.getCHomeGoods('new');
      this.getCHomeGoods('sell');
    },
    //切换分类后 返回home还是在原来位置
    activated() {
      this.$refs.scroll.refresh();
      this.$refs.scroll.BackToTop(0,this.scrollY,0);
    },
    deactivated() {
      this.scrollY=this.$refs.scroll.scroll.y;
    },
    mounted() {
      const refresh=this.debounce(this.$refs.scroll.refresh,50);
      this.$bus.$on('loadFinish',()=>{
        refresh();
      });
    }
  }
</script>

<style scoped>
  .home-nav {
    background-color: #FF0036;
    color: #ffffff;
  }

  #home {
    /*padding-top: 44px;*/
    /*position: relative;*/
    height: 100vh;
  }

  .tab-control {
    position: relative;
    z-index: 9;
  }

  .content {
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }
</style>
