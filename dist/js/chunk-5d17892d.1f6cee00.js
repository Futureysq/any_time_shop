(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5d17892d"],{"3f53":function(t,e,r){},6566:function(t,e,r){"use strict";var n=r("3f53"),a=r.n(n);a.a},"67b4":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"setting"},[r("div",{staticClass:"back"},[r("van-nav-bar",{attrs:{title:"账户设置","left-text":"返回","left-arrow":""},on:{"click-left":function(e){return t.$router.go(-1)}}})],1),r("div",{staticClass:"logobox clearfix"},[t._m(0),r("div",{staticClass:"name fl"},[r("router-link",{attrs:{to:"/login"}},[t._v(t._s(t.userInfo.username))])],1),r("div",{staticClass:"set fr"},[r("div",{staticClass:"setting fl"},[r("router-link",{attrs:{to:"/setting"}},[r("van-icon",{attrs:{name:"arrow",color:"#000",size:"16px"}})],1)],1)])]),r("div",{staticClass:"cell"},[r("van-cell-group",[r("van-cell",{attrs:{title:"地址管理","is-link":"",to:"/address"}}),r("van-cell",{attrs:{title:"账户与安全","is-link":"",to:"#"}}),r("van-cell",{attrs:{title:"支付设置","is-link":"",to:"#"}}),r("van-cell",{attrs:{title:"功能反馈","is-link":"",to:"#"}})],1)],1),r("div",{staticStyle:{margin:"16px"}},[r("van-button",{attrs:{round:"",block:"",type:"danger",to:"/my"},on:{click:t.logout}},[t._v("退出登录")])],1)])},a=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"logo fl"},[r("img",{staticClass:"auto-img",attrs:{src:"http://t9.baidu.com/it/u=3354140713,679888097&fm=193",alt:""}})])}],o=r("e793"),i=r("9f3a"),s=Object(i["a"])("mineModule"),c=s.mapState,l={computed:Object(o["a"])({},c(["userInfo"])),methods:{login:function(){var t=localStorage.getItem("user");if(t){var e=JSON.parse(t);e.isLogin?(localStorage.removeItem("user"),this.$store.commit("mineModule/changeUserInfo",{loginText:"登录",username:""})):this.$router.push({name:"login"})}else this.$router.push({name:"login"})},logout:function(){var t=localStorage.getItem("user");if(t){var e=JSON.parse(t);e.isLogin?(localStorage.removeItem("user"),this.$store.commit("mineModule/changeUserInfo",{username:"登录"})):this.$router.push({name:"login"})}else this.$router.push({name:"login"})}},created:function(){var t=localStorage.getItem("user");if(t){var e=JSON.parse(t);e.isLogin&&this.$store.commit("mineModule/changeUserInfo",{loginText:"退出",username:e.username})}}},u=l,f=(r("6566"),r("9ca4")),b=Object(f["a"])(u,n,a,!1,null,"5d962ac6",null);e["default"]=b.exports},b73f:function(t,e,r){var n=r("1c8b"),a=r("efe2"),o=r("da10"),i=r("aa6b").f,s=r("1e2c"),c=a((function(){i(1)})),l=!s||c;n({target:"Object",stat:!0,forced:l,sham:!s},{getOwnPropertyDescriptor:function(t,e){return i(o(t),e)}})},bf84:function(t,e,r){var n=r("1c8b"),a=r("1e2c"),o=r("8d44"),i=r("da10"),s=r("aa6b"),c=r("1bbd");n({target:"Object",stat:!0,sham:!a},{getOwnPropertyDescriptors:function(t){var e,r,n=i(t),a=s.f,l=o(n),u={},f=0;while(l.length>f)r=a(n,e=l[f++]),void 0!==r&&c(u,e,r);return u}})},ce3c:function(t,e,r){"use strict";function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}r.d(e,"a",(function(){return n}))},dbb3:function(t,e,r){"use strict";var n=r("1c8b"),a=r("5dfd").filter,o=r("1ea7"),i=r("ff9c"),s=o("filter"),c=i("filter");n({target:"Array",proto:!0,forced:!s||!c},{filter:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}})},e793:function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));r("f3dd"),r("dbb3"),r("fe59"),r("b73f"),r("bf84"),r("fe8a"),r("08ba");var n=r("ce3c");function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){Object(n["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}},fe8a:function(t,e,r){var n=r("1c8b"),a=r("3553"),o=r("cbab"),i=r("efe2"),s=i((function(){o(1)}));n({target:"Object",stat:!0,forced:s},{keys:function(t){return o(a(t))}})}}]);
//# sourceMappingURL=chunk-5d17892d.1f6cee00.js.map