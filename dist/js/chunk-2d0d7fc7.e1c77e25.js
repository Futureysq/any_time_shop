(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d7fc7"],{"78c3":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"dddaddress"},[a("div",{staticClass:"back"},[a("van-nav-bar",{attrs:{title:e.$route.name,"left-text":"返回","left-arrow":""},on:{"click-left":function(t){return e.$router.go(-1)}}})],1),a("div",{staticClass:"add"},[a("van-address-edit",{attrs:{"area-list":e.areaList,"show-search-result":"","search-result":e.searchResult,"area-columns-placeholder":["请选择","请选择","请选择"]},on:{save:e.onSave,delete:e.onDelete}})],1)])},r=[],n=(a("053b"),a("d715")),c={data:function(){return{areaList:n["a"],searchResult:[]}},methods:{onSave:function(e){var t=e.name,a=e.tel,s=e.province,r=e.city,n=e.county,c=e.addressDetail,d=e.areaCode;this.$store.commit("address/add",{name:t,tel:a,province:s,city:r,county:n,addressDetail:c,address:s+r+n+c,areaCode:d}),this.$router.go(-1)}},created:function(){this.$store.state.vanTabbar=!1},destroyed:function(){this.$store.state.vanTabbar=!0}},d=c,o=a("9ca4"),i=Object(o["a"])(d,s,r,!1,null,"173e5ce7",null);t["default"]=i.exports}}]);
//# sourceMappingURL=chunk-2d0d7fc7.e1c77e25.js.map