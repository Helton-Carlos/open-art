<script setup lang="ts">
import type { IButton } from "./Button";

defineProps<IButton>();
defineEmits<{ (e: "onClick"): void }>();
</script>

<template>
  <div>
    <button
      class="px-7 py-1 rounded drop-shadow-md font-medium"
      :class="{
        'bg-primary hover:bg-blue text-white': color == 'primary',
      }"
      @click="$emit('onClick')"
    >
      {{ title }}
    </button>
  </div>
</template>
