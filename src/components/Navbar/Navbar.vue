<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import Menu from "../Menu/Menu.vue";

const menu = ref<boolean>(false);
const router = useRouter();

function toggleMenu() {
  menu.value = !menu.value;
}

function menuIndex() {
  router.push({ name: "home" });
  menu.value = false;
}
</script>

<template>
  <div>
    <Menu v-show="menu" @close="toggleMenu" @indexRoute="menuIndex" />
    <div class="w-11/12 mx-auto mt-4 flex justify-between">
      <img
        class="cursor-pointer"
        src="@/assets/navbar/Logo.svg"
        alt="Logo"
        @click="menuIndex"
      />
      <img
        class="cursor-pointer"
        src="@/assets/navbar/Menu.svg"
        alt="Menu"
        @click="toggleMenu"
      />
    </div>
  </div>
</template>
