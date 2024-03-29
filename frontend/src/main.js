import Vue from "vue";
import App from "./App.vue";
import './theme/index.css'
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
// import axios from "axios";
// import VueAxios from "vue-axios";
import router from "./router";
import "./styles/element-ui-reset.css";
Vue.config.productionTip = false;
Vue.use(ElementUI);
// Vue.prototype.axios = axios;
// Vue.use(VueAxios, axios);

new Vue({
  render: (h) => h(App),
  router,
  // template: "<App/>",
  // components: { App },
}).$mount("#app");
