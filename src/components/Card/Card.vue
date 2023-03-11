<script setup lang="ts">
import { ICard } from './Card'

defineProps<ICard>();
</script>

<template>
  <div class="card">
    <div>
      <img :src="imageMain" :alt="title" class="w-full" />
    </div>
    <div class="flex justify-between items-center">
      <div class="flex my-2">
        <img :src="imagePersona" :alt="title" />
        <div class="text-left pl-4">
          <p class="text-gray-dark font-extrabold text-md">{{ title }}</p>
          <p class="text-gray font-semibold text-sm">{{ persona }}</p>
        </div>
      </div>
      <div>
        <img src="@/assets/card/heart.svg" alt="persona" />
      </div>
    </div>
  </div>
</template>
