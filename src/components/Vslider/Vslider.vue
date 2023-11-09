<template>
  <div class="v-slider">
    <div class="v-slider-wrapper">
      <transition-group
          name="slide"
          mode="out-in"
          enter-class="slide-in"
          leave-class="slide-out"
          enter-active-class="animated slide-in-active"
          leave-active-class="animated slide-out-active"
      >
        <slot :key="data.currentIndex">
          <!-- Используем currentIndex в качестве key для transition-group -->
        </slot>
      </transition-group>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useVslider } from "./useVslider.ts";

const { data } = useVslider();

</script>

<style lang="scss">
@import "Vslider";


</style>
