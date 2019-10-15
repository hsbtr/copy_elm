<template>
  <div id="app">
    <transition :name="cartoon">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      cartoon: null
    };
  },
  methods: {},
  computed: {},
  watch: {},
  filter: {},
  components: {},
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
    transition: all ease-in 0.3s;
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
    transition: all ease-in 0.3s;
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
