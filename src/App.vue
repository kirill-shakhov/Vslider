<template>
  <div style="height: 95%">
    <div class="v-navigation">
      <button class="v-button" @click="prevSlide">prev</button>
      <button class="v-button" @click="nextSlide">next</button>
    </div>

    <vslider :navigation="true">
      <vslide :id="0" class="v-slide">
        <h1>text</h1>
        <p>dsdsd</p>
      </vslide>
      <vslide :id="1" class="v-slide">2</vslide>
      <vslide :id="2" class="v-slide">3</vslide>
      <vslide :id="3" class="v-slide">4</vslide>
    </vslider>
  </div>
</template>

<script setup lang= "ts">
import Vslider from "./components/Vslider/Vslider.vue";
import Vslide from "./components/Vslide/Vslide.vue";
import { useVslider } from "./components/Vslider/useVslider.ts";

const { data, move } = useVslider();

interface Props {
  navigation: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  navigation: false
});

const prevSlide = () => move(-1);
const nextSlide = () => move(1);

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
