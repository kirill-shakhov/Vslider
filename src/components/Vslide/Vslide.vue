<template>
    <div v-show="props.id === data.currentIndex"  :key="props.id" :class="['v-slide',classObject]">
      <slot></slot>
    </div>
</template>


<script setup lang="ts">
import { useVslider } from "../Vslider/useVslider.ts";
import { computed } from "vue";

const { data } = useVslider();

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
