<script setup lang="ts">
import { ref } from "vue";
import Menu from "../Menu/Menu.vue";

const toggleMenu = ref<boolean>(false);

function openMenu() {
  toggleMenu.value = !toggleMenu.value;
}

function test() {
  toggleMenu.value = false;
}
</script>

<template>
  <Menu v-show="toggleMenu" :onClick="test" />
  <div class="w-11/12 mx-auto mt-4 flex justify-between">
    <img src="@/assets/navbar/Logo.svg" alt="Logo" />
    <img
      class="cursor-pointer"
      src="@/assets/navbar/Menu.svg"
      alt="Menu"
      @click="openMenu"
    />
  </div>
</template>
