<script setup lang="ts">
import { useRoute } from "vue-router";
import Title from "@/components/Title/Title.vue";

const route = useRoute();

const title = route.meta.title;
const subTitle = route.meta.subTitle;
</script>

<template>
  <div class="containner my-4 text-center">
    <Title :title="title" :subTitle="subTitle" />

    <p class="text-xl my-10 font-bold underline">
      The openArt is an application for those who want to sell and buy works of
      art, made by people who enjoy design and fashion. It has the participation
      of 1,200 artists who post their work on the platform with the aim of
      selling or buying it.
    </p>

    <div
      class="flex flex-col items-center gap-8 my-4 containner md:flex-row"
    >
      <p
        class="bg-blue text-white font-bold text-2xl p-4 rounded-xl md:w-full lg:text-3xl"
      >
        "Share your artwork with us!"
      </p>
      <hr
        class="w-48 h-1 mx-auto my-4 bg-gray-dark border-0 rounded md:my-10 dark:bg-gray-700 md:hidden"
      />
      <p
        class="bg-purple text-white font-bold text-2xl p-4 rounded-xl md:w-full lg:text-3xl"
      >
        "Make money with art!"
      </p>
    </div>

    <p class="text-xl my-10 font-bold underline">
      The application has free registration and has only a few rules for sale,
      to generate security and comfort to the customer.
    </p>
  </div>
</template>
