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
      }
    },
    mounted() {
      this.scroll=new BScroll(this.$refs.wrapper,{
        click:true,
        probeType:this.probeType,
      });
      this.scroll.on('scroll',(position)=>{
        // console.log(position);
        this.$emit('scrollSpace',position);
      })

    },
    methods:{
      BackToTop(x,y,time=300){
        this.scroll.scrollTo(x,y,time);
      }
    }
  }
</script>

<style scoped>

</style>
