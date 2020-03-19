import Vue from 'vue'
import VueRouter from 'vue-router'
//解决多次点击路由报错的问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
};

Vue.use(VueRouter);
const home = ()=>import("../views/home/home");
const list =()=>import('../views/list/list');
const mine =()=>import('../views/mine/mine');
const shopcar =()=>import('../views/shopcar/shopcar');
const detail=()=>import('../views/detail/Detail');
const routes = [
  {
    path:'',
    redirect:'/home'
  },
  {
    path:'/home',
    component:home,
    meta:{
      title:'主页'
    }
  },
  {
    path:'/list',
    component:list,
    meta:{
      title:'分类'
    }
  },
  {
    path:'/shopcar',
    component:shopcar,
    meta:{
      title:'购物车'
    }
  },
  {
    path:'/mine',
    component:mine,
    meta:{
      title:'我的'
    }
  },
  {
    path:'/detail/:id',
    component:detail,
    meta:{
      title:'商品详情'
    }
  },
];
const router = new VueRouter({
  routes,
  mode: 'history',
});
router.beforeEach((to, from, next)=>{
  next();
  document.title=to.matched[0].meta.title;
});
export default router
