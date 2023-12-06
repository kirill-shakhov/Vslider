<template>
    <div v-if="!draggable" v-show="props.id === data.currentIndex"  :key="props.id" :class="['v-slide',classObject]">
      <slot></slot>
    </div>

  <div v-else class="v-slide_draggable">
    <slot></slot>
  </div>
</template>


<script setup lang="ts">
import { VSliderComposables } from "../Vslider/vSlider.composables.ts";
import { computed, inject } from "vue";

const { data } = VSliderComposables();

let draggable = inject('draggable')

const props = defineProps({
  id: {
    type: Number,
    default: 0,
  },
});

const classObject = computed(() => ({
  active: props.id === data.currentIndex,
}))

</script>

<style>
@import "Vslide.scss";

</style>
