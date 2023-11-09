<template>
  <div style="height: 80%">
    <vslider :navigation="true">
      <vslide v-show="data.activeSlide === 0" class="v-slide">
        <h1>text</h1>
        <p>dsdsd</p>
      </vslide>
      <vslide v-show="data.activeSlide === 1" class="v-slide" >2</vslide>
      <vslide v-show="data.activeSlide === 2" class="v-slide">3</vslide>
    </vslider>

    <div>
      <button class="v-button" @click="prevSlide">prev</button>
      <button class="v-button" @click="nextSlide">next</button>
    </div>
  </div>
</template>

<script setup lang="ts">
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

<style >
</style>
