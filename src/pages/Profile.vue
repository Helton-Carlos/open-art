<script setup lang="ts">
import { useRoute } from "vue-router";
import Title from "@/components/Title/Title.vue";

const route = useRoute();

const title = route.meta.title;
const subTitle = route.meta.subTitle;
</script>

<template>
  <div class="my-4 containner text-center">
    <Title :title="title" :subTitle="subTitle" />
  </div>
</template>
