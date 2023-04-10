<script setup lang="ts">
import { useRoute, useRouter} from "vue-router";
import { ref } from "vue";
import Title from "@/components/Title/Title.vue";
import InputSearc from "@/components/InputSearc/InputSearc.vue";
import Button from "@/components/Button/Button.vue";

const route = useRoute();
const router = useRouter();

const title = route.meta.title;
const subTitle = route.meta.subTitle;

const text = ref<string>("");
const email = ref<string>("");
const password = ref<string>("");

function registerCustomer() {
  const registerCustomer = {
    name: text.value,
    email: email.value,
    password: password.value,
  };
  
  console.log(registerCustomer);

  router.push ({ name: 'profile'})
}
</script>

<template>
  <div class="w-11/12 my-4 mx-auto text-center">
    <Title :title="title" :subTitle="subTitle" />

    <form @submit.prevent="registerCustomer">
      <InputSearc placeholder="Name" type="text" v-model:modelValue="text" />

      <InputSearc placeholder="E-mail" type="text" v-model:modelValue="email" />

      <InputSearc
        placeholder="Password"
        type="Password"
        v-model:modelValue="password"
      />

      <Button title="Create account" color="standard" />
    </form>
  </div>
</template>
