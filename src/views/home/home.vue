<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swiper :banner="banner"></home-swiper>
    <recommend-views :recommend="recommend"></recommend-views>
    <feature-view></feature-view>
    <tab-control :titles="titles" class="tab-control" @tabClick="tabClick"></tab-control>
    <goods-list :GoodsList="goods[currentType].list"></goods-list>
  </div>
</template>

<script>
  import navBar from "components/common/navbar/navBar";
  import TabControl from "components/content/tabControl/TabControl";
  import GoodsList from "components/content/goods/GoodsList";

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
        currentType: 'pop'
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
          //push(...param) 三个点表示将参数依次拿出并push到新数组中
          this.goods[type].list.push(...res.data.list);
          this.goods[type].page += 1;
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
      }
    },
    created() {
      this.getCHomeMultidata();
      this.getCHomeGoods('pop');
      this.getCHomeGoods('new');
      this.getCHomeGoods('sell');
    }
  }
</script>

<style scoped>
  .home-nav {
    background-color: #FF0036;
    color: #ffffff;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9;
  }

  #home {
    padding-top: 44px;
  }

  .tab-control {
    background-color: #fff;
    position: sticky;
    top: 44px;
    z-index: 9;
  }
</style>
