<template>
  <div class="home">
    <div class="head_locat">
      <div class="location_box">
        <div class="location" @click="siteAction()">
          <img src="../assets/img/locat.png" class="place" alt="" />
          <span class="content">武汉市</span>
          <img src="../assets/img/sanjiaoxing.png" class="triangle" alt="" />
        </div>
      </div>
    </div>
    <div class="head_seek">
      <router-link to="" class="seek_but">
        <img src="../assets/img/seek.png" alt="" />
        <span class="placeholder">{{ hint }}</span>
      </router-link>
    </div>
    <menus></menus>
    <advertising></advertising>
    <recommend></recommend>
  </div>
</template>

<script>
import menus from "../components/home/menus";
import advertising from "../components/home/advertising";
import recommend from "../components/home/recommend";

export default {
  name: "home",
  data() {
    return {
      hint: "搜索饿了么商家、商品名称"
    };
  },
  // 方法
  methods: {
    siteAction: function() {}
  },
  // 计算属性
  computed: {},
  // 观察者
  watch: {},
  // 过滤器
  filter: {},
  // 注册组件
  components: {
    menus,
    advertising,
    recommend
  },
  // 生命周期 被创建后
  created() {}
};
</script>

<style scoped lang="scss">
.home {
  width: 100%;
  /*display: inline;*/
  /*display: flex;*/
  /*flex-direction: column;*/
  /*align-content: flex-start;*/
  .head_locat {
    padding: 20px 28px 0 28px;
    background: linear-gradient(90deg, #0af, #0085ff);
    .location_box {
      width: 100%;
      display: flex;
      .location {
        width: 60%;
        height: 70px;
        display: flex;
        cursor: pointer;
        .place {
          width: 26px;
          height: 31px;
          margin: 10px 10px 0 0;
        }
        .triangle {
          width: 15px;
          height: 15px;
          margin: 15px 0 0 10px;
        }
        .content {
          max-width: 80%;
          line-height: 1.2;
          color: #fff;
          font-size: 34px;
          font-weight: 700;
          font-family: "Helvetica Neue", Tahoma, Arial, PingFangSC-Regular,
            "Hiragino Sans GB", "Microsoft Yahei", sans-serif;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }
    }
  }
  .head_seek {
    padding: 15px 28px;
    position: -webkit-sticky;
    position: sticky;
    z-index: 999;
    top: 0;
    display: flex;
    background: linear-gradient(90deg, #0af, #0085ff);
    .seek_but {
      width: 100%;
      height: 70px;
      color: #999;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 26px;
      font-family: simsun;
      background: #fff;
      img {
        width: 32px;
        height: 32px;
        margin-right: 10px;
      }
    }
  }
}
</style>
