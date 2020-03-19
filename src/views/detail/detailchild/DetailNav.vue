<template>
  <div id="detailnav">
    <nav-bar>
      <img slot="left" src="~assets/img/common/back.svg" alt="" @click="backClick">
      <div slot="center" class="detailtitle">
        <div v-for="(item,index) in title"
             class="detailitem"
             :class="{active:index===currentIndex}"
             @click="itemClick(index)">{{item}}
        </div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
  import navBar from "components/common/navbar/navBar";

  export default {
    name: "DetailNav",
    data() {
      return {
        title: ['商品', '参数', '评论', '推荐'],
        currentIndex: 0
      }
    },
    methods: {
      itemClick(index) {
        this.currentIndex = index
      },
      backClick() {
        this.$router.back()
      }
    },
    components: {
      navBar,
    }
  }
</script>

<style scoped>

  .detailtitle {
    display: flex;
  }

  .detailitem {
    flex: 1;
    font-size: 12px;
  }

  .active {
    color: var(--color-high-text);
  }

  img {
    width: 100%;
    height: 100%;
  }
</style>
