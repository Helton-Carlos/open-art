<script setup lang="ts">
import { computed } from "vue";
import cards from "@/utils/utils-card";

const { id } = defineProps<{ id: number | string }>();

const getCard = computed<any>(() => {
  return cards.find((item) => item.id == id);
});
</script>

<template>
  <div class="w-11/12 my-4 mx-auto text-center">
    <hr>
    <div class="flex justify-between items-center">
      <div class="flex my-2">
        <div class="text-left pl-4">
          <p class="text-gray-dark font-extrabold text-md">
            {{ getCard.title }}
          </p>
          <p class="text-gray font-semibold text-sm">
            {{ getCard.persona }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
