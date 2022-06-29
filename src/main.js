import Vue from "vue";
import App from "./App.vue";
import "./plugins/element.js";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import router from "./router.js";
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount("#app");
