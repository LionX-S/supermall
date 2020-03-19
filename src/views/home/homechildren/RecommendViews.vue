<template>
  <div class="recommend">
    <div v-for="(item,index) in recommend" :key="index" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "RecommendViews",
    props:{
      recommend:{
        type:Array,
        default(){
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .recommend{
    display: flex;
    width: 100%;
    text-align: center;
    font-size: 12px;
    margin: 15px 0 15px;
    background-color: #fff;
  }
  .recommend-item{
    flex:1;
  }
  .recommend-item img{
    width: 70px;
    height: 70px;
    margin-bottom: 5px;
  }
</style>
