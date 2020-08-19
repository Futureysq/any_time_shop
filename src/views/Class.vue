<template>
  <div class="class">
    <div class="back fl" @click="back"></div>
    <van-search v-model="value" shape="round" background="#fff" placeholder="请输入搜索关键词" />

    <div class="content">
      <div class="left" ref="left">
        <ul>
          <li
            v-for="(item,index) in left"
            :key="index"
            :class="{current:index==currentIndex}"
            @click="selectItem(index,$event)"
          >
            <span class="left-item">{{item}}</span>
          </li>
        </ul>
      </div>
      <div class="right" ref="right">
        <ul>
          <li v-for="(item,index) in right" :key="index" class="right-item right-item-hook">
            <h2>{{item.name}}</h2>
            <ul>
              <li v-for="(item,index) in item.content" :data-id="item.id" :key="index">
                <div class="list" @click="$router.push({name:'details',params:{goodsId:item.id}})">
                  <img :src="item.img" alt />
                  <span>{{item.names}}</span>
                </div>
                
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from "@better-scroll/core";
export default {
  data() {
    return {
      value: "",
      left: [
        "超市",
        "女士服装",
        "男士服装",
        "国际名牌",
        "拍拍二手",
        "电脑办公",
        "手机数码",
        "食品生鲜",
        "家用电器",
        "母婴童装",
        "运动户外",
        "图书音像",
        "酒水饮料",
        "玩具乐器"
      ],
      right: [
        {
          name: "超市",
          content: [
            {
              img:
                "https://img20.360buyimg.com/focus/s140x140_jfs/t13684/103/181232450/2817/1bd36d3d/5a057f17Nc76b625d.jpg",
              names: "纸品湿巾",
              id: 0,
              price:599
            },
            {
              img:
                "https://img10.360buyimg.com/focus/s140x140_jfs/t12136/32/190594635/3030/39a660be/5a057ef3N4b20576c.jpg",
              names: "衣物清洁",
              id: 1,
              price:5999
            },
            {
              img:
                "https://img12.360buyimg.com/focus/s140x140_jfs/t12046/51/196865136/2542/dd0cb394/5a057eeaNe24e73fb.jpg",
              names: "洗发护发",
              id: 2
            },
            {
              img:
                "https://img30.360buyimg.com/focus/s140x140_jfs/t11257/264/1649145508/5426/5f7c71bb/5a057ee0N0dc59d02.jpg",
              names: "家庭清洁",
              id: 3
            },
            {
              img:
                "https://img12.360buyimg.com/focus/s140x140_jfs/t11596/91/1612970162/2450/608966a4/5a057efdN543407fa.jpg",
              names: "口腔护理",
              id: 4
            },
            {
              img:
                "https://img10.360buyimg.com/focus/s140x140_jfs/t13519/304/184655750/2450/608966a4/5a057eaaNf62e9b4f.jpg",
              names: "清洁工具",
              id: 5
            }
          ]
        },
        {
          name: "女士服装",
          content: [
            {
              img:
                "https://img30.360buyimg.com/focus/s140x140_jfs/t1/115539/34/8480/3602/5ecf2a6aE63758973/f77877220c415ca0.jpg",
              names: "当季热卖",
              id: 6
            },
            {
              img:
                "https://img30.360buyimg.com/focus/s140x140_jfs/t16891/72/715748110/3080/182127b5/5a9fb67aN37c4848f.jpg",
              names: "连衣裙",
              id: 7
            },
            {
              img:
                "https://img20.360buyimg.com/focus/s140x140_jfs/t19471/233/655303672/4619/b23fea4b/5a9fb684Ne1ec9fe8.jpg",
              names: "T恤",
              id: 8
            }
          ]
        },

        {
          name: "男士服装",
          content: [
            {
              img:
                "https://img30.360buyimg.com/focus/s140x140_jfs/t17449/23/1286271766/3527/870ce296/5ac4780cN6087feb5.jpg",
              names: "夹克",
              id: 9
            },
            {
              img:
                "https://img12.360buyimg.com/focus/s140x140_jfs/t19312/140/1294064569/4871/1c61d372/5ac47812N52823c3e.jpg",
              names: "T恤",
              id: 10
            },
            {
              img:
                "https://img30.360buyimg.com/focus/s140x140_jfs/t19783/251/1331277260/4287/bb458049/5ac4781bN48dc86e1.jpg",
              names: "针织衫",
              id: 11
            }
          ]
        },
        {
          name: "国际名牌",
          content: [
            {
              img:
                "https://img20.360buyimg.com/focus/s140x140_jfs/t12529/90/339098904/2534/6650478c/5a094afdN6786ccb3.jpg",
              names: "",
              id: 12
            },
            {
              img:
                "https://img20.360buyimg.com/focus/s140x140_jfs/t7699/164/4307974151/3422/38b6b48/5a094b5bN506d61a8.jpg",
              names: "",
              id: 13
            },
            {
              img:
                "https://img30.360buyimg.com/focus/s140x140_jfs/t12322/286/340378434/1690/5802b02b/5a094b09N323d85c7.jpg",
              names: "",
              id: 14
            },
            {
              img:
                "https://img30.360buyimg.com/focus/s140x140_jfs/t11419/208/1770292273/3373/d42b6236/5a094b19Nfdc61ce3.jpg",
              names: "",
              id: 15
            },
            {
              img:
                "https://img30.360buyimg.com/focus/s140x140_jfs/t7942/316/4339599353/2359/7e021574/5a094b35N312ed872.jpg",
              names: "",
              id: 16
            },
            {
              img:
                "https://img13.360buyimg.com/focus/s140x140_jfs/t12232/1/365732795/2868/3878dcbf/5a094b46N7c66cc0a.jpg",
              names: "",
              id: 17
            }
          ]
        },
        {
          name: "拍拍二手",
          content: [
            {
              img:
                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1592758944694&di=ae8e1da171a4e4e301ab8f9b8e8ffed2&imgtype=0&src=http%3A%2F%2Fimg3.redocn.com%2Ftupian%2F20151013%2FXyuzhouxingkongtu_5076932.jpg",
              names: "X"
            }
          ]
        },
        {
          name: "电脑办公",
          content: [
            {
              img:
                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1592758944694&di=ae8e1da171a4e4e301ab8f9b8e8ffed2&imgtype=0&src=http%3A%2F%2Fimg3.redocn.com%2Ftupian%2F20151013%2FXyuzhouxingkongtu_5076932.jpg",
              names: "X"
            }
          ]
        },
        {
          name: "手机数码",
          content: [
            {
              img:
                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1592758944694&di=ae8e1da171a4e4e301ab8f9b8e8ffed2&imgtype=0&src=http%3A%2F%2Fimg3.redocn.com%2Ftupian%2F20151013%2FXyuzhouxingkongtu_5076932.jpg",
              names: "X"
            }
          ]
        },
        {
          name: "食品生鲜",
          content: [
            {
              img:
                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1592758944694&di=ae8e1da171a4e4e301ab8f9b8e8ffed2&imgtype=0&src=http%3A%2F%2Fimg3.redocn.com%2Ftupian%2F20151013%2FXyuzhouxingkongtu_5076932.jpg",
              names: "X"
            }
          ]
        },
        {
          name: "家用电器",
          content: [
            {
              img:
                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1592758944694&di=ae8e1da171a4e4e301ab8f9b8e8ffed2&imgtype=0&src=http%3A%2F%2Fimg3.redocn.com%2Ftupian%2F20151013%2FXyuzhouxingkongtu_5076932.jpg",
              names: "X"
            }
          ]
        },
        {
          name: "母婴童装",
          content: [
            {
              img:
                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1592758944694&di=ae8e1da171a4e4e301ab8f9b8e8ffed2&imgtype=0&src=http%3A%2F%2Fimg3.redocn.com%2Ftupian%2F20151013%2FXyuzhouxingkongtu_5076932.jpg",
              names: "X"
            }
          ]
        },
        {
          name: "运动户外",
          content: [
            {
              img:
                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1592758944694&di=ae8e1da171a4e4e301ab8f9b8e8ffed2&imgtype=0&src=http%3A%2F%2Fimg3.redocn.com%2Ftupian%2F20151013%2FXyuzhouxingkongtu_5076932.jpg",
              names: "X"
            }
          ]
        },
        {
          name: "图书音像",
          content: [
            {
              img:
                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1592758944694&di=ae8e1da171a4e4e301ab8f9b8e8ffed2&imgtype=0&src=http%3A%2F%2Fimg3.redocn.com%2Ftupian%2F20151013%2FXyuzhouxingkongtu_5076932.jpg",
              names: "X"
            }
          ]
        },
        {
          name: "酒水饮料",
          content: [
            {
              img:
                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1592758944694&di=ae8e1da171a4e4e301ab8f9b8e8ffed2&imgtype=0&src=http%3A%2F%2Fimg3.redocn.com%2Ftupian%2F20151013%2FXyuzhouxingkongtu_5076932.jpg",
              names: "X"
            }
          ]
        },
        {
          name: "玩具乐器",
          content: [
            {
              img:
                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1592758944694&di=ae8e1da171a4e4e301ab8f9b8e8ffed2&imgtype=0&src=http%3A%2F%2Fimg3.redocn.com%2Ftupian%2F20151013%2FXyuzhouxingkongtu_5076932.jpg",
              names: "X"
            }
          ]
        }
      ],
      scrollY: 0,
      listHeight: [] //存储右边每一项li高度
    };
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    _initScroll() {
      // 联动实例化插件对象
      this.lefts = new BScroll(this.$refs.left, {
        click: true, //拥有触发事件，
        probeType: 3 //探针的效果，时刻获取滚动高度
      });
      this.rights = new BScroll(this.$refs.right, {
        click: true, //拥有触发事件，
        probeType: 3 //探针的效果，时刻获取滚动高度
      });

      // rights这个对象监听滚动事件，
      this.rights.on("scroll", pos => {
        this.scrollY = Math.abs(Math.round(pos.y));
      });
    },
    _getHeight() {
      let rightItems = this.$refs.right.getElementsByClassName(
        "right-item-hook"
      );
      let height = 0; //默认高度
      this.listHeight.push(height); //添加到高度数组中
      // 循环对象
      for (let i = 0; i < rightItems.length; i++) {
        let item = rightItems[i];
        height += item.clientHeight; // 对象高度
        this.listHeight.push(height);
      }
    },
    selectItem(index, event) { // index 下标；event 点击对象事件
      if (!event._constructed) { // 浏览器原生的点击事件没有_constructed所以当时浏览器监听到该属性时候return掉
        return;
      } else {
        // 联动效果
        let rightItems = this.$refs.right.getElementsByClassName(
          "right-item-hook"
        );
        let el = rightItems[index];
        // scrollToElement()//滚动到指定的目标元素
        this.rights.scrollToElement(el);

        // 左边联动
        let leftItems = this.$refs.left.getElementsByTagName("li");
        let elLi = leftItems[index];
        this.lefts.scrollToElement(elLi);
      }
    }
  },
  // 生命周期函数
  mounted() {
    this.$nextTick(() => {
      this._initScroll(); //调用初始化联动效果
      this._getHeight(); //获取右边每一项高度

      // 跳转效果
      if ("id" in this.$route.query) {
        // 联动效果
        let rightItems = this.$refs.right.getElementsByClassName(
          "right-item-hook"
        );
        let el = rightItems[this.$route.query.id];
        this.rights.scrollToElement(el);
      }
    });
  },
  // 计算属性
  computed: {
    currentIndex() {
      for (let i = 0; i < this.listHeight.length; i++) {
        let height = this.listHeight[i];
        let height2 = this.listHeight[i + 1];
        // height2不存在时候，或落在height和height2之间时候，直接放回索引值
        if (!height2 || (this.scrollY >= height && this.scrollY < height2)) {
          // 左边联动
          let leftItems = this.$refs.left.getElementsByTagName("li");
          let elLi = leftItems[i];
          this.lefts.scrollToElement(elLi);
          return i;
        }
      }
      // 如果this.listHeight没有值，返回0
      return 0;
    }
  }
};
</script>

<style lang="less" scoped>
.class {
  .back {
    width: 16px;
    height: 16px;
    margin: 18px 0px 16px 16px;
    background-image: url("./../assets/img/back.png");
    background-size: contain;
    background-repeat: no-repeat;
  }
  .content {
    display: flex;
    position: absolute;
    top: 54px;
    bottom: 50px;
    background-color: #eeeeee;
    width: 100%;
    overflow: hidden;
  }
  .left {
    flex: 0 0 85px;
    width: 85px;
    background-color: #f8f8f8;
  }
  .left li {
    width: 100%;
    height: 100%;
    font-size: 14px;
  }
  .left li.current {
    background-color: #fed5db;
    color: #333;
    font-weight: bold;
  }
  .left-item {
    display: block;
    width: 100%;
    height: 100%;
    line-height: 50px;
    height: 46px;
    text-align: center;
  }
  .right {
    flex: 1;
    background-color: #fff;
    padding: 17px 5px 0;
  }
  .right-item h2 {
    font-size: 14px;
    color: #333;
    text-align: left;
    margin: 0;
    padding: 0;
    font-weight: 700;
  }
  .right-item ul {
    border: 0;
    padding: 7px 10px 0;
    overflow: hidden;
  }
  .right-item li {
    position: relative;
    width: 33.3%;
    height: 107px;
    float: left;
    text-align: center;
    .list {
      position: absolute;

      height: 100%;
      width: 100%;
      > img {
        width: 60px;
        height: 60px;
        margin: auto;
      }
      > span {
        color: #333;
        font-size: 12px;
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