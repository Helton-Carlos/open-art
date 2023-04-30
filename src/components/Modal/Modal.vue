<script setup lang="ts">
import { ref } from "vue";
import type { IModal } from "./Modal";
import { useRouter } from "vue-router";
import Button from "../Button/Button.vue";

defineProps<IModal>();

defineEmits<{ (e: "onClick"): void }>();

const close = ref<boolean>(false)

const router = useRouter();

function logar() {
  router.push({ name: "create-account" });
}
</script>

<template>
  <div
    class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10"
  >
    <div class="flex items-center justify-center rounded-xl text-center pt-2">
      <div class="card w-[350px]">
        <img
          v-if="close"
          class="cursor-pointer"
          src="@/assets/navbar/Close.svg"
          alt="Menu"
          @click="$emit('toggleModal')"
        />
        <p class="text-black font-extrabold text-2xl" data-testid="title-id">
          {{ title }}
        </p>
        <p
          class="text-gray-dark font-semibold text-sm"
          data-testid="persona-id"
        >
          {{ subtitle }}
        </p>

        <div class="flex justify-center mt-2 mx-auto">
          <Button :title="titleButton" color="standard"  @onClick="$emit('onClick')" />
          <Button title="No" :onClick="logar" v-if="!notice" />
        </div>
      </div>
    </div>
  </div>
</template>
