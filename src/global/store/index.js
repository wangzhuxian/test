export default {
  namespaced: true,
  state: {
    head: {
      toggle: false,
      title: '',
      style: {'background': 'rgba(43,162,251,0)'}
    },
    detailPlayerFlag: false,
  },
  actions: {
  },
  mutations: {
    handleDetailPlayerFlag(state, payload) {
      console.log(payload)
      state.detailPlayerFlag = payload.flag;
      console.log(state.detailPlayerFlag)
    }
  },
  getters: {
    detailPlayerFlag(state){
      return state.detailPlayerFlag;
    }
  }
};

