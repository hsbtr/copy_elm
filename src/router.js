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
      path: "/",
      name: "nav",
      redirect: "/page"
    },
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
          meta: {
            name: "nav",
            key: 0
          },
          component: pages.home,
          props: true
        },
        {
          path: "find",
          name: "find",
          meta: {
            name: "nav",
            key: 1
          },
          component: pages.find,
          props: true
        },
        {
          path: "order",
          name: "order",
          meta: {
            name: "nav",
            key: 2
          },
          component: pages.order,
          props: true
        },
        {
          path: "my",
          name: "my",
          meta: {
            name: "nav",
            key: 3
          },
          component: pages.my,
          props: true
        }
      ]
    }
  ]
});
