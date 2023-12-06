<template>
 <div class="v-pagination">
   <div v-for="(dots, index) in props.slides" class="v-pagination__dot" :class="{ active: index === data.currentIndex }" @click="moveToSLide(index)" ></div>
 </div>
</template>

<script setup lang="ts">

import { VSliderComposables } from "../Vslider/vSlider.composables.ts";

const { data, moveToSLide } = VSliderComposables();
interface Props {
  slides: number
}

const props = withDefaults(defineProps<Props>(), {
  slides: 0
});

</script>

<style lang="scss">

.v-pagination {
  display: flex;
  justify-content: center;
  gap: 5px;
}

.v-pagination__dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: gray;
}

.v-pagination__dot.active {
  background: blue;
}
</style>
