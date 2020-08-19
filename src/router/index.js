import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import my from "./my";
import home from "./home";
import classes from "./class";
import details from "./details";
import cart from "./cart";
import orderList from "./orderList";
import publics from "./public";
import collection from "./collection";
const routes = [
  {
    path:"/",
    redirect:"/advertpage", //默认跳转广告页
  },
  ...my,
  home,
  classes,
  details,
  ...cart,
  orderList,
  ...publics,
  collection
]
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
