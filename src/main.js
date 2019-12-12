import Vue from "vue";
import ViserVue from "viser-vue";
import App from "./App";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";

Vue.config.productionTip = false;
Vue.use(ViserVue);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
