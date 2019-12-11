import * as actions from "./actions";
import * as getters from "./getters";
import * as mutations from "./mutations";

const state = {
  filters: [],
};

export default {
  state,
  getters,
  mutations,
  actions,
  namespaced: true,
};
