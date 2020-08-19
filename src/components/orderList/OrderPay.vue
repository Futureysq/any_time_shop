<template>
  <div>
    <!-- 订单遍历 -->
    <div v-for="(item,index) in lists" :key="index">
      <van-panel 
            :title="'订单：'+item.orderId" 
            :status="typeList[item.type]"
            v-if="item.type == 1"
            >
                <!-- 商品遍历 -->
                <div v-for="(value,key) in item.goodsList" :key="key">
                    <van-card
                    :num="value.num"
                    :price="value.price + '.00'"
                    desc="斑布BABO BASE系列3层120抽面巾纸抽纸24包装竹醌抑菌（本色抽纸无漂白竹浆）新老包装随机发货"
                    thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
                    />
                </div>
                <!-- 待支付 -->
                <div v-if="item.type == 1" slot="footer" class="van-panel-footer">
                    <van-button size="small" @click="del(index)" >删除订单</van-button>
                    <van-button size="small" @click="onPay(item.orderId)" >支付订单</van-button>
                </div>
            </van-panel>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lists: [],
      typeList: [] //订单状态
    };
  },
  methods: {
    onPay(orderId) {
      let index = this.lists.findIndex(item => item.orderId == orderId);
      this.lists[index].type = 2; //切换支付后待收货。调用支付接口
    },
    onGoods(orderId) {
      let index = this.lists.findIndex(item => item.orderId == orderId);
      this.lists[index].type = 3; //切换待收货改已完成。
    }
  },
  created() {
    this.lists = this.$store.state.orderlist.lists;
    this.typeList = this.$store.state.orderlist.typeList;
  },
  // 在组件销毁之前，
  // 把当前列表数据同步vuex数据中。
  beforeDestroy() {
    if (this.lists.length) {
      this.$store.commit("orderlist/edit", this.lists);
    }
  }
};
</script>

<style lang="less" scoped>
.van-panel-footer {
  text-align: right;
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
  .van-card__num{
    position: absolute;
    right: 0;
    bottom: 10px;
  }
  .van-card__price{
    position: absolute;
    bottom: 10px;
    color: #ee0a24;
  }
</style>