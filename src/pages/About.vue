<script setup lang="ts">
import { useRoute } from "vue-router";
import Title from "@/components/Title/Title.vue";

const route = useRoute();

const title = route.meta.title;
const subTitle = route.meta.subTitle;
</script>

<template>
  <div class="w-11/12 my-4 mx-auto text-center">
    <Title :title="title" :subTitle="subTitle" />

    <p class="text-xl my-10 font-bold underline">
      The openArt is an application for those who want to sell and buy works of
      art, made by people who enjoy design and fashion. It has the participation
      of 1,200 artists who post their work on the platform with the aim of
      selling or buying it.
    </p>

    <div class="flex flex-col items-center gap-8 w-5/6 my- mx-auto md:flex-row">
      <p class="font-bold text-2xl md:w-[450px]">
        "We give some recommendations on how to price work."
      </p>
      <hr
        class="w-48 h-1 mx-auto my-4 bg-gray-dark border-0 rounded md:my-10 dark:bg-gray-700 md:hidden"
      />
      <p class="font-bold text-2xl md:w-[450px]">
        "We're not playing at being curators. We're saying that everyone can
        participate, creating a community that everyone can contribute to."
      </p>
    </div>

    <p class="text-xl my-10 font-bold underline">
      The application has free registration and has only a few rules for sale,
      to generate security and comfort to the customer.
    </p>
  </div>
</template>
