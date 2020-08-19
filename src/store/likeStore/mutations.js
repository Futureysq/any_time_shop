export const mutations = {

  //获取我的收藏商品
  getCurrentCollectionData(state, data) {
    
    state.currentCollectionData = data;
  },

  //删除我的收藏商品
  delLikeGoods(state, index) {
    state.currentCollectionData.splice(index, 1);
  }

};