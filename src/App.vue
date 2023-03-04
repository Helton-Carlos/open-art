<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();

function homeRouter() {
  router.push({ name: "home" });
}
</script>

<template>
  <div>
    <button
      @click="homeRouter"
      class="bg-primary text-white py-2 px-5 rounded-md"
    >
      home
    </button>
    <RouterView />
  </div>
</template>
