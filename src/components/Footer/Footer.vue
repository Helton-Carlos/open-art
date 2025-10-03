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
    <div class="containner flex justify-between p-7">
      <ul class=" flex flex-col">
        <p class="text-secondary">Social networks:</p>
        <li>
          <a href="#" class="hover:text-gray">Instagram</a>
        </li>
         <li>
          <a href="#" class="hover:text-gray">Twitter</a>
        </li>
         <li>
          <a href="#" class="hover:text-gray">Discord</a>
        </li>
         <li>
          <a href="#" class="hover:text-gray">Blog</a>
        </li> 
      </ul>
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
    
    <span class="flex justify-center">© 2021 Openart</span>
  </footer>
</template>
