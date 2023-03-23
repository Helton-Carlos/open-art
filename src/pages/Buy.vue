<script setup lang="ts">
import cards from "@/utils/utils-card";

const { id } = defineProps<{ id: number }>();
</script>

<template>
  <div class="w-11/12 my-4 mx-auto text-center">
    {{ id }}
  </div>
</template>
