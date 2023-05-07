<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
import { useUserStore } from "@/store/user";
import Title from "@/components/Title/Title.vue";

const route = useRoute();

const store = useUserStore();
const user = store.userStorage();

const title = route.meta.title;
const subTitle = route.meta.subTitle;

const users = computed<any>(() => {
  return user;
});
</script>

<template>
  <div class="my-4 containner text-center">
    <Title :title="title" :subTitle="subTitle" />

    <div class="flex justify-center items-center">
      <div class="text-center">
        <img
          :src="users.image"
          alt="persona"
          class="w-[90px] h-[90px] rounded-full mx-auto"
        />

        <h2 class="pt-4 font-bold capitalize">{{ users.name }}</h2>
        <p class="font-bold text-gray">{{ users.email }}</p>

        <div class="flex justify-center items-center mt-4">
          <p class="font-bold">Followed by</p>
          <div class="flex flex-row-reverse md:mt-2 lg:mt-0">
            <span
              class="z-0 ml-px inline-flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-[#E0E5F2] text-xs text-navy-700"
              >{{ users.followers }}</span
            ><span
              class="z-10 -mr-3 h-8 w-8 rounded-full border-2 border-white"
            >
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

        <div class="flex my-4 gap-4">
          <a
            :href="users.instagram"
            alt="instagram"
            target="_blank"
            class="flex items-center capitalize btn-secundary font-medium"
          >
            <img
              src="@/assets/profile/instagram.svg"
              alt="instagram"
              class="pr-1"
            />
            instagram</a
          >

          <a
            :href="users.linkedin"
            alt="linkedin"
            target="_blank"
            class="flex items-center capitalize btn-secundary font-medium"
          >
            <img
              src="@/assets/profile/linkedIn.svg"
              alt="linkedin"
              class="pr-1"
            />linkedin</a
          >
        </div>
      </div>
    </div>

    <div class="w-4/5 flex justify-between mx-auto pt-4 text-left">
      <div>
        <p class="text-gray-dark font-bold text-xl">{{ users.following }}</p>
        <h4 class="text-gray">Followers</h4>
      </div>

      <div>
        <p class="text-gray-dark font-bold text-xl">{{ users.followers }}</p>
        <h4 class="text-gray">Followers</h4>
      </div>
    </div>

    <div class="w-4/5 mx-auto pt-4 text-left">
      <p class="text-gray-dark font-bold text-xl">Who am I:</p>
      <p class="text-gray">{{ users.context }}</p>
    </div>

    <p class="text-gray-dark my-8">Member since {{ users.since }}</p>
  </div>
</template>
