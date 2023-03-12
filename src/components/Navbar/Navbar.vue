<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import Menu from "../Menu/Menu.vue";

const toggleMenu = ref<boolean>(false);
const router = useRouter();

function openMenu() {
  toggleMenu.value = !toggleMenu.value;
}

function test() {
  toggleMenu.value = false;
}

function menuIndex() {
  router.push({ name: "home" });
}
</script>

<template>
  <Menu v-show="toggleMenu" :onClick="test" />
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
      @click="openMenu"
    />
  </div>
</template>
