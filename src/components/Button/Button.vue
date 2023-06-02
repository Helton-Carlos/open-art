<script setup lang="ts">
import type { IButton } from "./Button";

defineProps<IButton>();
defineEmits<{ (e: "onClick"): void }>();
</script>

<template>
  <div>
    <button
      data-testid="btn-id"
      class="px-7 py-1 rounded drop-shadow-md font-medium"
      :class="{
        'btn-standard': color == 'standard',
        underline: color == 'null',
      }"
      @click="$emit('onClick')"
    >
      {{ title }}
    </button>
  </div>
</template>
