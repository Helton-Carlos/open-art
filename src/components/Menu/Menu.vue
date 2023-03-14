<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import Button from "../Button/Button.vue";
import Modal from "../Modal/Modal.vue";

defineEmits<{ (e: "onClick"): void }>();

const router = useRouter();

const modal = ref<Boolean>(false);

function createAccount() {
  modal.value = !modal.value;
  if (route.length > 5) {
    router.push({ name: "create-account" });
  }
}

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
        <img class="cursor-pointer" src="@/assets/navbar/Logo.svg" alt="Logo" />
        <img
          class="cursor-pointer"
          src="@/assets/navbar/Close.svg"
          alt="Menu"
          @click="$emit('onClick')"
        />
      </div>

      <div
        class="flex justify-center pb-5 hover:text-primary"
        v-for="path in route"
      >
        <router-link class="font-extrabold" :to="path.route">{{
          path.name
        }}</router-link>
      </div>

      <div class="flex justify-center">
        <Button
          title="Create an account"
          color="standard"
          :onClick="createAccount"
        />
      </div>
    </div>

    <Modal
      v-show="modal"
      title="Welcome!"
      subtitle="Do you already have an account?"
    />
  </div>
</template>
