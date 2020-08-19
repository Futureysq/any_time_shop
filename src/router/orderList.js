export default {
  path: "/orderLists",
  name: "我的订单",
  component: () => import("../components/orderList/OrderLists.vue"),
  children: [
    {
      path: "orderAll",
      name: "全部",
      component: () => import("../components/orderList/OrderAll.vue")
    },
    {
      path: "orderPay",
      name: "待支付",
      component: () => import("../components/orderList/OrderPay.vue")
    },
    {
      path: "orderGoods",
      name: "待收货",
      component: () => import("../components/orderList/OrderGoods.vue")
    },
    {
      path: "orderEnd",
      name: "已完成",
      component: () => import("../components/orderList/OrderEnd.vue")
    },
  ]
}