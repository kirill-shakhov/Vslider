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
    </div>
  </div>

  <div style="position: fixed; top: 0; left: 0">
    <div>dist: {{ dataDraggableSlider.dist }}</div>
    {{ screen }}
    <div>
      maxDist: {{ dataDraggableSlider.maxDist }}
    </div>
    dataDraggableSlider: {{ dataDraggableSlider.isGrabbing }}
  </div>
</template>

<script setup lang="ts">

import { VDraggableSliderComposables } from "./vDraggableSlider.composables.ts";

const {
  dataDraggableSlider,
  startDraggable,
  moveDraggable,
  endDraggable,
} = VDraggableSliderComposables();

let screen = window.innerWidth;
</script>

<style lang="scss">
  @import "VDraggableSlider";
</style>