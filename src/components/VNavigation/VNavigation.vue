<template>
  <div class="v-navigation">
    <button class="v-button" @click="prevSlide">prev</button>
    <button class="v-button" @click="nextSlide">next</button>
  </div>
</template>

<script setup lang="ts">

import { VSliderComposables } from "../Vslider/vSlider.composables.ts";

const {
  move,
} = VSliderComposables();

const prevSlide = () => move(-1);
const nextSlide = () => move(1);
</script>

<style lang="sass">

</style>