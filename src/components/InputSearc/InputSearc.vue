<script setup lang="ts">
import type { IInput } from "./Input";

defineProps<IInput>();

const emit = defineEmits<{
  (e: "update:modelValue", id: string | number): void;
}>();

function updateInput(event: any) {
  emit("update:modelValue", event.target.value);
}
</script>

<template>
  <div>
    <input
      :class="error ? 'inputOff' : 'inputOn'"
      :type="type"
      :placeholder="placeholder"
      @input="updateInput"
    />
  </div>
</template>
