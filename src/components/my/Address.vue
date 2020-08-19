<template>
  <div class="address">
    <div class="back">
      <van-nav-bar :title="$route.name" left-text="返回" left-arrow @click-left="$router.go(-1)"></van-nav-bar>
    </div>
    <div class="addressedit">
      <van-address-list
        v-model="chosenAddressId"
        :list="list"
        @add="onAdd"
        @edit="onEdit"
        @select="onSelect"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      chosenAddressId: null,
      list: []
    };
  },
  methods: {
    onAdd() {
      this.$router.push("/addaddress");
    },
    onEdit(item) {
      this.$router.push({
        path: "editaddress",
        query: { index: item.id }
      });
    },
    onSelect(item) {
      this.$store.state.address.defaultId = item.id;
    }
  },
  created() {
    this.list = this.$store.state.address.lists;
    this.chosenAddressId = this.$store.state.address.defaultId;
    this.$store.state.vanTabbar = false;
  },
  destroyed() {
    this.$store.state.vanTabbar = true;
  }
};
</script>

<style lang="less" scoped>
</style>