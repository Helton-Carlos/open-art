<script setup lang="ts">
import type { ICardBlog } from "./CardBlog";

defineProps<ICardBlog>();

defineEmits<{
  (e: "selectCard"): void;
}>();
</script>

<template>
  <div
    class="relative m-3 flex flex-wrap mx-auto justify-center shadow-lg rounded-lg"
  >
    <div class="min-w-[300px] flex flex-col group">
      <div
        class="h-48 md:h-56 lg:h-[24rem] w-full bg-red-500 border-2 border-white flex items-center justify-center text-white text-base mb-3 md:mb-5 overflow-hidden relative"
      >
        <img
          :src="imageMain"
          class="object-cover w-full h-full scale-100 group-hover:scale-110 transition-all duration-400"
          :alt="title"
          data-testid="imageMain-id"
        />

        <div
          class="absolute z-10 border-4 border-primary w-[95%] h-[95%] invisible group-hover:visible opacity-0 group-hover:opacity-100 group-hover:scale-90 transition-all duration-500"
        ></div>
      </div>
      <a
        href="./single_post.html"
        class="block text-gray-dark text-center hover:text-primary transition-colors duration-150 text-lg md:text-xl mb-1"
        data-testid="title-id"
      >
        {{ title }}</a
      >
      <div class="mb-3 flex items-center justify-between p-2 md:items-start">
        <div class="mb-2">
          <p class="text-lg text-gray-dark font-bold text-navy-700" data-testid="persona-id">
            {{ persona }}
          </p>
        </div>
        <div class="flex flex-row-reverse md:mt-2 lg:mt-0">
          <span
            class="z-0 ml-px inline-flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-[#E0E5F2] text-xs text-navy-700"
            >+5</span
          ><span class="z-10 -mr-3 h-8 w-8 rounded-full border-2 border-white">
            <img
              class="h-full w-full rounded-full object-cover"
              src="https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/avatar1.eeef2af6dfcd3ff23cb8.png"
              alt="person"
              data-testid="imagePersona-id" 
            />
          </span>
          <span class="z-10 -mr-3 h-8 w-8 rounded-full border-2 border-white">
            <img
              class="h-full w-full rounded-full object-cover"
              src="https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/avatar2.5692c39db4f8c0ea999e.png"
              alt="person"
            />
          </span>
          <span class="z-10 -mr-3 h-8 w-8 rounded-full border-2 border-white">
            <img
              class="h-full w-full rounded-full object-cover"
              src="https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/avatar3.9f646ac5920fa40adf00.png"
              alt="person"
            />
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
