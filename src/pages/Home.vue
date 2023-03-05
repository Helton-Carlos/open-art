<script setup lang="ts">
import { useRoute } from "vue-router";

const route = useRoute();

const title = route.meta.title;
const subTitle = route.meta.subTitle;
</script>

<template>
  <div class="w-11/12 my-4 text-center">
    <div>
      <p class="text-gray-dark text-xl">{{ title }}</p>
      <p class="text-black font-black text-2xl">{{ subTitle }}</p>
    </div>
  </div>
</template>
