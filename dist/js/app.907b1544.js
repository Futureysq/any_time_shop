(function(e){function n(n){for(var a,c,u=n[0],d=n[1],s=n[2],i=0,l=[];i<u.length;i++)c=u[i],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&l.push(r[c][0]),r[c]=0;for(a in d)Object.prototype.hasOwnProperty.call(d,a)&&(e[a]=d[a]);h&&h(n);while(l.length)l.shift()();return o.push.apply(o,s||[]),t()}function t(){for(var e,n=0;n<o.length;n++){for(var t=o[n],a=!0,c=1;c<t.length;c++){var u=t[c];0!==r[u]&&(a=!1)}a&&(o.splice(n--,1),e=d(d.s=t[0]))}return e}var a={},c={app:0},r={app:0},o=[];function u(e){return d.p+"js/"+({}[e]||e)+"."+{"chunk-0ae18584":"51af0f1a","chunk-0e3eca90":"fc176f64","chunk-2d0ac97d":"5c61b138","chunk-2d0dd7f3":"7e0543cb","chunk-2d210801":"53bde24d","chunk-2d2161fa":"c78d96c9","chunk-2d2172a7":"1e491e14","chunk-1e25bf4a":"c847e4fd","chunk-426e6070":"ea4969cd","chunk-7957da9a":"c3dc0ce9","chunk-79684b5a":"d074a7a6","chunk-2d2176a9":"b121eda3","chunk-2d21a3e7":"87c12cfc","chunk-2d21eaad":"697b4ce2","chunk-2d0d7fc7":"e1c77e25","chunk-79263160":"fc3a969f","chunk-2d229d86":"00a4805f","chunk-2d22dd58":"a5da5dda","chunk-515baa58":"6187a21f","chunk-5944862c":"e6e05e18","chunk-5d17892d":"1f6cee00","chunk-68f0c183":"26ba3e9c","chunk-6eb2a941":"b32de9ce","chunk-73d03b70":"bbac0a17","chunk-b1329cfe":"447679dc","chunk-ce846c84":"444088b9","chunk-d14d6482":"59f13717","chunk-d2c4be90":"f5384226","chunk-dbb05d80":"24feaea2"}[e]+".js"}function d(n){if(a[n])return a[n].exports;var t=a[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,d),t.l=!0,t.exports}d.e=function(e){var n=[],t={"chunk-0ae18584":1,"chunk-0e3eca90":1,"chunk-1e25bf4a":1,"chunk-426e6070":1,"chunk-7957da9a":1,"chunk-79684b5a":1,"chunk-515baa58":1,"chunk-5944862c":1,"chunk-5d17892d":1,"chunk-68f0c183":1,"chunk-6eb2a941":1,"chunk-73d03b70":1,"chunk-b1329cfe":1,"chunk-ce846c84":1,"chunk-d14d6482":1,"chunk-d2c4be90":1,"chunk-dbb05d80":1};c[e]?n.push(c[e]):0!==c[e]&&t[e]&&n.push(c[e]=new Promise((function(n,t){for(var a="css/"+({}[e]||e)+"."+{"chunk-0ae18584":"fb5d9bf5","chunk-0e3eca90":"86edce7e","chunk-2d0ac97d":"31d6cfe0","chunk-2d0dd7f3":"31d6cfe0","chunk-2d210801":"31d6cfe0","chunk-2d2161fa":"31d6cfe0","chunk-2d2172a7":"31d6cfe0","chunk-1e25bf4a":"7ddb84b3","chunk-426e6070":"a6f541f3","chunk-7957da9a":"6b0a8f7c","chunk-79684b5a":"5b3c7bec","chunk-2d2176a9":"31d6cfe0","chunk-2d21a3e7":"31d6cfe0","chunk-2d21eaad":"31d6cfe0","chunk-2d0d7fc7":"31d6cfe0","chunk-79263160":"31d6cfe0","chunk-2d229d86":"31d6cfe0","chunk-2d22dd58":"31d6cfe0","chunk-515baa58":"40db7ebb","chunk-5944862c":"8baec085","chunk-5d17892d":"147235d1","chunk-68f0c183":"cbcd6d73","chunk-6eb2a941":"2a61c4dd","chunk-73d03b70":"17c0f924","chunk-b1329cfe":"b3ca13a4","chunk-ce846c84":"4fe4c34e","chunk-d14d6482":"fcee433a","chunk-d2c4be90":"6923caaf","chunk-dbb05d80":"13710c5c"}[e]+".css",r=d.p+a,o=document.getElementsByTagName("link"),u=0;u<o.length;u++){var s=o[u],i=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(i===a||i===r))return n()}var l=document.getElementsByTagName("style");for(u=0;u<l.length;u++){s=l[u],i=s.getAttribute("data-href");if(i===a||i===r)return n()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=n,h.onerror=function(n){var a=n&&n.target&&n.target.src||r,o=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=a,delete c[e],h.parentNode.removeChild(h),t(o)},h.href=r;var f=document.getElementsByTagName("head")[0];f.appendChild(h)})).then((function(){c[e]=0})));var a=r[e];if(0!==a)if(a)n.push(a[2]);else{var o=new Promise((function(n,t){a=r[e]=[n,t]}));n.push(a[2]=o);var s,i=document.createElement("script");i.charset="utf-8",i.timeout=120,d.nc&&i.setAttribute("nonce",d.nc),i.src=u(e);var l=new Error;s=function(n){i.onerror=i.onload=null,clearTimeout(h);var t=r[e];if(0!==t){if(t){var a=n&&("load"===n.type?"missing":n.type),c=n&&n.target&&n.target.src;l.message="Loading chunk "+e+" failed.\n("+a+": "+c+")",l.name="ChunkLoadError",l.type=a,l.request=c,t[1](l)}r[e]=void 0}};var h=setTimeout((function(){s({type:"timeout",target:i})}),12e4);i.onerror=i.onload=s,document.head.appendChild(i)}return Promise.all(n)},d.m=e,d.c=a,d.d=function(e,n,t){d.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},d.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},d.t=function(e,n){if(1&n&&(e=d(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(d.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var a in e)d.d(t,a,function(n){return e[n]}.bind(null,a));return t},d.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return d.d(n,"a",n),n},d.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},d.p="/",d.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],i=s.push.bind(s);s.push=n,s=s.slice();for(var l=0;l<s.length;l++)n(s[l]);var h=i;o.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"4e66":function(e,n,t){},"56d7":function(e,n,t){"use strict";t.r(n);t("a133"),t("ed0d"),t("f09c"),t("e117");var a=t("0261"),c=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("van-tabbar",{directives:[{name:"show",rawName:"v-show",value:e.$store.state.vanTabbar,expression:"$store.state.vanTabbar"}],attrs:{route:e.route,"z-index":"1000"},model:{value:e.active,callback:function(n){e.active=n},expression:"active"}},[t("van-tabbar-item",{attrs:{to:"/home/HomePage",icon:"home-o"}},[e._v("首页")]),t("van-tabbar-item",{attrs:{to:"/class",icon:"bar-chart-o"}},[e._v("分类")]),t("van-tabbar-item",{attrs:{to:"/cart",icon:"cart-o"}},[e._v("购物车")]),t("van-tabbar-item",{attrs:{to:"/my",icon:"user-o"}},[e._v("我的")])],1),t("router-view")],1)},r=[],o={data:function(){return{active:0,route:!0}}},u=o,d=(t("7c55"),t("9ca4")),s=Object(d["a"])(u,c,r,!1,null,null,null),i=s.exports,l=(t("b4fb"),t("5748")),h=t("3211"),f=(t("e18c"),[{path:"/my",name:"我的",component:function(){return t.e("chunk-515baa58").then(t.bind(null,"4c41"))}},{path:"/login",name:"登录",component:function(){return t.e("chunk-68f0c183").then(t.bind(null,"4355"))}},{path:"/register",name:"注册",component:function(){return t.e("chunk-73d03b70").then(t.bind(null,"8618"))}},{path:"/setting",name:"设置",component:function(){return t.e("chunk-5d17892d").then(t.bind(null,"67b4"))}},{path:"/address",name:"地址管理",component:function(){return t.e("chunk-2d0ac97d").then(t.bind(null,"19cb"))}},{path:"/addaddress",name:"新增收货地址",component:function(){return Promise.all([t.e("chunk-2d21eaad"),t.e("chunk-2d0d7fc7")]).then(t.bind(null,"78c3"))}},{path:"/editaddress",name:"编辑收货地址",component:function(){return Promise.all([t.e("chunk-2d21eaad"),t.e("chunk-79263160")]).then(t.bind(null,"8920"))}}]),p={path:"/home",name:"主页",component:function(){return Promise.all([t.e("chunk-2d2172a7"),t.e("chunk-79684b5a")]).then(t.bind(null,"bb51"))},children:[{path:"HomePage",name:"首页",component:function(){return Promise.all([t.e("chunk-2d2172a7"),t.e("chunk-1e25bf4a")]).then(t.bind(null,"85f5"))}},{path:"MenClothing",name:"男装",component:function(){return t.e("chunk-2d22dd58").then(t.bind(null,"f8d4"))}},{path:"Computer",name:"电脑",component:function(){return t.e("chunk-2d210801").then(t.bind(null,"b7c9"))}},{path:"Phone",name:"手机",component:function(){return t.e("chunk-2d229d86").then(t.bind(null,"ded3"))}},{path:"Fresh",name:"生鲜",component:function(){return t.e("chunk-2d21a3e7").then(t.bind(null,"bb4e"))}},{path:"Sport",name:"运动",component:function(){return t.e("chunk-2d2161fa").then(t.bind(null,"c0b9"))}},{path:"Food",name:"食品",component:function(){return t.e("chunk-2d0dd7f3").then(t.bind(null,"8247"))}}]},b={path:"/class",name:"分类",component:function(){return t.e("chunk-d2c4be90").then(t.bind(null,"be7e"))}},m={path:"/details/:goodsId",name:"details",component:function(){return Promise.all([t.e("chunk-2d2172a7"),t.e("chunk-426e6070")]).then(t.bind(null,"4650"))}},k=[{path:"/cart",name:"购物车",component:function(){return t.e("chunk-ce846c84").then(t.bind(null,"b789"))}},{path:"/order",name:"订单",component:function(){return t.e("chunk-0ae18584").then(t.bind(null,"b6a9"))}}],v={path:"/orderLists",name:"我的订单",component:function(){return t.e("chunk-2d2176a9").then(t.bind(null,"c743"))},children:[{path:"orderAll",name:"全部",component:function(){return t.e("chunk-5944862c").then(t.bind(null,"e862"))}},{path:"orderPay",name:"待支付",component:function(){return t.e("chunk-dbb05d80").then(t.bind(null,"5e7c"))}},{path:"orderGoods",name:"待收货",component:function(){return t.e("chunk-0e3eca90").then(t.bind(null,"cfb1"))}},{path:"orderEnd",name:"已完成",component:function(){return t.e("chunk-d14d6482").then(t.bind(null,"9e8a"))}}]},g=[{path:"/guidepage",name:"引导页",component:function(){return Promise.all([t.e("chunk-2d2172a7"),t.e("chunk-7957da9a")]).then(t.bind(null,"e434"))}},{path:"/advertpage",name:"广告页",component:function(){return t.e("chunk-b1329cfe").then(t.bind(null,"4db7"))},beforeEnter:function(e,n,t){localStorage.advertpage?t():(localStorage.advertpage=!0,t("/guidepage"))}}],y={path:"/collection",name:"收藏",component:function(){return t.e("chunk-6eb2a941").then(t.bind(null,"13a0"))}};a["a"].use(h["a"]);var w=[{path:"/",redirect:"/advertpage"}].concat(Object(l["a"])(f),[p,b,m],Object(l["a"])(k),[v],Object(l["a"])(g),[y]),M=h["a"].prototype.push;h["a"].prototype.push=function(e){return M.call(this,e).catch((function(e){return e}))};var P=new h["a"]({mode:"history",base:"/",routes:w}),x=P,_=t("9f3a"),E=(t("3466"),t("fe59"),t("08ba"),{namespaced:!0,state:{lists:[{name:"张三",tel:"13099998888",province:"山西省",city:"晋中市",county:"和顺县",addressDetail:"1231231",address:"山西省晋中市和顺县1231231",areaCode:"140723",isDefault:!0,id:1}],defaultId:1},mutations:{add:function(e,n){e.lists.forEach((function(e){e.isDefault=!1})),n.isDefault=!0,n.id=e.lists.length+1,e.lists.unshift(n)},edit:function(e,n){var t=e.lists.findIndex((function(e){return e.id==n.id}));e.lists[t]=n},del:function(e,n){n.isDefault=!0,n.id=e.lists.length+1,e.lists.pop(n)}},acttions:{},getters:{},modules:{}}),O=(t("ea69"),{namespaced:!0,state:{lists:[],typeList:["全部","待支付","待收货","已完成"]},mutations:{add:function(e,n){e.lists.push(n)},edit:function(e,n){e.lists=null,e.lists=n},editId:function(e,n){for(var t=0;t<=n.length;t++)for(var a=0;a<=e.lists.length;a++)n[t].orderId==e.lists[a].orderId&&6==n[t].type?e.lists.splice(a,1):n[t].orderId==e.lists[a].orderId&&(e.lists[a].type=n[t].type)}},acttions:{},getters:{},modules:{}}),j={namespaced:!0,state:{lists:[],num:0},mutations:{add:function(e,n){var t=e.lists.findIndex((function(e){return e.id==n.id}));"-1"!=t?(e.lists[t].num+=1,e.num=e.lists[t].num):(n.isSelect=!0,e.lists.push(n),e.num=1)}},acttions:{},getters:{},modules:{}},C={isLoading:!1,isValid:!1,user:{value:"",errorMessage:""},passw1:{value:"",type:"password",icon:"closed-eye",errorMessage:""},passw2:{value:"",type:"password",icon:"closed-eye",errorMessage:""}},I={changeEye:function(e,n){var t="password"===e[n].type;e[n].type=t?"text":"password",e[n].icon=t?"eye-o":"closed-eye"},register:function(e,n){e.isLoading=n},validUsername:function(e,n){e.user.errorMessage=n?"":"用户名支持4-8个(字母数字_)组合，必须字母开头"},validPwd:function(e,n){e.passw1.errorMessage=n?"":"密码支持6-16个(字母数字_)组合，必须含有大小写字母"},validPa:function(e,n){e[n.key].errorMessage=n.isValid?"":n.errorMessage},validEqual:function(e,n){e.passw2.errorMessage=n?"":"两次密码不一致"},passForm:function(e){e.isValid=""==e.user.errorMessage&&""!=e.user.value&&""==e.passw1.errorMessage&&""!=e.passw1.value&&""==e.passw2.errorMessage&&""!=e.passw2.value&&e.passw1.value==e.passw2.value}},L={namespaced:!0,state:C,mutations:I},S={user:{value:"",errorMessage:""},passw1:{type:"password",value:"",icon:"closed-eye",errorMessage:""},isLoading:!1,isValid:!1},T={login:function(e,n){e.isLoading=n},validPa:function(e,n){e[n.key].errorMessage=n.isValid?"":n.errorMessage},changeEye:function(e,n){var t="password"===e[n].type;e[n].type=t?"text":"password",e[n].icon=t?"eye-o":"closed-eye"},passForm:function(e){e.isValid=""==e.user.errorMessage&&""!=e.user.value&&""==e.passw1.errorMessage&&""!=e.passw1.value}},D={namespaced:!0,state:S,mutations:T},A={userInfo:{loginText:"登录",username:"登录"}},N={changeUserInfo:function(e,n){e.userInfo.loginText=n.loginText,e.userInfo.username=n.username}},V={namespaced:!0,state:A,mutations:N},F={likeActive:!1},$={changelikeActive:function(e,n){e.likeActive=n}},q={namespaced:!0,state:F,mutations:$},B={currentCollectionData:[]},H={getCurrentCollectionData:function(e,n){e.currentCollectionData=n},delLikeGoods:function(e,n){e.currentCollectionData.splice(n,1)}},U={deleteLikeMovie:function(e,n){e.commit("deleteLikeMovie",n)}},G={namespaced:!0,state:B,mutations:H,actions:U};a["a"].use(_["b"]);var J=new _["b"].Store({state:{vanTabbar:!0},mutations:{},actions:{},modules:{address:E,orderlist:O,cart:j,registerModule:L,loginModule:D,mineModule:V,collectionModule:q,likeModule:G}}),z=t("fa09"),K=(t("fe24"),t("eaa7")),Q=t.n(K);t("9f84"),t("e635");a["a"].config.productionTip=!1,a["a"].use(z["a"]),a["a"].use(Q.a),new a["a"]({router:x,store:J,render:function(e){return e(i)}}).$mount("#app")},"7c55":function(e,n,t){"use strict";var a=t("4e66"),c=t.n(a);c.a}});
//# sourceMappingURL=app.907b1544.js.map