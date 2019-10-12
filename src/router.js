import Vue from "vue";
import Router from "vue-router";
const components = require.context("./views", true, /\.vue$/);
const pages = {};

Vue.use(Router);
components
  .keys()
  .map(value => components(value))
  .filter(value => value.default)
  .forEach(value => {
    pages[value.default.name] = value.default;
  });

console.log(pages);
export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/page",
      name: "page",
      redirect: "/page/home",
      component: pages.page,
      children: [
        {
          path: "home",
          component: pages.home
        },
        {
          path: "find",
          component: pages.find
        },
        {
          path: "order",
          component: pages.order
        },
        {
          path: "my",
          component: pages.my
        }
      ]
    }
  ]
});
