<script setup lang="ts">
import { useRoute } from "vue-router";
import CardBlog from "@/components/CardBlog/CardBlog.vue";
import Title from "@/components/Title/Title.vue";
import cards from "@/utils/utils-card";

const route = useRoute();

const title = route.meta.title;
const subTitle = route.meta.subTitle;
</script>

<template>
  <div class="containner my-4 text-center">
    <Title :title="title" :subTitle="subTitle" />

    <div class="flex flex-wrap gap-2">
      <CardBlog
        v-for="card in cards"
        :key="card.id"
        :title="card.title"
        :persona="card.persona"
        :imageMain="card.imageMain"
        :imagePersona="card.imagePersona"
      />
    </div>
  </div>
</template>
