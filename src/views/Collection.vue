<template>
  <div class="cart">
    <van-nav-bar
      title="我的收藏"
      left-text="返回"
      :fixed="true"
      :placeholder="true"
      left-arrow
      :zIndex="99"
      @click-left="onClickLeft"
    >
      <template #right>
        <van-icon name="ellipsis" size="18" color="#323233" />
      </template>
    </van-nav-bar>
    <div v-for="(item,index) in currentCollectionData" :key="index" :data-id="item.id">
      <van-card
        class="price"
        :price="item.price + '.00'"
        desc="斑布BABO BASE系列3层120抽面巾纸抽纸24包装竹醌抑菌（本色抽纸无漂白竹浆）新老包装随机发货"
        thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
      >
        <div slot="footer">
          <van-button size="mini" class="del-btn" @click="del(item.id)">删除</van-button>
        </div>
      </van-card>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";

const { mapState } = createNamespacedHelpers("likeModule");
export default {
  data() {
    return {
      lists: [],
      totals: 0, //总价格
      checked: true //默认全选
    };
  },
  computed: {
    ...mapState(["currentCollectionData"])
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    del(id) {
      for (let i = 0; i < this.currentCollectionData.length; i++) {
        if (id == this.currentCollectionData[i].id) {
          this.$store.commit("likeModule/delLikeGoods", i);

          let userStatus = JSON.parse(localStorage.getItem("user"));

          //获取所有用户商品数据
          let collectionData = JSON.parse(
            localStorage.getItem("collectionData")
          );

          collectionData[userStatus.username] = this.currentCollectionData;

          localStorage.setItem(
            "collectionData",
            JSON.stringify(collectionData)
          );
          break;
        }
      }
    }
  },

  created() {
    let userStatus = localStorage.getItem("user");
    console.log("userStatus", userStatus);
    let id = this.$route.params.goodsId;
    console.log("id", id);
    if (userStatus) {
      let userInfo = JSON.parse(userStatus);

      //如果登录
      if (userInfo.isLogin) {
        //开启加载提示
        this.$toast.loading({
          duration: 0,
          message: "加载中..."
        });

        //获取所有用户收藏的商品数据
        let collectionData = localStorage.getItem("collectionData");

        collectionData = collectionData ? JSON.parse(collectionData) : {};
        //获取当前用户收藏的商品数据
        let currentCollectionData = collectionData[userInfo.username];

        currentCollectionData = currentCollectionData
          ? currentCollectionData
          : [];
        console.log(
          "currentCollectionData.length",
          currentCollectionData.length
        );
        console.log("currentCollectionData", currentCollectionData);
        //生成页面数据
        this.$store.commit(
          "likeModule/getCurrentCollectionData",
          currentCollectionData
        );

        this.$toast.clear();
      } else {
        //如果未登录
        this.$router.push("/login");
      }
    } else {
      //未登录
      this.$router.push("/login");
    }
    this.$store.state.vanTabbar = false;
  },
  destroyed() {
    this.$store.state.vanTabbar = true;
  }
};
</script>

<style lang="less" scoped>
.cart {
  background-color: #f8f8f8;
  .van-submit-bar {
    bottom: 50px;
  }
  // .del-btn {
  //   position: absolute;
  //   right: 20px;
  //   bottom: 20px;
  // }
  .kong {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin: 50px auto;
    > img {
      width: 100%;
      border-radius: 50%;
    }
  }
  > p {
    font-size: 16px;
    color: #333;
    .guang {
      font-size: 18px;
    }
  }
  .h2 {
    font-size: 14px;
    color: #969799;
    padding: 0;
    margin: 0;
    padding: 30px 0 0;
  }
  .right-item {
    margin-top: 10px;
  }
  .right-item ul {
    border: 0;
    padding: 7px 0 0;
    height: 380px;
  }
  .right-item ul li {
    position: relative;
    width: 50%;
    height: 167px;
    float: left;
    text-align: center;
    background-color: #fff;
    .list {
      position: absolute;

      height: 100%;
      width: 100%;
      > img {
        width: 100px;
        // height: 100px;
        display: block;
        margin: 5px auto 0;
      }
      .desc {
        color: #333;
        display: block;
        width: 100px;
        font-size: 12px;
        margin: 0 auto;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-align: start;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
      }
      > span {
        font-size: 12px;
        color: #ee0a24;
        text-align: left;
      }
      .price {
        font-size: 18px;
        color: #ee0a24;
      }
    }
    .list1 {
      position: absolute;
      width: 100%;
      height: 100%;
      > a {
        display: block;
        width: 100%;
        height: 100%;
      }
    }
  }
  .van-card__price {
    position: absolute;
    bottom: 10px;
    color: #ee0a24;
  }

  .del-btn {
    position: absolute;
    right: 20px;
    bottom: 20px;
  }
  .num {
    width: 30px;
    text-align: center;
    font-size: 16px;
    border: 0;
    padding: 0;
    background-color: rgb(199, 217, 223);
  }
  .checkboxselect {
    position: absolute;
    top: 50%;
    left: 5px;
    margin-top: -10px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 1px solid #c8c9cc;
    i {
      display: block;
      width: 20px;
      height: 20px;
      background: #1989fa;
      border-radius: 50%;
      text-align: center;
      line-height: 22px;
      font-size: 16px;
      color: #fff;
    }
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