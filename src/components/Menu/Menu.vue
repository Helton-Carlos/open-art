<script setup lang="ts">
import Button from "../Button/Button.vue";

defineEmits<{ (e: "onClick"): void }>();

function test() {
  alert("path")
}

const router = [
  { route: "About OpenArt" },
  { route: "Blog" },
  { route: "Help" },
  { route: "Contact" },
];
</script>

<template>
  <div class="menu">
    <div class="w-11/12 mx-auto">

      <div class="flex items-center justify-between pb-8">
        <img src="@/assets/navbar/Logo.svg" alt="Logo" />
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
        <p class="font-extrabold">{{ path.route }}</p>
      </div>

      <div class="flex justify-center">
        <Button title="Connect wallet" color="standard" :onClick="test" />
      </div>
    </div>
  </div>
</template>
