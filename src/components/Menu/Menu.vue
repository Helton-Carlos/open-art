<script setup lang="ts">
import Button from "../Button/Button.vue";

defineEmits<{ (e: "onClick"): void }>();

function test() {
  alert("path");
}

const router = [
  { name: "About OpenArt", route: "About" },
  { name: "Blog", route: "Blog" },
  { name: "Help", route: "Help" },
  { name: "Contact", route: "Contact" },
];
</script>

<template>
  <div class="menu">
    <div class="w-11/12 mx-auto">
      <div class="flex items-center justify-between pb-8">
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
        v-for="path in router"
      >
        <router-link class="font-extrabold" :to="path.route">{{
          path.name
        }}</router-link>
      </div>

      <div class="flex justify-center">
        <Button title="Connect wallet" color="standard" :onClick="test" />
      </div>
    </div>
  </div>
</template>
