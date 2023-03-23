<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
import { ref, computed } from "vue";
import Title from "@/components/Title/Title.vue";
import InputSearc from "@/components/InputSearc/InputSearc.vue";
import Card from "@/components/Card/Card.vue";
import cards from "@/utils/utils-card";

const route = useRoute();
const router = useRouter();

const title = route.meta.title;
const subTitle = route.meta.subTitle;
const text = ref<string>("");

function search() {
  let title = cards.map((item) => item.title);

  return title.filter((item) =>
    item.toLowerCase().includes(text.value.toLowerCase())
  );
}

function selectCard(id: number) {
  router.push({ name: "buy", params: { id } });
}

const getCard = computed<any>(() => {
  return search().map((searchs: any) => {
    return cards.find((name: any) => name.title === searchs);
  });
});
</script>

<template>
  <div class="w-11/12 my-4 mx-auto text-center">
    <Title :title="title" :subTitle="subTitle" />

    <InputSearc
      placeholder="Search items, collections, and accounts"
      type="text"
      v-model:modelValue="text"
      @update:model-value="search"
    />

    <div class="sm:flex sm:justify-center sm:flex-wrap gap-6">
      <Card
        v-for="card in getCard"
        :key="card.id"
        :title="card.title"
        :persona="card.persona"
        :imageMain="card.imageMain"
        :imagePersona="card.imagePersona"
        @selectCard="selectCard(card.id)"
      />
    </div>
  </div>
</template>
