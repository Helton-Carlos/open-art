<script setup lang="ts">
import { IModal } from "./Modal";
import { ref } from "vue";
import { useRouter } from "vue-router";
import Button from "../Button/Button.vue";

defineProps<IModal>();

const router = useRouter();

function logar() {
  router.push({ name: "create-account" });
}

function createAccount() {
  router.push({ name: "create-account" });
}
</script>

<template>
  <div
    class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10"
  >
    <div class="flex items-center justify-center rounded-xl text-center">
      <div class="card w-[350px]">
        <img
          class="cursor-pointer relative mb-4"
          src="@/assets/navbar/Close.svg"
          alt="Menu"
          @click="$emit('onClick')"
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

        <div class="flex justify-center my-4 mx-auto">
          <Button title="Yes" color="standard" :onClick="createAccount" />

          <Button title="No" :onClick="logar" />
        </div>
      </div>
    </div>
  </div>
</template>
