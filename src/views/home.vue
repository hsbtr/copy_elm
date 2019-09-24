<template>
  <div class="home">
    <div class="head">
      <div class="location_box">
        <div class="location">
          <img src="../assets/img/locat.png" alt="" />
          <span></span>
          <img src="../assets/img/sanjiaoxing.png" alt="" />
        </div>
      </div>
    </div>
    <div></div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {};
  }
};
</script>

<style scoped lang="scss">
.home {
  width: 100%;
  display: flex;
  flex-direction: column;
  .head {
    padding: 33.12px 46.368px 0 46.368px;
    background: linear-gradient(90deg, #0af, #0085ff);
    .location_box {
      width: 100%;
      display: flex;
      .location {
        width: 60%;
        height: 70px;
        display: flex;
        align-items: center;
        img {
          width: 40px;
          height: 40px;
        }
      }
    }
  }
}
</style>
