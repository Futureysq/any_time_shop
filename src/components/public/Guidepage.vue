<template>
  <div class="guidepage">
    <!-- Swiper -->
    <div class="swiper-container containerguidepage">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <div v-show="flag">
            <h1 class="desc animated fadeInUpBig delay-2s">灵动多面，简洁大方</h1>
            <img class="animated fadeInUpBig" src="../../assets/img/1.png" alt />
          </div>
        </div>
        <div class="swiper-slide">
          <div v-show="flag">
            <h1 class="desc animated fadeInUpBig delay-2s">分类齐全，边看边买</h1>
            <img class="animated fadeInUpBig" src="../../assets/img/2.png" alt />
          </div>
        </div>
        <div class="swiper-slide">
          <div v-show="flag">
            <h1 class="desc animated fadeInUpBig delay-1s">到手好价，一步下单</h1>
            <img class="animated fadeInUpBig" src="../../assets/img/3.png" alt />

            <van-button
              class="animated fadeInUpBig delay-3s"
              plain
              hairline
              type="primary"
              size="small"
              @click="$router.push('/home/HomePage')"
            >立即体验</van-button>
          </div>
        </div>
      </div>
      <!-- Add Pagination -->
      <div class="swiper-pagination paginationguidepage"></div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
export default {
  data() {
    return {
      flag: true
    };
  },
  created() {},
  mounted() {
    let _this = this;
    new Swiper(".containerguidepage", {
      pagination: {
        el: ".paginationguidepage"
      },
      on: {
        touchStart: function() {
          console.log(this.activeIndex);
        },
        // 轮播图切换前效果
        slideChangeTransitionStart: function() {
          _this.flag = false; //隐藏
        },
        // 轮播图切换后效果
        slideChangeTransitionEnd: function() {
          // _this.flag[this.activeIndex] = true; //显示
          _this.flag = true;
        }
      }
    });
  },
  created() {
    this.$store.state.vanTabbar = false;
  },
  destroyed() {
    this.$store.state.vanTabbar = true;
  }
};
</script>

<style lang="less" scoped>
.guidepage {
  .swiper-container {
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
  }
  h1 {
    padding: 0;
    margin: 0;
    font-size: 20px;
    line-height: 80px;
  }
  .desc {
    color: #fff;
    height: 80px;
    background-color: orangered;
  }
  img {
    margin-left: auto;
    margin-right: auto;
    padding: 20px 20px 10px 20px;
    box-sizing: border-box;
    // margin: 20px;
    // background-color: rgb(121, 135, 148);
    height: 500px;
    // background-size: cover;
    // width: 150px;
    //   height: 150px;
    //   border-radius: 50%;
    // margin-top: 100px;
    // height: 120px;
    // height: 100%;
  }
  .swiper-slide {
    text-align: center;

    h3 {
      color: #808080;
    }
  }
}
</style>