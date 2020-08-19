<template>
  <div class="dddaddress">
    <div class="back">
      <van-nav-bar :title="$route.name" left-text="返回" left-arrow @click-left="$router.go(-1)"></van-nav-bar>
    </div>
    <div class="add">
      <van-address-edit
        :area-list="areaList"
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
      searchResult: []
    };
  },
  methods: {
    onSave({ name, tel, province, city, county, addressDetail, areaCode }) {
      this.$store.commit("address/add", {
        name,
        tel,
        province,
        city,
        county,
        addressDetail,
        address: province + city + county + addressDetail,
        areaCode
      });
      this.$router.go(-1);
    }
  },
  created() {
    this.$store.state.vanTabbar = false;
  },
  destroyed() {
    this.$store.state.vanTabbar = true;
  }
};
</script>

<style lang="less" scoped>
</style>