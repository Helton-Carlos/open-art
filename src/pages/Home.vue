<script setup lang="ts">
import { useRoute } from "vue-router";
import Title from "../components/Title/Title.vue";
import InputSearc from "../components/InputSearc/InputSearc.vue";
import Card from "../components/Card/Card.vue";

const route = useRoute();

const title = route.meta.title;
const subTitle = route.meta.subTitle;

const cards = [
  {
    title: "Silent Wave",
    persona: "Creator",
    imageMain: "src/assets/card/art01.png",
    imagePersona: "src/assets/card/person.png",
  },
  {
    title: "Silent Color",
    persona: "Creator102",
    imageMain: "src/assets/card/art02.png",
    imagePersona: "src/assets/card/person.png",
  },
  {
    title: "Pawel Czerwinski",
    persona: "Pawel Czerwinski",
    imageMain: "src/assets/card/art03.png",
    imagePersona: "src/assets/card/person.png",
  },
  {
    title: "Silent Wave",
    persona: "Creator",
    imageMain: "src/assets/card/art01.png",
    imagePersona: "src/assets/card/person.png",
  },
];
</script>

<template>
  <div class="w-11/12 my-4 mx-auto text-center">
    <Title :title="title" :subTitle="subTitle" />

    <InputSearc
      placeholder="Search items, collections, and accounts"
      type="text"
      modelValue="text"
    />

    <div class="sm:flex sm:justify-center sm:flex-wrap gap-6">
        <Card
          v-for="(card, index) in cards" :key="index"
          :title="card.title"
          :persona="card.persona"
          :imageMain="card.imageMain"
          :imagePersona="card.imagePersona"
        />
    </div>
  </div>
</template>
