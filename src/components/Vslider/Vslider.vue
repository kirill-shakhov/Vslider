<template>
  <div v-if="!props.draggable" class="v-slider">

    <v-navigation />

    <div class="v-slider-wrapper">
      <transition-group name="slide-fade">
        <slot></slot>
      </transition-group>
    </div>

    <vpagination v-if="!props.draggable" :slides="data.slidesCount"/>
  </div>

  <v-draggable-slider v-if="props.draggable">
    <v-draggable-slide>
      <slot></slot>
    </v-draggable-slide>
  </v-draggable-slider>
</template>


<script setup lang="ts">
import { VSliderComposables } from "./vSlider.composables.ts";
import {  provide, useSlots } from 'vue';
import Vpagination from "../Vpagination/Vpagination.vue";
import VDraggableSlider from "../VDraggableSlider/VDraggableSlider.vue";
import VDraggableSlide from "../VDraggableSlide/VDraggableSlide.vue";
import VNavigation from "../VNavigation/VNavigation.vue";

const {
  data,
  move,
} = VSliderComposables();
const slots = useSlots();


// отрефакторить

const props = defineProps({
  draggable: {
    type: Boolean,
    default: false,
  },
});

data.slidesCount = slots.default().length
provide('draggable', props.draggable);


</script>

<style lang="scss">
@import "Vslider";
</style>
