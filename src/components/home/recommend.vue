<template>
  <div class="recommend">
    <div class="list_title">推荐商家</div>
    <div class="list_wrap">
      <div class="list_nav">
        <button
          v-for="(val, index) in nav"
          :key="index"
          :class="[
            'model',
            { gle: index === 0, screen: index === 3 },
            { action: butKey === index }
          ]"
          @click="butAction(index)"
        >
          <span class="text">{{ val.name }}</span>
          <img
            :src="butKey === index ? val.src1 : val.src"
            v-if="val.src && val.src1"
            alt=""
            :class="[index === 0 ? 'icon' : '', index === 3 ? 'icon1' : '']"
          />
        </button>
      </div>
      <div class="holdup">
        <img
          src="../../assets/img/70008646170d1f654e926a2aaa3afpng.png"
          alt=""
        />
        <span class="title"></span>
        <span class="explain"></span>
        <button></button>
      </div>
      <div class="list_main">
        <div class=""></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "recommend",
  data() {
    return {
      butKey: 0,
      nav: [
        {
          name: "综合排序",
          src: require("../../assets/img/san.png"),
          src1: require("../../assets/img/blacksanjiao.png")
        },
        { name: "距离最近", src: "", src1: "" },
        { name: "品质联盟", src: "", src1: "" },
        {
          name: "筛选",
          src: require("../../assets/img/screek1.png"),
          src1: require("../../assets/img/screek.png")
        }
      ]
    };
  },
  // 方法
  methods: {
    butAction: function(index) {
      this.butKey = index;
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
  created() {},
  mounted() {}
};
</script>

<style scoped lang="scss">
.recommend {
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  .list_title {
    height: 72px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #000;
    font-size: 29px;
  }
  .list_title:before {
    content: "";
    width: 40px;
    height: 2px;
    display: block;
    background: #999;
    margin-right: 25.5px;
  }
  .list_title:after {
    content: "";
    width: 40px;
    height: 2px;
    display: block;
    background: #999;
    margin-left: 25.5px;
  }
  .list_wrap {
    overflow: hidden;
    background: #fff;
    .list_nav {
      display: flex;
      justify-content: space-between;
      .model {
        flex: 1;
        height: 78px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #fff;
        border: none;
        outline: none;
        color: #666;
        font-size: 24px;
        box-sizing: border-box;
        .text {
        }
        .icon {
          width: 12px;
          height: 6px;
          margin-left: 10px;
        }
        .icon1 {
          width: 26px;
          height: 26px;
          margin-left: 4px;
        }
      }
    }
    .holdup {
      display: flex;
      flex-direction: column;
      align-content: flex-start;
      align-items: center;
      justify-content: center;
      img {
        width: 400px;
      }
    }
    .list_main {
    }
  }
  .action {
    color: #333 !important;
    font-weight: 700;
  }
}
</style>
