<script setup lang="ts">
import { useRoute } from "vue-router";
import Title from "../components/Title/Title.vue";
import InputSearc from "../components/InputSearc/InputSearc.vue";
import Card from "../components/Card/Card.vue";

const route = useRoute();

const title = route.meta.title;
const subTitle = route.meta.subTitle;
</script>

<template>
  <div class="w-11/12 my-4 mx-auto text-center">
    <Title :title="title" :subTitle="subTitle" />

    <InputSearc
      placeholder="Search items, collections, and accounts"
      type="text"
      modelValue="text"
    />

    <Card />
  </div>
</template>
