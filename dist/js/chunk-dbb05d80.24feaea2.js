(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-dbb05d80"],{"5e7c":function(t,s,n){"use strict";n.r(s);var e=function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",t._l(t.lists,(function(s,e){return n("div",{key:e},[1==s.type?n("van-panel",{attrs:{title:"订单："+s.orderId,status:t.typeList[s.type]}},[t._l(s.goodsList,(function(t,s){return n("div",{key:s},[n("van-card",{attrs:{num:t.num,price:t.price+".00",desc:"斑布BABO BASE系列3层120抽面巾纸抽纸24包装竹醌抑菌（本色抽纸无漂白竹浆）新老包装随机发货",thumb:"https://img.yzcdn.cn/vant/ipad.jpeg"}})],1)})),1==s.type?n("div",{staticClass:"van-panel-footer",attrs:{slot:"footer"},slot:"footer"},[n("van-button",{attrs:{size:"small"},on:{click:function(s){return t.del(e)}}},[t._v("删除订单")]),n("van-button",{attrs:{size:"small"},on:{click:function(n){return t.onPay(s.orderId)}}},[t._v("支付订单")])],1):t._e()],2):t._e()],1)})),0)},i=[],r=(n("3466"),{data:function(){return{lists:[],typeList:[]}},methods:{onPay:function(t){var s=this.lists.findIndex((function(s){return s.orderId==t}));this.lists[s].type=2},onGoods:function(t){var s=this.lists.findIndex((function(s){return s.orderId==t}));this.lists[s].type=3}},created:function(){this.lists=this.$store.state.orderlist.lists,this.typeList=this.$store.state.orderlist.typeList},beforeDestroy:function(){this.lists.length&&this.$store.commit("orderlist/edit",this.lists)}}),o=r,a=(n("7009"),n("9ca4")),c=Object(a["a"])(o,e,i,!1,null,"680880ae",null);s["default"]=c.exports},7009:function(t,s,n){"use strict";var e=n("f8cf"),i=n.n(e);i.a},f8cf:function(t,s,n){}}]);
//# sourceMappingURL=chunk-dbb05d80.24feaea2.js.map