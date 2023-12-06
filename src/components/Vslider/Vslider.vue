<template>
  <div v-if="!props.draggable" class="v-slider">

    <div class="v-navigation">
      <button class="v-button" @click="prevSlide">prev</button>
      <button class="v-button" @click="nextSlide">next</button>
    </div>

    <div class="v-slider-wrapper">
      {{ props.draggable }}
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
import { provide, ref, useSlots } from 'vue';
import Vpagination from "../Vpagination/Vpagination.vue";
import VDraggableSlider from "../VDraggableSlider/VDraggableSlider.vue";
import VDraggableSlide from "../VDraggableSlide/VDraggableSlide.vue";

const {
  data,
  move,
} = VSliderComposables();
const slots = useSlots();

const props = defineProps({
  draggable: {
    type: Boolean,
    default: false,
  },
});

// console.log(slots.default());
// console.log(slots.default().length);

data.slidesCount = slots.default().length
provide('draggable', props.draggable);

const prevSlide = () => move(-1);
const nextSlide = () => move(1);
</script>

<style lang="scss">
@import "Vslider";
</style>
