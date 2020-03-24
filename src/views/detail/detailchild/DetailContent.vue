<template>
  <div id="detail-content" v-if="Object.keys(contentMsg).length!==0">
    <div class="content-top">
      <div class="header-title">用户评价</div>
      <div class="header-more">更多</div>
    </div>
    <div class="content-user">
      <img :src="contentMsg.user.avatar" alt="" class="userimg">
      <span class="username">{{contentMsg.user.uname}}</span>
    </div>
    <div class="content-text">
      {{contentMsg.content}}
    </div>
    <div class="content-bottom">
      <span>{{contentMsg.created|dateFormat}}</span>
      <span style="margin-left: 5px">{{contentMsg.style}}</span>
    </div>
  </div>
  <div v-else>
    暂无评论
  </div>
</template>

<script>
  import {formatDate} from 'common/until'
  export default {
    name: "DetailContent",
    props: {
      contentMsg: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    filters:{
      dateFormat(date){
        const time = new Date(date*1000);
        return formatDate(time,'yyyy-MM-dd hh:ss:mm');
      }
    }
  }
</script>

<style scoped>
  #detail-content {
    padding: 10px;
  }
  .content-top {
    height: 40px;
    line-height: 40px;
    border-bottom: 1px solid #cccccc;
    display: flex;
    position: relative;
  }
  .header-more{
    position: absolute;
    right: 0;
    top:0;
  }
  .content-user{
    height: 60px;
    line-height: 60px;
    position: relative;
  }
  .userimg{
    margin-top: 10px;
    width: 40px;
    height: 40px;
    border-radius: 20px;
  }
  .username{
    display: inline-block;
    position: absolute;
    height: 100%;
    margin-left: 5px;
  }
  .content-text{
    font-size: 14px;
  }
  .content-bottom{
    margin-top: 10px;
    font-size: 12px;
    color: #cccccc;
  }
</style>
