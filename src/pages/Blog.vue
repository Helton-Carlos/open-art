<script setup lang="ts">
import { useRoute } from "vue-router";
import CardBlog from "@/components/CardBlog/CardBlog.vue";
import Title from "@/components/Title/Title.vue";
import { cards } from "@/utils/utils-card";

const route = useRoute();
const card = cards();

const title = route.meta.title;
const subTitle = route.meta.subTitle;
</script>

<template>
  <div class="containner my-4 text-center">
    <Title :title="title" :subTitle="subTitle" />

    <div class="flex flex-wrap gap-2">
      <CardBlog
        v-for="cards in card"
        :key="cards.id"
        :title="cards.title"
        :persona="cards.persona"
        :imageMain="cards.imageMain"
        :imagePersona="cards.imagePersona"
      />
    </div>
  </div>
</template>
