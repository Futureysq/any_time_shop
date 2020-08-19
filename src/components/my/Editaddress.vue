<template>
  <div class="editaddress">
    <div class="back">
      <van-nav-bar :title="$route.name" left-text="返回" left-arrow @click-left="$router.go(-1)"></van-nav-bar>
    </div>
    <div class="add">
      <van-address-edit
        :area-list="areaList"
        show-delete
        :address-info="addressInfo"
        show-search-result
        :search-result="searchResult"
        :area-columns-placeholder="['请选择', '请选择', '请选择']"
        @save="onSave"
        @delete="onDelete"
      />
    </div>
  </div>
</template>

<script>
import areaList from "./erea.js";
export default {
  data() {
    return {
      areaList,
      searchResult: [],
      addressInfo: {}
    };
  },
  methods: {
    onSave({ name, tel, province, city, county, addressDetail, areaCode }) {
      this.$store.commit("address/edit", {
        id: this.$route.query.index, //修改id；,
        name,
        tel,
        province,
        city,
        county,
        addressDetail,
        address: province + city + county + addressDetail,
        areaCode
      });
      this.$router.go(-1); //回到上一级列表页
    },
    onDelete({ name, tel, province, city, county, addressDetail, areaCode }) {
      this.$store.commit("address/del", {
        id: this.$route.query.index, //修改id；,
        name,
        tel,
        province,
        city,
        county,
        addressDetail,
        address: province + city + county + addressDetail,
        areaCode
      });
      this.$router.go(-1); //回到上一级列表页
    },
  },
  created() {
    // 获取修改id值
    let id = this.$route.query.index;
    let data = this.$store.state.address.lists;
    this.addressInfo = data.find(item => item.id == id); //匹配相同id值
    this.$store.state.vanTabbar = false;
  },
  destroyed() {
    this.$store.state.vanTabbar = true;
  }
};
</script>

<style lang="less" scoped>
</style>