<script setup lang="ts">
import { ref } from "vue";
import Button from "../Button/Button.vue";
import Modal from "../Modal/Modal.vue";

const modal = ref<boolean>(false);

function toggleModal() {
  modal.value = !modal.value;
}

defineEmits<{
  (e: "close", val: boolean): void;
  (e: "indexRoute", val: boolean): void;
}>();

const route = [
  { name: "About OpenArt", route: "About" },
  { name: "Blog", route: "Blog" },
  { name: "Help", route: "Help" },
  { name: "Contact", route: "Contact" },
];
</script>

<template>
  <div class="menu">
    <div class="w-11/12 mx-auto">
      <div class="flex items-center justify-between mt-4 pb-8">
        <img
          class="cursor-pointer"
          src="@/assets/navbar/Logo.svg"
          alt="Logo"
          @click="$emit('indexRoute')"
        />
        <img
          class="cursor-pointer"
          src="@/assets/navbar/Close.svg"
          alt="Menu"
          @click="$emit('close')"
        />
      </div>

      <div
        class="flex justify-center pb-5 hover:text-primary"
        v-for="path in route"
      >
        <p>
          <router-link
            class="font-extrabold"
            :to="path.route"
            @click="$emit('close')"
            >{{ path.name }}</router-link
          >
        </p>
      </div>

      <div class="flex justify-center">
        <Button title="Create an account" color="standard" :onClick="toggleModal" />
      </div>
    </div>

    <Modal
      v-show="modal"
      title="Welcome!"
      subtitle="Do you already have an account?"
      @toggleModal="toggleModal"
    />
  </div>
</template>
