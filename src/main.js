import Vue from "vue";

import ViserVue from "viser-vue";

import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";

import App from "./App";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";

Vue.config.productionTip = false;
Vue.use(ViserVue);
Vue.use(Antd);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
