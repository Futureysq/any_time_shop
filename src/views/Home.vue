<template>
  <div class="home">
    <van-sticky>
      <div class="nav"></div>
      <div class="navbar">
        <div class="logo fl">随时淘</div>
        <div class="btn fr">
          <div class="setting fl">
            <van-icon name="scan" color="#fff" size="22px" />
          </div>
          <div class="msg fl">
            <van-icon name="chat-o" color="#fff" size="22px" dot />
          </div>
        </div>
      </div>
      <div class="searchbox">
        <van-search v-model="value" shape="round" background="orangered" placeholder="请输入搜索关键词" />
      </div>
      <div class="swiper-container swiperHomeNav">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <router-link to="/home/HomePage">首页</router-link>
          </div>
          <div class="swiper-slide">
            <router-link to="/home/MenClothing">男装</router-link>
          </div>
          <div class="swiper-slide">
            <router-link to="/home/Computer">电脑</router-link>
          </div>
          <div class="swiper-slide">
            <router-link to="/home/Phone">手机</router-link>
          </div>
          <div class="swiper-slide">
            <router-link to="/home/Fresh">生鲜</router-link>
          </div>
          <div class="swiper-slide">
            <router-link to="/home/Sport">运动</router-link>
          </div>
          <div class="swiper-slide">
            <router-link to="/home/Food">食品</router-link>
          </div>
        </div>
      </div>
    </van-sticky>
    <router-view></router-view>
  </div>
</template>

<script>
import Swiper from "swiper";
export default {
  name: "Home",
  data() {
    return {
      value: ""
    };
  },
  mounted() {
    let swiper1 = new Swiper(".swiperHomeNav", {
      // 要区分容器
      slidesPerView: 6, //显示轮播图个数
      freeMode: true
    });
  }
};
</script>
<style lang="less" scoped>
.home {
  .nav {
    height: 24px;
    background-color: orangered;
  }
  background-color: rgb(194, 199, 199);
  .navbar {
    background-color: orangered;
    padding: 0 10px;
    overflow: hidden;
    .logo {
      color: rgb(255, 255, 255);
      font-size: 20px;
    }
    .btn {
      padding-top: 4px;
      .setting {
        margin: 0 10px;
      }
    }
  }
  .swiperHomeNav {
    a {
      &.router-link-active {
        color: #fff;
        font-weight: bold;
      }
    }
  }
  .swiper-container {
    width: 100%;
    height: 100%;
    padding-bottom: 5px;
    background: orangered;
  }
  .swiper-slide {
    text-align: center;
    font-size: 16px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
    > a {
      color: rgb(245, 234, 234);
    }
  }
}
</style>