import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

import vant from "vant";
import "vant/lib/index.css";
Vue.use(vant);

// $cnpm i -S amfe-flexible
// 注意：amfe-flexible js文件对rem结构划分，分为10份，结算公式：rem(显示比值) = width(设计图宽度) / 10;
import Flexible from "amfe-flexible";
Vue.use(Flexible);

// swiper插件
import "swiper/css/swiper.min.css";

//动画第三方样式
import "animate.css";

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
