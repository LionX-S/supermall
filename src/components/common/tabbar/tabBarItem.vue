<template>
  <div class="tabar-item" @click="itemClick" :style=activeFontColor>
    <slot name="item-icon"></slot>
    <slot name="item-text"></slot>
  </div>
</template>

<script>
  export default {
    name: "tabBarItem",
    //获取静态绑定的数据
    props: {
      aLink: {
        type: String
      },
      activeColor:{
        type:String,
        default:'red',
      }
    },
    methods: {
      itemClick() {
        this.$router.push(this.aLink);
      }
    },
    computed:{
      isActive(){
        return this.$route.path.indexOf(this.aLink)!==-1;
      },
      activeFontColor(){
        return this.isActive?{color:this.activeColor}:{};
      }
    }
  }
</script>

<style scoped>

  .tabar-item {
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
  }

  .tabar-item img {
    width: 24px;
    height: 24px;
    vertical-align: middle;
    margin-top: 3px;
  }
</style>
