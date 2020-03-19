<template>
<div class="tab-control">
  <div v-for="(item,index) in titles"
       :key="index"
       :class="{active:index===currentIndex}"
       @click="activeClick(index)"
       class="tab-control-item">
    <span>{{item}}</span>
  </div>
</div>
</template>

<script>
  export default {
    name: "TabControl",
    data(){
      return {
        currentIndex:0
      }
    },
    methods:{
      activeClick(index){
        this.currentIndex=index;
        this.$emit('tabClick',index);
      }
    },
    props:{
      titles:{
        type:Array,
        default(){
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .tab-control{
    display: flex;
    font-size: 15px;
    background-color: #fff;
  }
  .tab-control-item{
    flex: 1;
    text-align: center;
    height: 40px;
    line-height: 40px;
  }
  .active{
    color: var(--color-high-text);
  }
  .active span{
    padding: 5px;
    border-bottom: 2px solid var(--color-high-text);
  }
</style>
