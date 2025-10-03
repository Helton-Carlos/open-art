<script setup lang="ts">
import Navbar from "@/components/Navbar/Navbar.vue";
import Footer from "@/components/Footer/Footer.vue";
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <Navbar />
      <RouterView class="flex-1" />
    <Footer />
  </div>
</template>
