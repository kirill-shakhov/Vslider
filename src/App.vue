<template>
  <div style="height: 95%; display: flex; align-items: center">
    <vslider
        :draggable="true"
    >
      <vslide :id="0">1</vslide>
      <vslide :id="1">2</vslide>
      <vslide :id="2">3</vslide>
      <vslide :id="3">4</vslide>
      <vslide :id="4">5</vslide>
      <vslide :id="5">6</vslide>
      <vslide :id="6">7</vslide>
    </vslider>
  </div>
</template>

<script setup lang="ts">
import Vslider from "./components/Vslider/Vslider.vue";
import Vslide from "./components/Vslide/Vslide.vue";
import { VSliderComposables } from "./components/Vslider/vSlider.composables.ts";

interface Props {
  navigation: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  navigation: false
});

</script>

<style lang="scss">

// перенести в отдельный компонент начало

.v-navigation {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  position: absolute;
  top: 50%;
  left: 0;
  z-index: 1;
  width: 100%;
}

// перенести в отдельный компонент конец
</style>
