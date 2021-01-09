<template>
  <div class="">
    <OverlayBottom :data="dados" cameraPosition="right" msg="OverlayBottom" />
  </div>
</template>

<script>
import OverlayBottom from "@/components/OverlayBottom.vue";
import { db } from "../data";
export default {
  components: {
    OverlayBottom,
  },
  data() {
    return {
      temp_dados: [],
    };
  },
  computed: {
    dados: function () {
      let dados = this.temp_dados;
      if (this.temp_dados) {
        dados = dados.sort((a, b) =>
          `${a.text}${a.value}`.length > `${b.text}${b.value}`.length ? -1 : 1
        );
      }
      let listA = dados.filter(function (d, i) {
        if (!(i % 2) || i == 0) {
          return d;
        }
      });
      let listB = dados.filter(function (d, i) {
        if (i % 2 && i > 0) {
          return d;
        }
      });
      return [...listA, ...listB];
    },
  },
  firebase: {
    temp_dados: db.ref("infos"),
  },
};
</script>
