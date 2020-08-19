<template>
  <div class="my">
    <div class="head">
      <div class="nav"></div>
      <div class="logobox clearfix">
        <div class="logo fl">
          <img class="auto-img" src="http://t9.baidu.com/it/u=3354140713,679888097&fm=193" alt />
        </div>
        <div class="name fl">
          <router-link @click="login" to="/login">{{userInfo.username}}</router-link>
        </div>
        <div class="set fr">
          <div class="setting fl">
            <router-link to="/setting">
              <van-icon name="setting-o" color="#fff" size="22px" />
            </router-link>
          </div>
          <div class="msg fl">
            <van-icon name="chat-o" color="#fff" size="22px" dot />
          </div>
        </div>
      </div>
      <div class="infocountbox">
        <div class="infocount clearfix">
          <div class="fl" @click="$router.push('/collection')">
            <div class="num">
              <span>0</span>
            </div>
            <div class="countname">
              <span>商品收藏</span>
            </div>
          </div>
          <div class="fl">
            <div class="num">
              <span>0</span>
            </div>
            <div class="countname">
              <span>店铺关注</span>
            </div>
          </div>
          <div class="fl">
            <div class="num">
              <span>0</span>
            </div>
            <div class="countname">
              <span>喜欢的内容</span>
            </div>
          </div>
          <div class="fl">
            <div class="num">
              <span>0</span>
            </div>
            <div class="countname">
              <span>浏览记录</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="listbox">
      <van-grid>
        <van-grid-item
          @click="$router.push('/orderLists/orderPay')"
          icon="https://img11.360buyimg.com/jdphoto/s40x40_jfs/t14911/113/1615678148/168/7734f24f/5a53578eN0e2811b6.png"
          text="待支付"
        />
        <van-grid-item
          @click="$router.push('/orderLists/orderGoods')"
          icon="https://img11.360buyimg.com/jdphoto/s40x40_jfs/t14608/2/1636876268/266/b4ebb3f2/5a535791N627c296c.png"
          text="待收货"
        />
        <van-grid-item
          icon="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1385595301,913558353&fm=26&gp=0.jpg"
          text="待评价"
        />
        <van-grid-item
          @click="$router.push('/orderLists/orderAll')"
          icon="https://img30.360buyimg.com/jdphoto/jfs/t14953/346/2113764063/185/1a1dcd24/5a6d7b8bN8431ea1a.png"
          text="我的订单"
        />
      </van-grid>
    </div>
    <div class="tools-service">
      <div class="tsbox clearfix">
        <div class="title fl">
          <span>工具与服务</span>
        </div>
        <div class="more fr">
          <span>查看更多</span>
          <van-icon class="fr icon" name="arrow" />
        </div>
      </div>
      <div class="infocountbox">
        <div class="infocount clearfix">
          <div class="fl">
            <div class="icon-box">
              <div class="list-icon">
                <img
                  src="https://img20.360buyimg.com/jdphoto/jfs/t1/49110/34/10536/6284/5d7a46d5Eb6bcc8ec/bc4fe250dd2037a4.png"
                  alt
                />
              </div>
            </div>
            <div class="countname">
              <span>客服服务</span>
            </div>
          </div>
          <div class="fl">
            <div class="icon-box">
              <div class="list-icon">
                <img
                  src="https://img12.360buyimg.com/img/s80x80_jfs/t1/114406/32/5864/20856/5eb69e23E12df8b8a/75f3bd3c7996ef49.png"
                  alt
                />
              </div>
            </div>
            <div class="countname">
              <span>寄件服务</span>
            </div>
          </div>
          <div class="fl">
            <div class="icon-box">
              <div class="list-icon">
                <img
                  src="https://m.360buyimg.com/mobilecms/s80x80_jfs/t16741/258/1541877121/7017/6e03894b/5acdc628Nf7d6f780.png.webp"
                  alt
                />
              </div>
            </div>
            <div class="countname">
              <span>主题换服</span>
            </div>
          </div>
          <div class="fl">
            <div class="icon-box">
              <div class="list-icon">
                <img
                  src="https://img12.360buyimg.com/img/s64x64_jfs/t1/102785/29/14987/2346/5e6b8ed9Ee5ab6266/d6d34952c182fb1b.png.webp"
                  alt
                />
              </div>
            </div>
            <div class="countname">
              <span>闲置换钱</span>
            </div>
          </div>
        </div>
        <div class="infocount clearfix">
          <div class="fl">
            <div class="icon-box">
              <div class="list-icon">
                <img
                  src="https://img12.360buyimg.com/img/s80x80_jfs/t1/85140/26/14716/7842/5e689890E8e38c71b/4979a5ad69098dcd.png"
                  alt
                />
              </div>
            </div>
            <div class="countname">
              <span>问医生</span>
            </div>
          </div>
          <div class="fl">
            <div class="icon-box">
              <div class="list-icon">
                <img
                  src="https://img14.360buyimg.com/jdphoto/jfs/t1/24988/22/12030/2316/5c94d6d4E7cdcf995/c8fe8e84d89685f7.png.webp"
                  alt
                />
              </div>
            </div>
            <div class="countname">
              <span>我的预约</span>
            </div>
          </div>
          <div class="fl">
            <div class="icon-box">
              <div class="list-icon">
                <img
                  src="https://img30.360buyimg.com/jdphoto/jfs/t1/73737/22/10217/7332/5d7a46a5Ecb2f53d6/0d195603ad90e79c.png"
                  alt
                />
              </div>
            </div>
            <div class="countname">
              <span>新品试用</span>
            </div>
          </div>
          <div class="fl">
            <div class="icon-box">
              <div class="list-icon">
                <img
                  src="https://m.360buyimg.com/mobilecms/s80x80_jfs/t1/110682/29/897/4880/5e7344b3E8fb10394/9c44e06113d83d21.png.webp"
                  alt
                />
              </div>
            </div>
            <div class="countname">
              <span>我的拼购</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="tools-service">
      <div class="infocountbox">
        <div class="infocount clearfix">
          <div class="fl">
            <div class="icon-box">
              <div class="list-icon">
                <img
                  src="https://img12.360buyimg.com/img/s80x80_jfs/t1/108558/15/7662/8607/5e5dc28be937e07fd/648d1078fe85702d.png.webp"
                  alt
                />
              </div>
            </div>
            <div class="countname">
              <span>主会场</span>
            </div>
          </div>
          <div class="fl">
            <div class="icon-box">
              <div class="list-icon">
                <img
                  src="https://img12.360buyimg.com/jdphoto/jfs/t1/90950/20/8517/5827/5e0560f3Ebc62e13d/7e9cc3e780ff1230.png"
                  alt
                />
              </div>
            </div>
            <div class="countname">
              <span>大牌爆品</span>
            </div>
          </div>
          <div class="fl">
            <div class="icon-box">
              <div class="list-icon">
                <img
                  src="https://img14.360buyimg.com/jdphoto/jfs/t1/61812/18/13167/6397/5da83d24E6b6a7674/630d982ae2481a48.png"
                  alt
                />
              </div>
            </div>
            <div class="countname">
              <span>30元红包</span>
            </div>
          </div>
          <div class="fl">
            <div class="icon-box">
              <div class="list-icon">
                <img
                  src="https://img11.360buyimg.com/jdphoto/jfs/t1/41550/18/15353/7347/5d803e98E6312ddbc/f776859daa048b65.png"
                  alt
                />
              </div>
            </div>
            <div class="countname">
              <span>免息狂欢</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
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
  </div>
</template>


<script>
import { createNamespacedHelpers } from "vuex";
const { mapState } = createNamespacedHelpers("mineModule");
export default {
  computed: {
    ...mapState(["userInfo"])
  },

  methods: {
    //退出或者登录
    
    login() {
      let userStatus = localStorage.getItem("user");

      if (userStatus) {
        let userInfo = JSON.parse(userStatus);

        if (userInfo.isLogin) {
          localStorage.removeItem("user");

          this.$store.commit("mineModule/changeUserInfo", {
            username: ""
          });
        } else {
          this.$router.push({ name: "login" });
        }
      } else {
        this.$router.push({ name: "login" });
      }
    },
    
  },
  created() {
    //获取用户信息
    let userStatus = localStorage.getItem("user");

    if (userStatus) {
      let user = JSON.parse(userStatus);

      if (user.isLogin) {
        this.$store.commit("mineModule/changeUserInfo", {
          username: user.username
        });
      }
    }
  }
}
</script>

<style lang="less" scoped>
.my {
  background-color: rgb(236, 235, 235);
  width: 100%;
  .head {
    background-color: #ff4500;
    .nav {
      height: 40px;
    }
    .logobox {
      overflow: hidden;
      .logo {
        width: 60px;
        height: 60px;
        margin: 32px 10px 10px;
        border-radius: 50%;
        > img {
          border-radius: 50%;
        }
      }
      .name {
        margin: 32px 10px 10px;
        font-size: 18px;
        color: #fff;
        > a {
          color: #fff;
        }
      }
      .set {
        margin-top: 5px;
        .setting {
          margin: 0 10px;
        }
        .msg {
          margin-right: 10px;
        }
      }
    }
    .infocountbox {
      padding: 0 10px;
      .infocount {
        padding: 0px 0px 10px;
        > div {
          width: 25%;
        }
        .num {
          > span {
            font-size: 20px;
            color: #fff;
          }
        }
        .countname {
          height: 20px;
          line-height: 14px;
          > span {
            font-size: 14px;
            color: #fff;
          }
        }
      }
    }
  }
  .listbox {
    padding: 10px 0;
  }
  .tools-service {
    background-color: #fff;
    margin: 0px 0px 10px;
    .tsbox {
      height: 36px;
      line-height: 36px;
      padding: 0 10px;
      .title {
        font-size: 14px;
        font-family: "微软雅黑";
        font-weight: 700;
      }
      .more {
        font-size: 12px;
        .icon {
          margin-top: 11px;
        }
      }
    }
    .infocountbox {
      padding: 0 10px;
      .infocount {
        padding: 10px 0;
        > div {
          width: 25%;
        }
        .icon-box {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          margin: 0 auto;
          overflow: hidden;
          .list-icon {
            overflow: hidden;
            > img {
              width: 32px;
              height: 32px;
            }
          }
        }
        .countname {
          height: 20px;
          line-height: 12px;
          > span {
            font-size: 12px;
            color: #646566;
          }
        }
      }
    }
  }
  .h2 {
    font-size: 14px;
    color: #969799;
    padding: 0;
    margin: 0;
    padding: 0px 0 0;
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
}
</style>