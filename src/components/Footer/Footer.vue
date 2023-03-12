<script setup lang="ts">
const router = [
  { name: "About OpenArt", route: "About" },
  { name: "Blog", route: "Blog" },
  { name: "Help", route: "Help" },
  { name: "Contact", route: "Contact" },
  { name: "Careers", route: "Careers" },
  { name: "Terms of Service", route: "Terms" },
];
</script>

<template>
  <div class="w-full bg-black text-white">
    <div class="flex justify-between p-7">
      <div class="flex flex-col">
        <a href="#">Instagram</a>
        <a href="#">Twitter</a>
        <a href="#">Discord</a>
        <a href="#">Blog</a>
      </div>
      <div class="flex flex-col">
        <router-link v-for="path in router" :to="path.route">{{
          path.name
        }}</router-link>
      </div>
    </div>
    <hr class="bg-gray" />
    <div class="py-2">
      <span>© 2021 Openart</span>
    </div>
  </div>
</template>
