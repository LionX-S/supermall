<template>
  <div id="detail">
    <detail-nav></detail-nav>
    <detail-swiper :img-item="imgList"></detail-swiper>
  </div>
</template>

<script>
  import DetailNav from "./detailchild/DetailNav";
  import DetailSwiper from "./detailchild/DetailSwiper";
  import {getDetail} from "network/detail";

  export default {
    name: "Detail",
    data(){
      return{
        id:null,
        imgList:[]
      }
    },
    components:{
      DetailNav,
      DetailSwiper
    },
    created() {
      this.id=this.$route.params.id;
      getDetail(this.id).then((res)=>{
        // console.log(res);
        this.imgList=res.result.itemInfo.topImages;
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

</style>
