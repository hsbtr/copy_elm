import Vue from "vue";

const bus = new Vue();

export default {
  install(vue) {
    vue.prototype.$bus = bus;
  }
};
