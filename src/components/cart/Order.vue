<template>
  <div class="order">
    <div class="back">
      <van-nav-bar :title="$route.name" left-text="返回" left-arrow @click-left="orderpay"></van-nav-bar>
    </div>
    <!-- 地址 -->
    <van-contact-card type="edit" :name="name" :tel="tel" to="/address"/>

    <!-- 商品列表 -->
    <div class="pre" v-for="(item,index) in lists" :key="index">
      <van-card class="price"
        :num="item.num"
        :price="item.price + '.00'"
        desc="斑布BABO BASE系列3层120抽面巾纸抽纸24包装竹醌抑菌（本色抽纸无漂白竹浆）新老包装随机发货"
        thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
      />
        <van-stepper class="num" v-model="item.num" />
    </div>

    <!-- 提交订单 -->
    <van-submit-bar :price="sum*100" button-text="提交订单" @submit="onsubmit" />
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      name: "",
      tel: "",
      totals: 0
    };
  },
  methods: {
    // add() {
    //   this.$router.push("/address");
    // },
    onsubmit() {
      // 保存订单数据
      let order = {
        orderId: new Date().getTime(),
        address: this.address,
        goodsList: this.lists,
        type: 2 //已支付
      };
      this.$store.commit("orderlist/add", order);
      // 清除购物车数据
      this.$store.state.cart.lists = [];
      this.$store.state.cart.num = 0;

      this.$router.push("/orderLists/orderAll");
    },
    // 未支付处理
    orderpay() {
      console.log("处理订单未支付");
      // 未支付订单处理
      let order = {
        orderId: new Date().getTime(), //1584064700947验证
        address: this.address,
        goodsList: this.lists,
        type: 1 //未支付
      };
      this.$store.commit("orderlist/add", order);

      // 清除购物车数据
      this.$store.state.cart.lists = [];
      this.$store.state.cart.num = 0;

      // 跳转路由
      this.$router.go("-1");
    }
  },
  computed: {
    // 总价格计算
    sum() {
      // 总价格计算
      // reduce()返回计算总价格
      // total 总价格累加
      // item 数据中对象
      return this.lists.reduce((total, item) => {
        // 判断选项
        if (!item.isSelect) return total; //false不让计算总价格
        return total + parseInt(item.price) * parseInt(item.num); //总价格
      }, 0); //总价格默认参数值为0
    }
  },

  created() {
    // 默认获取地址信息
    let defaultId = this.$store.state.address.defaultId;
    let data = this.$store.state.address.lists;
    this.address = data.find(item => item.id == defaultId); //默认id匹配数组中id值
    this.name = this.address.name;
    this.tel = this.address.tel;

    // 获取购物车数据
    this.lists = this.$store.state.cart.lists;
    this.$store.state.vanTabbar = false;
  },
  destroyed() {
    this.$store.state.vanTabbar = true;
  },
};
</script>

<style lang="less" scoped>
.order{
  .van-card__price{
    position: absolute;
    bottom: 10px;
    color: #ee0a24;
  }
  .pre{
    position: relative;
  }
  .num{
    position: absolute;
    bottom: 45px;
    left: 105px;
  }
  .van-card__num{
    position: absolute;
    right: 0;
    bottom: 10px;
  }
  .van-card__content {
    position: relative;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    flex: 1;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    justify-content: space-between;
    min-width: 0;
    min-height: 88px;
    text-align: left;
  }
}
</style>