<template>
  <div class="v-slide">
    <slot></slot>
  </div>
</template>


<script setup lang="ts">
</script>

<style>
.v-slide {
  border: 1px solid black;
  font-size: 40px;
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  font-weight: bold;

  @media (min-width: 600px) {
    font-size: 80px;
  }

  @media (min-width: 900px) {
    font-size: 140px;
  }

}
</style>
