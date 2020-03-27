<template>
  <div id="carlist">
    <car-list-item v-for="(item,index) in carList" :key="index" :product="item"></car-list-item>
  </div>
</template>

<script>
  import CarListItem from "./CarListItem";
  export default {
    name: "CarList",
    data(){
      return{
       carList:this.$store.state.carList
      }
    },
    components:{
      CarListItem
    }
  }
</script>

<style scoped>

</style>
