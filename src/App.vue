<template>
  <div id="app">
    <transition
      :name="cartoon"
      mode="out-in"
      :duration="{ enter: 500, leave: 0 }"
    >
      <router-view></router-view>
    </transition>
    <footer-tab v-if="show"></footer-tab>
  </div>
</template>

<script>
import footerTab from "./views/footerTab";

export default {
  name: "App",
  data() {
    return {
      cartoon: null,
      show: true
    };
  },
  methods: {},
  computed: {},
  watch: {
    $route(to, from) {
      console.log(to); // 当前路由
      console.log(from); // 离开的路由
      if (to.meta.name === "nav") {
        this.show = true;
        this.cartoon = to.meta.key < from.meta.key ? "test-left" : "test-right";
      } else {
        this.show = false;
      }
    }
  },
  filter: {},
  components: {
    footerTab
  },
  created() {},
  mounted() {}
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  user-select: none;
}
#app {
  width: 100%;
  height: 100vh;
  background: #fff;
  // 动画
  .test-left-enter {
    transform: translate(-100vw, 0);
  }
  .test-left-leave-to {
    transform: translate(100vw, 0);
  }
  .test-left-enter-active,
  .test-left-leave-active {
    transition: all ease-in 0.2s;
  }
  .test-left-enter-to {
    transform: translate(0, 0);
  }
  .test-left-leave {
    transform: translate(0, 0);
  }

  .test-right-enter {
    transform: translate(100vw, 0);
  }
  .test-right-leave-to {
    transform: translate(-100vw, 0);
  }
  .test-right-enter-active,
  .test-right-leave-active {
    transition: all ease-in 0.2s;
  }
  .test-right-enter-to {
    transform: translate(0, 0);
  }
  .test-right-leave {
    transform: translate(0, 0);
  }
}
a {
  text-decoration: none;
  color: #333;
}
</style>
