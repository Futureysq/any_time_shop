export default [
  {
    path: "/my",
    name: "我的",
    component: () => import("../views/My.vue")
  },
  {
    path: "/login",
    name: "登录",
    component: () => import("../components/my/Login.vue")
  },
  {
    path: "/register",
    name: "注册",
    component: () => import("../components/my/Register.vue")
  },
  {
    path: "/setting",
    name: "设置",
    component: () => import("../components/my/Setting.vue")
  },
  {
    path: "/address",
    name: "地址管理",
    component: () => import("../components/my/Address.vue")
  },
  {
    path: "/addaddress",
    name: "新增收货地址",
    component: () => import("../components/my/Addaddress.vue")
  },
  {
    path: "/editaddress",
    name: "编辑收货地址",
    component: () => import("../components/my/Editaddress.vue")
  },
]