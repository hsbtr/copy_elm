import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import bus from "./event";
import swiper from "vue-awesome-swiper";
import "./registerServiceWorker";
import "swiper/dist/css/swiper.css";

Vue.use(bus);
Vue.use(swiper);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
