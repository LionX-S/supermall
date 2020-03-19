<template>
<div class="wrapper" ref="wrapper">
  <div class="content" ref="content">
    <slot></slot>
  </div>
</div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    name: "Scroll",
    data(){
      return {
        scroll:null
      }
    },
    props:{
      probeType:{
        type:Number
      },
      pullUpLoad:{
        type:Boolean,
        default:false
      }
    },
    mounted() {
      this.scroll=new BScroll(this.$refs.wrapper,{
        click:true,
        probeType:this.probeType,
        pullUpLoad: this.pullUpLoad
      });
      this.scroll.on('scroll',(position)=>{
        // console.log(position);
        this.$emit('scrollSpace',position);
      });
    //  监听上拉加载
      this.scroll.on('pullingUp',()=>{
        // console.log('lalalala');
        this.$emit('pullingUp');
      });

    },
    methods:{
      BackToTop(x,y,time=300){
        this.scroll&&this.scroll.scrollTo(x,y,time);
      },
      finishPullUp(){
        this.scroll.finishPullUp();
      },
      refresh(){
        this.scroll&&this.scroll.refresh();
      }
    }
  }
</script>

<style scoped>
 .wrapper{
   overflow: hidden;
 }
</style>
