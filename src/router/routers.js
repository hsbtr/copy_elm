import pages from "./autoLoad";

export default [
  {
    path: "/",
    name: "app",
    redirect: "/home"
  },
  {
    path: "/home",
    name: "home",
    meta: {
      name: "nav",
      key: 0
    },
    component: pages.home,
    props: true
  },
  {
    path: "/find",
    name: "find",
    meta: {
      name: "nav",
      key: 1
    },
    component: pages.find,
    props: true
  },
  {
    path: "/order",
    name: "order",
    meta: {
      name: "nav",
      key: 2
    },
    component: pages.order,
    props: true
  },
  {
    path: "/my",
    name: "my",
    meta: {
      name: "nav",
      key: 3
    },
    component: pages.my,
    props: true
  }
];
