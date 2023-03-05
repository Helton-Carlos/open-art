<script setup lang="ts">
import { useRouter } from "vue-router";
import Navbar from "./components/Navbar/Navbar.vue";

const router = useRouter();

function homeRouter() {
  alert("hey")
}
</script>

<template>
  <div>
    <Navbar/>
    <RouterView />
  </div>
</template>
