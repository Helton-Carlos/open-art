<script setup lang="ts">
import { ITitle } from "./Title";

defineProps<ITitle>();
</script>

<template>
  <div class="my-8">
    <p class="text-gray-dark text-xl">{{ title }}</p>
    <p class="text-black font-black text-2xl">{{ subTitle }}</p>
  </div>
</template>
