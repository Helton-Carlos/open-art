<script setup lang="ts">
import { computed, ref } from "vue";
import cards from "@/utils/utils-card";
import Button from "@/components/Button/Button.vue";

const { id } = defineProps<{ id: number | string }>();

const notice = ref<string>(
  " Once a bid has been placed and the reserve price has been met, a 24 hour auction for this artwork will begin."
);

const getCard = computed<any>(() => {
  return cards.find((item) => item.id == id);
});
</script>

<template>
  <div class="my-4 containner">
    <img :src="getCard.imageMain" :alt="getCard.title" class="w-full" />
    <p class="text-gray-dark pt-2 font-extrabold text-md">
      {{ getCard.title }}
    </p>
    <p class="text-gray font-semibold text-sm pb-2">
      {{ getCard.persona }}
    </p>
    <p class="text-left">{{ getCard.describe }}</p>

    <div v-for="types in getCard.definitions" class="inline-block pr-1 pt-2">
      <p class="border border-gray text-gray rounded-xl px-3 py-1">
        #{{ types }}
      </p>
    </div>

    <div class="card">
      <h4 class="font-bold text-base">Reserve Price</h4>
      <div class="flex items-center">
        <p class="font-bold text-xl py-4 pr-2">{{ getCard.value }} ETH</p>
        <span class="font-bold text-gray text-base">${{ getCard.dolar }}</span>
      </div>
      <p class="pb-4">
        {{ notice }}
      </p>
      <Button title="Place a bid" color="standard" />
    </div>
  </div>
</template>
