<script setup lang="ts">
import Button from "../Button/Button.vue";
import { useRouter } from "vue-router";

const router = useRouter();

function createAccount() {
  router.push({ name: "create-account" });
}

function logout() {
  localStorage.clear();
}

defineEmits<{
  (e: "close"): void;
  (e: "indexRoute"): void;
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
    <div class="containner">
      <div class="flex items-center justify-between mt-4 pb-8">
        <img
          class="cursor-pointer"
          src="@/assets/image/navbar/Logo.svg"
          alt="Logo"
          @click="$emit('indexRoute')"
        />

        <img
          class="cursor-pointer"
          src="@/assets/image/navbar/Close.svg"
          alt="Menu"
          @click="$emit('close')"
        />
      </div>

      <ul
        class="mt-4"
        v-for="path in route"
        :key="path.name"
      >
        <li>
          <router-link
           class="title-path"
            :to="path.route"
            @click="$emit('close')"
          >
            {{ path.name }}
          </router-link
          >
        </li>
      </ul>

      <div class="flex justify-center flex-col mx-auto text-center">
        <Button
          title="Create an account"
          color="standard"
          :onClick="createAccount"
          @click="$emit('close')"
        />

        <Button
          title="Logout"
          color="null"
          :onClick="logout"
          @click="$emit('close')"
        />
      </div>
    </div>
  </div>
</template>
