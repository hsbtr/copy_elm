<template>
  <div class="menus">
    <swiper :options="swiperOption" ref="wiper">
      <swiper-slide v-for="(val, index) in menus" :key="index">
        <router-link
          to=""
          class="menus_but"
          v-for="(value, key) in val.id"
          :key="key"
        >
          <img :src="value.icon" alt="" />
          <span class="text">{{ value.name }}</span>
        </router-link>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "menus",
  data() {
    return {
      wiper: "",
      menus: [
        {
          id: [
            {
              name: "美食",
              icon: require("../../assets/img/a867c870b22bc74c87c348b75528djpeg.jpeg")
            },
            {
              name: "大牌蕙吃",
              icon: require("../../assets/img/b02bd836411c016935d258b300cfejpeg.jpeg")
            },
            {
              name: "商超便利",
              icon: require("../../assets/img/76a23eb90dada42528bc41499d6f8jpeg.jpeg")
            },
            {
              name: "水果",
              icon: require("../../assets/img/dd7c960f08cdc756b1d3ad54978fdjpeg.jpeg")
            },
            {
              name: "医药健康",
              icon: require("../../assets/img/af108e256ebc9f02db599592ae655jpeg.jpeg")
            },
            {
              name: "浪漫鲜花",
              icon: require("../../assets/img/b02bd836411c016935d258b300cfejpeg.jpeg")
            },
            {
              name: "跑腿代购",
              icon: require("../../assets/img/c888acb2c8ba9e0c813f36ec9e90ajpeg.jpeg")
            },
            {
              name: "汉堡披萨",
              icon: require("../../assets/img/bceb19258e3264e64fb856722c3c1jpeg.jpeg")
            },
            {
              name: "厨房生鲜",
              icon: require("../../assets/img/432619fb21a40b05cd25d11eca02djpeg.jpeg")
            },
            {
              name: "甜品饮品",
              icon: require("../../assets/img/e42997b86b232161a5a16ab813ae8jpeg.jpeg")
            }
          ]
        },
        {
          id: [
            {
              name: "素食简餐",
              icon: require("../../assets/img/314b6da88ab6c7ae9828f91652d40jpeg.jpeg")
            },
            {
              name: "地方小吃",
              icon: require("../../assets/img/6f2631288a44ec177204e05cbcb93jpeg.jpeg")
            },
            {
              name: "大牌惠吃",
              icon: require("../../assets/img/b02bd836411c016935d258b300cfejpeg.jpeg")
            },
            {
              name: "素食简餐",
              icon: require("../../assets/img/7bddb07503aea4b711236348e2632jpeg.jpeg")
            }
          ]
        }
      ],
      swiperOption: {
        // 分页器
        pagination: {
          el: ".swiper-pagination",
          type: "bullets",
          bulletClass: "my-bullet",
          bulletActiveClass: "my-bullet-active"
        }
      }
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
  components: {},
  // 生命周期 被创建后
  created() {},
  mounted() {}
};
</script>

<style lang="scss">
.menus {
  width: 100%;
  height: 354px;
  box-sizing: border-box;
  overflow: hidden;
  .swiper-container {
    height: 100%;
    position: relative;
    .swiper-wrapper {
      width: 100%;
      .swiper-slide {
        display: flex;
        flex-wrap: wrap;
        align-content: flex-start;
        .menus_but {
          width: 20%;
          margin-top: 22px;
          display: flex;
          flex-direction: column;
          /*border: solid red 1px;*/
          box-sizing: border-box;
          img {
            width: 90px;
            height: 90px;
            margin: 0 auto;
          }
          .text {
            text-align: center;
            margin-top: 10px;
            color: #666;
            font-size: 16px;
          }
        }
      }
    }
    .swiper-pagination {
      display: flex;
      justify-content: center;
      align-content: center;
      .my-bullet {
        width: 18px;
        height: 3px;
        opacity: 0.2;
        margin: 0 3px;
        background: #000;
      }
      .my-bullet-active {
        background: #fe7100;
      }
    }
  }
}
</style>
