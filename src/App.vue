<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {};
  },
  components: {}
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
}
a {
  text-decoration: none;
  color: #333;
}
</style>
