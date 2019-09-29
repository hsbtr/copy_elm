<template>
  <div class="page_warp">
    <div class="page" ref="page">
      <transition :name="test">
        <router-view></router-view>
      </transition>
    </div>
    <div class="nav">
      <router-link
        :to="val.src"
        v-for="(val, index) in navBut"
        :key="index"
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
import BScroll from "better-scroll";

export default {
  name: "navBut",
  data() {
    return {
      currKey: 0,
      test: null,
      navBut: [
        {
          name: "首页",
          src: "./home",
          no: require("../assets/img/elm.png"),
          yes: require("../assets/img/elm1.png")
        },
        {
          name: "发现",
          src: "./find",
          no: require("../assets/img/find.png"),
          yes: require("../assets/img/find1.png")
        },
        {
          name: "订单",
          src: "./order",
          no: require("../assets/img/order.png"),
          yes: require("../assets/img/order1.png")
        },
        {
          name: "我的",
          src: "./my",
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
  watch: {},
  // 过滤器
  filter: {},
  // 注册组件
  components: {},
  // 生命周期 被创建后
  created() {
    console.log(this.$router.path);
  },
  mounted() {
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.page, {
        scrollY: true,
        scrollX: false,
        click: true,
        tap: true,
        probeType: 2
      });
    });
  }
};
</script>

<style scoped lang="scss">
.page_warp {
  display: flex;
  flex-direction: column;
  .page {
    height: 85vh;
    overflow: auto;
    box-sizing: border-box;
  }
  .nav {
    width: 100%;
    height: 91px;
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
  // 动画 选中色
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
  .active {
    color: #49a0e8;
  }
}
</style>
