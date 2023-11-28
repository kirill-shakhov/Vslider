<template>
  <div class="v-slider">
    <div class="v-slider-wrapper">
      <transition-group name="slide-fade">
        <slot></slot>
      </transition-group>
    </div>

    <vpagination :slides="data.slidesCount" />
  </div>
</template>


<script setup lang="ts">
import { useVslider } from "./useVslider.ts";
import { useSlots } from 'vue';
import Vpagination from "../Vpagination/Vpagination.vue";

const { data } = useVslider();
const slots = useSlots();

// console.log(slots.default());
// console.log(slots.default().length);

data.slidesCount = slots.default().length;
</script>

<style lang="scss">
@import "Vslider";
</style>
