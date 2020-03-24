import {debounce} from "./until";

export const itemListMixin = {
  mounted(){
    const refresh=debounce(this.$refs.scroll.refresh,50);
    this.$bus.$on('loadFinish',()=>{
      refresh();
    });
  }
};
