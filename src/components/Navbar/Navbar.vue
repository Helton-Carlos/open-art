<script setup lang="ts">
import { ref } from "vue";
import { useUserStore } from "@/store/user";
import { useRouter } from "vue-router";
import Menu from "@/components/Menu/Menu.vue";

const menu = ref<boolean>(false);
const router = useRouter();

const store = useUserStore();
const user = store.userStorage();

function toggleMenu() {
  menu.value = !menu.value;
}

function menuIndex() {
  router.push({ name: "home" });
  menu.value = false;
}
</script>

<template>
  <div>
    <Menu v-show="menu" @close="toggleMenu" @indexRoute="menuIndex" />

    <div class="w-11/12 mx-auto mt-4 flex justify-between">
      <img
        class="cursor-pointer"
        src="@/assets/image/navbar/Logo.svg"
        alt="Logo"
        @click="menuIndex"
      />
      <div class="flex gap-2">
        <img v-if="user" src="@/assets/image/navbar/People.svg" alt="People" />

        <img
          class="cursor-pointer"
          src="@/assets/image/navbar/Menu.svg"
          alt="Menu"
          @click="toggleMenu"
        />
      </div>
    </div>
  </div>
</template>
