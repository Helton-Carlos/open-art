<script setup lang="ts">
import type { IInput } from "./IInput";

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
      class="w-full my-8 block pl-5 py-2 text-sm text-gray-dark border border-gray-light rounded-lg bg-gray-light focus:border-primary focus:ring-primary focus:outline-none focus:ring focus:ring-opacity-40"
      :type="type"
      :placeholder="placeholder"
      @input="updateInput"
    />
  </div>
</template>
