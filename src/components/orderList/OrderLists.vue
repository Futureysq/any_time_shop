<template>
  <div class="orderList">
    <div class="back">
      <van-nav-bar title="我的订单" left-text="返回" left-arrow @click-left="$router.push('/my')"></van-nav-bar>
    </div>
    <div>
      <van-tabs v-model="active" @click="onClick" title-active-color="#f2270c">
        <van-tab title="全部"></van-tab>
        <van-tab title="待支付"></van-tab>
        <van-tab title="待收货"></van-tab>
        <van-tab title="已完成"></van-tab>
      </van-tabs>
    </div>
    <!-- 三级路由 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0
    };
  },
  methods: {
    onClick(index) {
      if (index == 0) {
        this.$router.push("/orderLists/orderAll");
      } else if (index == 1) {
        this.$router.push("/orderLists/orderPay");
      } else if (index == 2) {
        this.$router.push("/orderLists/orderGoods");
      } else if (index == 3) {
        this.$router.push("/orderLists/orderEnd");
      }
    }
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
</style>