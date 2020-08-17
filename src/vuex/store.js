import Vue from "vue";
import Vuex from "vuex";

// 挂载Vuex
Vue.use(Vuex);

// 创建Vuex对象
const store = new Vuex.Store({
  state: {
    // 存放的键值对就是所要管理的状态
    isLogin: false,
  },
  getters: {
    isLogin: (state) => state.isLogin,
  },
  mutations: {
    userStatus(state, flag) {
      state.isLogin = flag;
    },
  },
  actions: {
    setUser({ commit }, flag) {
      commit("userStatus", flag);
    },
  },
});

export default store;
