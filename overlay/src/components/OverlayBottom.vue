<template>
  <div class="overlay">
    <div v-show="cameraPosition == 'left'" class="camera">
      <img src="../assets/SVG/camera.svg" alt="" />
      <p>BUSCANDO CÂMERA.</p>
    </div>
    <div class="items">
      <div v-for="item in data" :key="item.id" class="item">
        <div class="icon">
          <img src="../assets/SVG/picpay.svg" alt="" />
        </div>
        <p>
          <span class="text"> {{ item.text }}</span>
          <span class="vale"> {{ item.value }}</span>
        </p>
      </div>
    </div>
    <div v-show="cameraPosition == 'right'" class="camera">
      <img src="../assets/SVG/camera.svg" alt="" />
      <p>BUSCANDO CÂMERA.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "OverlayBottom",
  props: {
    msg: String,
    cameraPosition: String,
    data: Array,
  },
};
</script>

<style scoped lang="scss">
.overlay {
  height: 100vh;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  // background: blue;
  .camera {
    height: 212px;
    width: 376px;
    min-width: 376px;
    background: #0065c2;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: white;
    img {
      height: 40px;
      width: auto;
    }
  }
  .items {
    background: #0d47a0;
    color: white;
    flex: 1;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 5px;
    grid-template-areas: ". . . .";
    height: 111px;
    padding: 5px;
    .item {
      display: flex;
      align-items: center;
      height: 47px;
      background: #00b4f7;
      padding: 0px 5px;
      border-radius: 3px;
      .icon {
        padding-right: 5px;
        img {
          height: 35px;
          width: auto;
        }
      }
      p {
        font-size: 35px;
        width: 100%;
        text-align: center;
        white-space: nowrap;
      }
    }
  }
}
</style>
