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
  routes: [
    {
      path: "/page",
      name: "page",
      redirect: "/page/home",
      component: pages.page,
      props: true,
      children: [
        {
          path: "home",
          name: "home",
          component: pages.home,
          props: true
        },
        {
          path: "find",
          name: "find",
          component: pages.find,
          props: true
        },
        {
          path: "order",
          name: "order",
          component: pages.order,
          props: true
        },
        {
          path: "my",
          name: "my",
          component: pages.my,
          props: true
        }
      ]
    }
  ]
});
