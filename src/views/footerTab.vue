<template>
  <div class="footer">
    <div class="nav">
      <router-link
        :to="{ path: val.src, query: { id: val.id } }"
        v-for="(val, index) in navBut"
        :key="val.id"
        class="but"
        @click.native="setButState(val, index)"
      >
        <img :src="currKey === index ? val.yes : val.no" class="site" alt="" />
        <span :class="['text', { active: currKey === index }]">{{
          val.name
        }}</span>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "footerTab",
  data() {
    return {
      currKey: 0,
      test: null,
      navBut: [
        {
          id: 0,
          name: "首页",
          src: "/home",
          no: require("../assets/img/elm.png"),
          yes: require("../assets/img/elm1.png")
        },
        {
          id: 1,
          name: "发现",
          src: "/find",
          no: require("../assets/img/find.png"),
          yes: require("../assets/img/find1.png")
        },
        {
          id: 2,
          name: "订单",
          src: "/order",
          no: require("../assets/img/order.png"),
          yes: require("../assets/img/order1.png")
        },
        {
          id: 3,
          name: "我的",
          src: "/my",
          no: require("../assets/img/my.png"),
          yes: require("../assets/img/my1.png")
        }
      ]
    };
  },
  // 方法
  methods: {
    setButState: function(val, index) {
      this.currKey = index;
      console.log(index);
      if (index < 3) {
        console.log("right");
        this.test = "test-right";
      } else if (index > 0) {
        console.log("left");
        this.test = "test-left";
      }
    }
  },
  // 计算属性
  computed: {},
  // 观察者
  watch: {
    $route(to, from) {
      console.log(to); // 当前路由
      console.log(from); // 离开的路由
      this.test = to.meta.key < from.meta.key ? "test-left" : "test-right";
    }
  },
  // 过滤器
  filter: {},
  // 注册组件
  components: {},
  // 生命周期 被创建后
  created() {},
  mounted() {
    let key = this.$route.query.id;
    console.log(key);
    if (key) {
      this.currKey = Number(key);
    } else {
      this.currKey = 0;
    }
  }
};
</script>

<style scoped lang="scss">
.footer {
  width: 100%;
  .nav {
    width: 100%;
    height: 120px;
    padding: 9px 0 0 0;
    display: flex;
    justify-content: space-between;
    position: fixed;
    bottom: 0;
    left: 0;
    box-sizing: border-box;
    box-shadow: 0 -1px 1px rgba(0, 0, 0, 0.1);
    background: #fff;
    .but {
      flex: 1;
      display: flex;
      flex-direction: column;
      color: #8e8e93;
      .site {
        width: 40px;
        height: 40px;
        margin: 10px auto 0 auto;
      }
      .text {
        line-height: 30px;
        text-align: center;
        font-size: 16px;
      }
    }
  }
  // 选中色
  .active {
    color: #49a0e8;
  }
}
</style>
