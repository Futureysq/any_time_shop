<template>
  <div class="details">
    <van-nav-bar left-text="返回" :fixed="true" left-arrow :zIndex="99" @click-left="onClickLeft">
      <template #right>
        <van-icon name="ellipsis" size="18" color="#323233" />
      </template>
    </van-nav-bar>
    <swiper :imgs="Images"></swiper>

    <div>
      <img
        src="https://img12.360buyimg.com/img/s750x100_jfs/t1/126365/6/2669/64461/5ec7a70bEa8cba91d/7aad1d2c0217bd6b.png.webp"
        alt
      />
    </div>

    <div>
      <div class="price_wrap">
        <span class="hide fl"></span>
        <span class="price">
          ¥
          <em>{{collectionData.price}}</em>
          <span class="price_decimals">.00</span>
        </span>
        <!-- 收藏 -->
        <span class="col_right fr">
          <van-icon
            name="like-o"
            class="collection"
            @click="collection(collectionData)"
            :class="{active: likeActive}"
            size="25px"
          />
        </span>
      </div>
    </div>
    <div class="describe">斑布BABO BASE系列3层120抽面巾纸抽纸24包装竹醌抑菌（本色抽纸无漂白竹浆）新老包装随机发货</div>
    <div class="youhui one-text clearfix">
      <span class="fl">优惠</span>
      <p class="list fl">
        <van-tag type="danger">满减</van-tag>
        <span>满119元减15元</span>
        <br />
        <van-tag type="danger">换购</van-tag>
        <span class>购买1件可优惠换购热销商品</span>
        <br />
        <van-tag type="danger">满额返券</van-tag>
        <span class="span fr">购母婴、玩具、清洁、生鲜、个护、酒水、美妆、宠物部分自营商品满1元返优惠券包</span>
      </p>
    </div>
    <div>
      <van-goods-action>
        <van-goods-action-icon icon="chat-o" text="客服" color="#07c160" />
        <van-goods-action-icon icon="cart-o" text="购物车" @click="$router.push('/cart')" :info="num" />
        <van-goods-action-icon icon="shop-o" text="店铺" />
        <van-goods-action-button type="warning" text="加入购物车" @click="add(goods)" />
        <van-goods-action-button type="danger" text="立即购买" @click="add(goods)" to="/cart" />
      </van-goods-action>
    </div>
  </div>
</template>

<script>
import swiper from "../public/swiper.vue";

import { createNamespacedHelpers } from "vuex";

const { mapState, mapMutations } = createNamespacedHelpers(
  "cart",
  "collectionModule"
);
export default {
  data() {
    return {
      active: true,
      local: false,
      Images: [
        {
          img:
            "https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/128078/38/5345/599253/5eedc59aEa8947f2a/7c5d39621c6f45b6.jpg!q80.dpg.webp"
        },
        {
          img:
            "https://m.360buyimg.com/mobilecms/s843x843_jfs/t1/59766/14/12408/357146/5d9bf698E09cd37e8/4751e309aa8e4785.jpg!q70.dpg.webp"
        },
        {
          img:
            "https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/128078/38/5345/599253/5eedc59aEa8947f2a/7c5d39621c6f45b6.jpg!q80.dpg.webp"
        }
      ],
      // num:1,
      goods: {
        id: 1,
        price: "69",
        num: 1
      },
      collectionData: {
        id: "",
        price: "699"
      }
    };
  },
  computed: {
    ...mapState({
      num: state => state.num
    }),
    ...mapState(["likeActive"])
  },
  methods: {
    ...mapMutations(["add"]),
    onClickLeft() {
      this.$router.go(-1);
    },

    collection(item) {
      console.log("item==>", item);
      //获取用户登录状态

      let userStatus = localStorage.getItem("user");
      console.log("userStatus", userStatus);

      if (userStatus) {
        userStatus = JSON.parse(userStatus);

        if (!userStatus.isLogin) {
          return this.$router.push("/my/login");
        }

        //获取用户收藏的商品
        let collectionData = localStorage.getItem("collectionData");
        collectionData = collectionData ? JSON.parse(collectionData) : {};

        //记录当前用户收藏的商品
        let currentCollectionData = collectionData[userStatus.username];
        console.log("currentCollectionData", currentCollectionData);

        if (!currentCollectionData) {
          collectionData[userStatus.username] = [];
        }

        // 收藏商品之前，根据商品的id判断是否已经收藏过该商品
        for (let i = 0; i < collectionData[userStatus.username].length; i++) {
          if (collectionData[userStatus.username][i].id == item.id) {
            //提示用户
            this.$toast("你已经收藏过该商品");
            return;
          }
        }

        this.$store.commit("collectionModule/changelikeActive", true);

        // this.likective = true;

        //将商品推进我的收藏
        collectionData[userStatus.username].unshift(item);

        console.log("collectionData==>", collectionData);

        localStorage.setItem("collectionData", JSON.stringify(collectionData));

        this.$toast.success("收藏成功");
      } else {
        this.$router.push("/login");
      }
    }
  },
  components: {
    swiper
  },
  created() {
    //截取路由参数
    let id = this.$route.params.goodsId;
    console.log("id", id);
    this.collectionData.id = id;
    this.$store.state.vanTabbar = false;
  },
  destroyed() {
    this.$store.state.vanTabbar = true;
  }
};
</script>

<style lang="less" scoped>
.details {
  .collection.active {
    color: #fe0251;
  }
  .van-nav-bar {
    background-color: transparent;
  }
  .price_wrap {
    text-align: left;
    position: relative;
    margin-top: 12px;
    margin-bottom: 0;
    padding: 0 18px;
    line-height: 20px;
    font-size: 12px;
    .van-icon {
      line-height: 30px;
    }
  }
  .hide {
    display: none !important;
  }
  .price_wrap .price {
    color: #f2270c;
    font-size: 16px;
    line-height: 30px;
    display: inline-block;
    > em {
      font-size: 30px;
    }
    .price_decimals {
      font-size: 18px;
    }
  }
  .describe {
    color: #262626;
    font-size: 16px;
    text-align: left;
    padding: 12px 18px;
  }
  .youhui {
    padding: 12px 18px;
    text-align: left;
    > span {
      color: #262626;
      font-size: 13px;
    }
    .list {
      color: #333;
      font-size: 13px;
      padding: 0px 0px 5px 18px;
      > span {
        margin-left: 5px;
        margin-bottom: 10px;
      }
      .span {
        width: 225px;
        display: block;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        text-indent: 5px;
        line-height: 22px;
      }
    }
  }
}
</style>