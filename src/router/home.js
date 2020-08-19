export default {
  path: "/home",
  name: "主页",
  component: () => import("../views/Home.vue"),
  children: [
    {
      path: "HomePage",
      name: "首页",
      component: () => import("../components/home/HomePage.vue")
    },
    {
      path: "MenClothing",
      name: "男装",
      component: () => import("../components/home/MenClothing.vue")
    },
    {
      path: "Computer",
      name: "电脑",
      component: () => import("../components/home/Computer.vue")
    },
    {
      path: "Phone",
      name: "手机",
      component: () => import("../components/home/Phone.vue")
    },
    {
      path: "Fresh",
      name: "生鲜",
      component: () => import("../components/home/Fresh.vue")
    },
    {
      path: "Sport",
      name: "运动",
      component: () => import("../components/home/Sport.vue")
    },
    {
      path: "Food",
      name: "食品",
      component: () => import("../components/home/Food.vue")
    },
  ]
}