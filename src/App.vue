<template>
  <div id="app">
    <van-tabbar v-model="active" v-show="$store.state.vanTabbar" :route="route" z-index="1000">
      <van-tabbar-item to="/home/HomePage" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item to="/class" icon="bar-chart-o">分类</van-tabbar-item>
      <van-tabbar-item to="/cart" icon="cart-o">购物车</van-tabbar-item>
      <van-tabbar-item to="/my" icon="user-o">我的</van-tabbar-item>
    </van-tabbar>
    <router-view />
  </div>
</template>

<script>

export default {
data() {
    return {
      active:0,
      route: true,
    }
    
  }
}
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow: hidden;
}
.fl {
  float: left;
}
.fr {
  float: right;
}
.clearfix::after {
  display: block;
  content: "";
  clear: both;
}
.auto-img {
  width: 100%;
  display: block;
}
.one-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
}
p {
  margin: 0;
  padding: 0;
}
img {
  width: 100%;
  height: auto;
  width: auto\9; /* ie8 */
  display: block;
  -ms-interpolation-mode: bicubic; /*为了照顾ie图片缩放失真*/
}
.one-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
}
</style>
