<template>
  <div class="homepage">
    <!-- 轮播图 -->
    <swiper :imgs="Images"></swiper>

    <!-- 分类 -->
    <van-grid :border="border">
      <van-grid-item
        to="/class?id=0"
        icon="https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/90907/33/16508/7338/5e7cd12fE18b7f28c/62495feb17944a2c.png"
        text="随手淘超市"
      />
      <van-grid-item
        to="/class?id=1"
        icon="https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/127726/14/1342/5188/5ebb88feEd234750d/945abaa631eb7059.png.webp"
        text="女装"
      />
      <van-grid-item
        to="/class?id=2"
        icon="https://m.360buyimg.com/mobilecms/s80x80_jfs/t17803/169/1530358935/12101/d01c64c8/5acdc644N509e3ae3.png.webp"
        text="男装"
      />
      <van-grid-item
        to="/class?id=3"
        icon="https://m.360buyimg.com/mobilecms/s80x80_jfs/t18544/26/1952502036/6690/15b4ae4c/5ae06227N98bd13c4.png.webp"
        text="国际名牌"
      />
      <van-grid-item
        to="/class?id=4"
        icon="https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/88799/13/16665/5240/5e7d6448E42016d3c/77b343418a8a890d.png.webp"
        text="拍拍二手"
      />
      <van-grid-item
        to="/class?id=5"
        icon="https://m.360buyimg.com/mobilecms/s80x80_jfs/t18301/164/2005078858/4649/c7d7540e/5ae062baN937b5e1d.png.webp"
        text="电脑办公"
      />
      <van-grid-item
        to="/class?id=6"
        icon="https://m.360buyimg.com/mobilecms/s80x80_jfs/t18859/148/1985801887/5540/79c57f95/5ae0605bN31eb138b.png.webp"
        text="手机数码"
      />
      <van-grid-item
        to="/class?id=7"
        icon="https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/85541/12/16732/5068/5e7d60f9E0ff389b4/de3b049134031e56.png.webp"
        text="食品生鲜"
      />
    </van-grid>
    <div class="resource">
      <img
        src="https://m.360buyimg.com/mobilecms/s750x200_jfs/t1/132956/36/2590/70145/5eec86a5Eb9f70577/0d4d8571f1a0a4ec.png.webp"
        alt
      />
    </div>
    <div class="newuser-container">
      <div class="newuser">
        <div class="new">
          <div class="n fls06006">
            <div class="flo">
              <div class="gra grap">
                <div class="show-img">
                  <img
                    src="//m.360buyimg.com/mobilecms/s376x240_jfs/t1/49601/16/12206/115887/5d91b4d5E34709952/aba2bcb4855e6e52.png!q70.jpg.dpg"
                    class="opa1"
                  />
                </div>
              </div>
              <div type="000" class="gra grap">
                <div class="show-img">
                  <img
                    src="//m.360buyimg.com/mobilecms/s376x240_jfs/t1/32449/33/15631/174497/5cc2d86bE0289110c/9c53e25651659d43.png!q70.jpg.dpg"
                    class="opa1"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="youhui">
      <img
        src="https://m.360buyimg.com/mobilecms/s750x100_jfs/t1/140233/40/554/87332/5ee366f4E140aaa62/3d157e564de4ef34.png.webp"
        alt
      />
    </div>
    <div class="bgc">
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
import swiper from "../public/swiper.vue";
export default {
  data() {
    return {
      border: false,
      Images: [
        {
          img:
            "https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/112252/11/10370/194518/5eeb4ae1E527ce957/0cfc0d9abc2a6a34.jpg!q70.jpg.dpg"
        },
        {
          img:
            "https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/131732/38/1535/147375/5ed9e353E93f6fb32/4e4f7c507d8b0e59.jpg!cr_1125x445_0_171!q70.jpg.dpg"
        },
        {
          img:
            "https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/124507/4/5239/296968/5eec86daEadead72c/6b9f3db8ffb549f8.jpg!q70.jpg.dpg"
        }
      ]
    };
  },
  components: {
    swiper
  }
};
</script>

<style lang="less" scoped>
.homepage {
  background-color: #fed5db;
  .bgc{
    background-color: #fff;
  }
  .newuser-container {
    .newuser {
      margin-left: 10px;
      margin-right: 10px;
      font-size: 0;
      .new {
        .n {
          height: 120px;
          .flo {
            width: 100%;
            background: #fff;
            font-size: 100%;
            overflow: hidden;
            .grap {
              width: 50%;
              //   height: 120px;
              float: left;
            }
          }
        }
      }
    }
  }
  .h2 {
    font-size: 18px;
    color: #6591e9;
    padding: 5px 0;
    margin: 10px 0 0;
    background-color: rgb(245, 244, 244);
  }
  .right-item ul {
    border: 0;
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