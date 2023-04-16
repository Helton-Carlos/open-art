<script setup lang="ts">
import type { ICard } from "./Card";

defineProps<ICard>();

defineEmits<{
  (e: "selectCard"): void;
}>();
</script>

<template>
  <div
    class="w-full card cursor-pointer sm:w-[290px] hover:opacity-75"
    @click="$emit('selectCard')"
  >
    <div>
      <img
        :src="imageMain"
        :alt="title"
        class="w-full"
        data-testid="imageMain-id"
      />
    </div>
    <div class="flex justify-between items-center">
      <div class="flex my-2">
        <img :src="imagePersona" :alt="title" data-testid="imagePersona-id" />
        <div class="text-left pl-4">
          <p
            class="text-gray-dark font-extrabold text-md"
            data-testid="title-id"
          >
            {{ title }}
          </p>
          <p class="text-gray font-semibold text-sm" data-testid="persona-id">
            {{ persona }}
          </p>
        </div>
      </div>
      <div>
        <img src="@/assets/card/heart.svg" alt="persona" />
      </div>
    </div>
  </div>
</template>
