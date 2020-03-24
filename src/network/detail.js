import {request} from "./request";
export function getDetail(id) {
  return request({
    url:'/detail',
    params:{
      iid:id
    }
  })
}
//封装商品信息
export class GoodInfo {
  constructor(itemInfo,columns,services) {
    this.title=itemInfo.title;
    this.desc=itemInfo.desc;
    this.newPrice=itemInfo.price;
    this.oldPrice=itemInfo.oldPrice;
    this.discount=itemInfo.discountDesc;
    this.columns=columns;
    this.services=services;
    this.realPrice=itemInfo.lowNowPrice;
  }
}
//封装商铺信息
export class StroeInfo {
  constructor(shopInfo) {
    this.logo=shopInfo.shopLogo;
    this.name=shopInfo.name;
    this.fans=shopInfo.cFans;
    this.sells=shopInfo.cSells;
    this.score=shopInfo.score;
    this.goodCount=shopInfo.cGoods;
  }
}

//获取推荐列表信息
export function getRecommend() {
 return request({
   url:'/recommend',
 })
}
