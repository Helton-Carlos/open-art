<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
import { useUserStore } from "@/store/user";
import Title from "@/components/Title/Title.vue";

interface UserInfo {
  name: string;
  email: string;
}

const route = useRoute();

const user = useUserStore();

const title = route.meta.title;
const subTitle = route.meta.subTitle;

const users = computed<UserInfo>(() => {
  return user.userStorage();
});
</script>

<template>
  <div class="my-4 containner text-center">
    <Title :title="title" :subTitle="subTitle" />

    <div class="flex justify-center items-center">
      <div class="text-center">
        <img
          src="@/assets/profile/persona.jpg"
          alt="persona"
          class="w-[90px] h-[90px] rounded-full mx-auto"
        />

        <h2 class="pt-4 font-bold">{{ users.name }}</h2>
        <p class="font-bold text-gray">{{ users.email }}</p>
      </div>
    </div>
  </div>
</template>
