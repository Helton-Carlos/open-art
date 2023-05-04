<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
import { ref, computed } from "vue";
import Title from "@/components/Title/Title.vue";
import InputSearc from "@/components/InputSearc/InputSearc.vue";
import Card from "@/components/Card/Card.vue";
import { cards } from "@/utils/utils-card";

const route = useRoute();
const router = useRouter();

const card = cards();

const title = route.meta.title;
const subTitle = route.meta.subTitle;

const text = ref<string>("");

function search() {
  let title = card.map((item) => item.title);

  return title.filter((item) =>
    item.toLowerCase().includes(text.value.toLowerCase())
  );
}

function selectCard(id: number) {
  router.push({ name: "buy", params: { id } });
}

const getCard = computed<any>(() => {
  return search().map((searchs: any) => {
    return card.find((name: any) => name.title === searchs);
  });
});

const hotCard = computed<any>(() => {
  return card.filter((cards) => cards.type === "hot");
});
</script>

<template>
  <div class="my-4 containner text-center">
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
        context
        :title="card.title"
        :imageMain="card.imageMain"
        :persona="card.persona"
        :imagePersona="card.imagePersona"
        @selectCard="selectCard(card.id)"
      />
    </div>

    <h2 class="text-left font-bold text-base py-4 flex">
      <img src="@/assets/emoji/fire.png" alt="fire" class="pr-1" /> Hot bid
    </h2>

    <div class="w-full flex overflow-x-auto space-x-4">
      <div class="flex-shrink-0" v-for="card in hotCard" :key="card.id">
        <Card
          class="w-[180px]"
          :title="card.title"
          :imageMain="card.imageMain"
          @selectCard="selectCard(card.id)"
        />
      </div>
    </div>
  </div>
</template>
