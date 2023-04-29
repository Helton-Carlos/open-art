<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
import { ref } from "vue";
import Title from "@/components/Title/Title.vue";
import InputSearc from "@/components/InputSearc/InputSearc.vue";
import Button from "@/components/Button/Button.vue";

const route = useRoute();
const router = useRouter();

const title = route.meta.title;
const subTitle = route.meta.subTitle;

const name = ref<string>("");
const email = ref<string>("");
const password = ref<string>("");

const textError = ref<string>("*Fill in all fields!");

const error = ref<boolean>(false)

function registerCustomer() {
  error.value = false;

  const registerCustomer = {
    name: name.value,
    email: email.value,
  };

  if (name.value && email.value && password.value) {
    const user = JSON.stringify(registerCustomer);

    localStorage.setItem("user", user);

    router.push({ name: "profile" });
  } else {
    error.value = true;
  }
}
</script>

<template>
  <div class="my-4 containner text-center">
    <Title :title="title" :subTitle="subTitle" />

    <form @submit.prevent="registerCustomer">
      <InputSearc placeholder="Name" type="text" v-model:modelValue="name" :error="error"/>

      <InputSearc placeholder="E-mail" type="text" v-model:modelValue="email" :error="error" />

      <InputSearc
        placeholder="Password"
        type="Password"
        v-model:modelValue="password"
        :error="error"
      />

      <Button title="Create account" color="standard" />

      <p v-show="error" class="text-error font-extrabold underline pt-4">{{ textError }}</p>
    </form>
  </div>
</template>
