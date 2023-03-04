<script setup lang="ts">
import { useRouter } from "vue-router";
import Button from "./components/Button/Button.vue";

const router = useRouter();

function homeRouter() {
  alert("hey")
}
</script>

<template>
  <div>
    <Button title="test" color="primary" @click="homeRouter"/>
    <RouterView />
  </div>
</template>
