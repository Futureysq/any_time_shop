<template>
  <div class="setting">
    <div class="back">
      <van-nav-bar title="账户设置" left-text="返回" left-arrow @click-left="$router.go(-1)"></van-nav-bar>
    </div>
    <div class="logobox clearfix">
      <div class="logo fl">
        <img class="auto-img" src="http://t9.baidu.com/it/u=3354140713,679888097&fm=193" alt />
      </div>
      <div class="name fl">
        <router-link to="/login">{{userInfo.username}}</router-link>
      </div>
      <div class="set fr">
        <div class="setting fl">
          <router-link to="/setting">
            <van-icon name="arrow" color="#000" size="16px" />
          </router-link>
        </div>
      </div>
    </div>
    <div class="cell">
      <van-cell-group>
        <van-cell title="地址管理" is-link to="/address"/>
        <van-cell title="账户与安全" is-link to="#" />
        <van-cell title="支付设置" is-link to="#" />
        <van-cell title="功能反馈" is-link to="#" />
      </van-cell-group>
    </div>
    <div style="margin: 16px;">
      <van-button round block type="danger" @click="logout" to="/my">退出登录</van-button>
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
            loginText: "登录",
            username: ""
          });
        } else {
          this.$router.push({ name: "login" });
        }
      } else {
        this.$router.push({ name: "login" });
      }
    },
    logout() {
      let userStatus = localStorage.getItem("user");

      if (userStatus) {
        let userInfo = JSON.parse(userStatus);

        if (userInfo.isLogin) {
          localStorage.removeItem("user");

          this.$store.commit("mineModule/changeUserInfo", {
            username: "登录"
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
          loginText: "退出",
          username: user.username
        });
      }
    }
  }
};
</script>

<style lang="less" scoped>
.setting {
  .logobox {
    // height: 80px;
    overflow: hidden;
    .logo {
      width: 60px;
      height: 60px;
      margin: 10px 10px 10px;
      border-radius: 50%;
      > img {
        border-radius: 50%;
      }
    }
    .name {
      margin: 10px 10px 10px;
      font-size: 16px;
      color: #333;
      > a {
        color: #333;
      }
    }
    .set {
      margin-top: 6px;
      margin-right: 6px;
      .setting {
        margin: 0 10px;
      }
    }
  }
  .cell {
    text-align: left;
    font-size: 16px;
  }
}
</style>