import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import address from "./address";
import orderlist from "./orderlist";
import cart from "./cart";
import {registerModule} from './registerStore/registerModule';
import {loginModule} from './loginStore/loginModule';
import {mineModule} from './mineStore/mineModule';
import {collectionModule} from './collectionStore/collectionModule';
import {likeModule} from './likeStore/likeModule';
export default new Vuex.Store({
  state: {
    vanTabbar:true, 
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    address,
    orderlist,
    cart,
    registerModule,
    loginModule,
    mineModule,
    collectionModule,
    likeModule
  }
})
