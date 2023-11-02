<template>
  <vsxIcon
    :iconName="iconName"
    :color="color"
    :size="size"
    type="linear"
    :class="class"
  />
</template>

<script setup>
import { vsxIcon } from "vue-iconsax";

defineProps({
  iconName: String,
  color: String,
  size: Number,
  class: String,
});
</script>

<style></style>
