<template>
  <VsxIcon :iconName="iconName" :color="color" :size="size" type="linear" />
</template>

<script setup>
import { VsxIcon } from "vue-iconsax";

defineProps({
  iconName: String,
  color: String,
  size: Number,
});
</script>

<style></style>
