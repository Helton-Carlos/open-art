<script setup lang="ts">
const router = [
  { name: "About OpenArt", route: "About" },
  { name: "Blog", route: "Blog" },
  { name: "Help", route: "Help" },
  { name: "Contact", route: "Contact" },
  { name: "Careers", route: "careers" },
  { name: "Terms of Service", route: "terms-services" },
];
</script>

<template>
  <footer class="w-full bg-black text-white">
    <div class="flex justify-between p-7">
      <div class="flex flex-col">
        <a href="#" class="hover:text-gray">Instagram</a>
        <a href="#" class="hover:text-gray">Twitter</a>
        <a href="#" class="hover:text-gray">Discord</a>
        <a href="#" class="hover:text-gray">Blog</a>
      </div>
      <div class="flex flex-col">
        <router-link
          class="hover:text-gray"
          v-for="path in router"
          :to="path.route"
          >{{ path.name }}</router-link
        >
      </div>
    </div>
    <hr class="bg-gray" />
    <div class="py-2">
      <span>© 2021 Openart</span>
    </div>
  </footer>
</template>
