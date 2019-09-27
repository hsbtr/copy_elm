<template>
  <div class="advertising">
    <router-link to="" class="wrap">
      <div class="text_area">
        <span class="title">{{ declare.title }}</span>
        <span class="subhead">{{ declare.subhead }}</span>
        <span class="go">{{ declare.go }}></span>
      </div>
      <div class="refer">
        <img src="../../assets/img/df43e.png" alt="" />
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "advertising",
  data() {
    return {
      declare: {
        title: "品质套餐",
        subhead: "搭配齐全吃得好",
        go: "立即抢购"
      }
    };
  }
};
</script>

<style scoped lang="scss">
.advertising {
  padding: 0 20px;
  margin-bottom: 16px;
  display: flex;
  .wrap {
    width: 100%;
    height: 220px;
    overflow: hidden;
    display: flex;
    padding: 24px 0 0 30px;
    background: linear-gradient(0deg, #f4f4f4 5%, #fafafa 95%);
    box-sizing: border-box;
    .text_area {
      width: 50%;
      display: flex;
      flex-direction: column;
      .title {
        font-size: 32px;
        font-weight: 700;
        color: #333;
        margin-bottom: 10px;
      }
      .subhead {
        font-size: 26px;
        color: #777;
        margin-bottom: 18px;
      }
      .go {
        font-size: 24px;
        color: #af8260;
        font-weight: 700;
      }
    }
    .refer {
      width: 50%;
      box-sizing: border-box;
      img {
        width: 279px;
        height: 188px;
      }
    }
  }
}
</style>
