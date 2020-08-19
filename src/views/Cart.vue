<template>
  <div class="cart">
    <van-nav-bar
      title="购物车"
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
    <div class="kong" v-show="lists.length == 0">
      <img
        src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1592684291681&di=dc3c1761ea10b851a20f6f606b215298&imgtype=0&src=http%3A%2F%2Fpic.90sjimg.com%2Fdesign%2F00%2F57%2F93%2F24%2F58face867aabf.png"
        alt
      />
      
    </div>
    <p v-show="lists.length == 0">
      购物车空空如也，去
      <span class="guang">
        <router-link to="/home/homePage">逛逛</router-link>
      </span>
    </p>
    <div v-for="(item,index) in lists" :key="index" :data-id="index">
      <van-card class="price"
        :price="item.price + '.00'"
        desc="斑布BABO BASE系列3层120抽面巾纸抽纸24包装竹醌抑菌（本色抽纸无漂白竹浆）新老包装随机发货"
        thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
      >
        <div slot="tags">
          <van-stepper v-model="item.num" />
        </div>
        <div slot="footer">
          <div class="checkboxselect" @click="inputselect(index)">
            <van-icon name="success" v-show="item.isSelect" />
          </div>
          <van-button size="mini" class="del-btn" @click="del(index)">删除</van-button>
        </div>
      </van-card>
    </div>
    <div v-show="lists.length == 0">
      <h2 class="h2">~为你推荐~</h2>
      <div class="right-item">
        <ul>
          <li class>
            <div class="list">
              <img
                src="https://img20.360buyimg.com/focus/s140x140_jfs/t13684/103/181232450/2817/1bd36d3d/5a057f17Nc76b625d.jpg"
                alt
              />
              <span class="desc">斑布BABO BASE系列3层120抽面巾纸抽纸24包装竹醌抑菌（本色抽纸无漂白竹浆）新老包装随机发货</span>
              <span>¥ </span><span class="price">299</span><span>.00</span>
            </div>
            <div class="list1">
              <router-link to="/details" tag="a"></router-link>
            </div>
          </li>
          <li class>
            <div class="list">
              <img
                src="https://img14.360buyimg.com/n2/s240x240_jfs/t1/45124/2/5820/397999/5d36c0cdEda359655/61f65ac6aae3146b.jpg!q70.jpg"
                alt
              />
              <span class="desc">荣耀9X 麒麟810 4000mAh续航 4800万超清夜拍 6.59英寸升降全面屏 全网通6GB+64GB 魅海蓝</span>
              <span>¥ </span><span class="price">299</span><span>.00</span>
            </div>
            <div class="list1">
              <router-link to="/details" tag="a"></router-link>
            </div>
          </li>
          <li class>
            <div class="list">
              <img
                src="https://img10.360buyimg.com/mobilecms/s316x316_jfs/t1/117100/23/10786/162441/5ef36a9eEc4062df0/f74f3fca7170bcee.jpg!q70.dpg.webp"
                alt
              />
              <span class="desc">惠普(HP)暗影精灵5 15.6英寸游戏笔记本电脑(i5-9300H 8G 512GSSD GTX1650 4G独显)</span>
              <span>¥ </span><span class="price">299</span><span>.00</span>
            </div>
            <div class="list1">
              <router-link to="/details" tag="a"></router-link>
            </div>
          </li>
          <li class>
            <div class="list">
              <img
                src="https://img10.360buyimg.com/n2/s240x240_jfs/t1/143459/38/1532/382113/5ef6ab49E25d5c03a/1bc21f3df9ee9d58.jpg!q70.jpg"
                alt
              />
              <span class="desc">佳佰  一次性口罩 防尘透气防护口鼻罩 出行口罩 学生口罩  （含熔喷布）蓝色三层盒装 50只/盒</span>
              <span>¥ </span><span class="price">299</span><span>.00</span>
            </div>
            <div class="list1">
              <router-link to="/details" tag="a"></router-link>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <van-submit-bar
      :price="totals * 100"
      button-text="去结算"
      @submit="$router.push('/order')"
      v-show="lists.length != 0"
    >
      <van-checkbox @click="checkAll" :value="checked">全选</van-checkbox>
    </van-submit-bar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lists: [],
      totals: 0, //总价格
      checked: true //默认全选
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    del(index) {
      this.lists.splice(index, 1);
    },
    // 控制全选与反选
    checkAll() {
      this.lists.forEach(data => {
        data.isSelect = !this.checked;
      });
      this.checked = !this.checked;
    },
    checkboxclick() {//检查状态
      this.checked = this.lists.every(item => {
        return item.isSelect; //返回true
      });
    },
    // 单击商品列表选项操作
    inputselect(index) {
      // 修改商品列表数据
      this.lists[index].isSelect = !this.lists[index].isSelect;
      this.checkboxclick();
      this.sum();
    },
    // 总价格计算
    sum() {
      this.totals = this.lists.reduce((total, item) => {
        // 判断选项
        if (!item.isSelect) return total; //false不让计算总价格
        return total + parseInt(item.price) * parseInt(item.num); //总价格
      }, 0); //总价格默认参数值为0
    }
  },
  created() {
    this.lists = this.$store.state.cart.lists;
    this.sum(); //执行计算总价格
    this.checkboxclick();
  },
  beforeUpdate() {
    this.sum(); //执行计算总价格
  },
};
</script>

<style lang="less" scoped>
.cart {
  background-color: #f8f8f8;
  .van-submit-bar{
        bottom:50px;
    }
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
        overflow:hidden; 
        text-overflow:ellipsis;
        display: -webkit-box;
        -webkit-box-align: start; 
        -webkit-box-orient:vertical;
        -webkit-line-clamp:2; 
        
        }
        >span{
          font-size: 12px;
          color: #ee0a24;
          text-align: left;
      }
      .price{
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
  .van-card__price{
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