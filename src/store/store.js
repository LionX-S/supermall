import vue from 'vue';
import vuex from 'vuex'

vue.use(vuex);
const store=new vuex.Store({
  state:{
    carList:[]
  },
  mutations:{
    addCart(state,payload){
      // let list=null;
      // for(let item of state.carList){
      //   // console.log(item);
      //   if(item.id===payload.id){
      //     list=item;
      //   }
      // }
      //查找数组中有无该商品
      let list = state.carList.find(item=>item.id===payload.id);
      if(list){
        list.count+=1;
      }else {
        payload.count=1;
        state.carList.push(payload);
      }

    }
  }
});
export default store
