export default [
  {
    path: "/cart",
    name: "购物车",
    component: () => import("../views/Cart.vue")
  },
  {
    path: "/order",
    name: "订单",
    component: () => import("../components/cart/Order.vue")
  }
]