<template>
  <div
      class="v-slider_draggable"
      @mousedown.prevent="startDraggable"
      @mousemove.prevent="moveDraggable"
      @mouseup.prevent="endDraggable"
      @touchstart.passive="startDraggable"
      @touchmove.passive="moveDraggable"
      @touchend.prevent="endDraggable"
  >
    {{ dataDraggableSlider.status }}
    <div
        class="v-slider-wrapper_draggable"
        :class="{ active: dataDraggableSlider.status === 'Dragging' }"
        :style="{ transform: `translateX(${dataDraggableSlider.dist}px)` }
      ">
      <slot></slot>

      <template v-if="duplicatedContent">
        <component :is="duplicatedContent"></component>
      </template>
    </div>
  </div>

  <div style="position: fixed; top: 0; left: 0">
    <div>dist: {{ dataDraggableSlider.dist }}</div>
    <div>
      maxDist: {{ dataDraggableSlider.maxDist }}

    </div>
  </div>
</template>

<script setup lang="ts">

import { VDraggableSliderComposables } from "./vDraggableSlider.composables.ts";
import { h, onMounted, Ref, ref, useSlots } from 'vue';

const {
  dataDraggableSlider,
  startDraggable,
  moveDraggable,
  endDraggable,
} = VDraggableSliderComposables();

const slots = useSlots();
const duplicatedContent: Ref<null | (() => any[])> = ref(null);


onMounted(() => {
  if (slots.default) {
    const slotContents = slots.default();
    duplicatedContent.value = () => slotContents.map(node => h(node));
  }
});
</script>

<style lang="scss">
@import "VDraggableSlider";
</style>