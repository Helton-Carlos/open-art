<script setup lang="ts">
import type { IModalBuy } from "./ModalBuy";
import { useRouter } from "vue-router";
import Button from "../Button/Button.vue";

defineProps<IModalBuy>();

defineEmits<{ (e: "onClick"): void }>();

const router = useRouter();

function logar() {
  router.push({ name: "home" });
  console.log(id);
}
</script>

<template>
  <div
    class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10"
  >
    <div class="flex items-center justify-center rounded-xl text-center pt-2">
      <div class="card w-[350px]">
        <div>
          <div class="text-left">
            <div class="flex justify-between items-center">
              <p
                class="text-black font-extrabold text-xl"
                data-testid="title-id"
              >
                {{ title }}
              </p>
              <img
                class="cursor-pointer"
                src="@/assets/navbar/Close.svg"
                alt="Menu"
                @click="$emit('toggleModal')"
              />
            </div>
            <p
              class="text-gray-dark font-semibold text-sm"
              data-testid="persona-id"
            >
              You must bid at least 0.825 ETH
            </p>
          </div>
        </div>

        <p class="font-bold text-left my-4">Your bid</p>

        <p>{{ user }}</p>

        <div class="flex justify-center mt-2 mx-auto">
          <Button
            title="Place a bid"
            color="standard"
            @onClick="$emit('onClick')"
          />
          <Button title="Cancel" :onClick="logar" />
        </div>
      </div>
    </div>
  </div>
</template>
