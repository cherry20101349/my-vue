import Vue from "vue";
import App from "./App.vue";
import axios from "axios"; //axios
import VueAxios from "vue-axios"; //axios
import router from "./router"; //路由
import store from "./vuex/store";
Vue.use(VueAxios, axios);

Vue.config.productionTip = false;

// 添加请求拦截器
axios.interceptors.request.use(
  function(config) {
    console.dir("是的");
    console.dir(config);
    // 在发送请求之前做些什么
    return config;
  },
  function(error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 添加响应拦截器
axios.interceptors.response.use(
  function(response) {
    // 对响应数据做点什么
    return response;
  },
  function(error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  }
);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
