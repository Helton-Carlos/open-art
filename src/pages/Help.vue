<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
import { ref } from "vue";
import Title from "@/components/Title/Title.vue";
import InputSearc from "@/components/InputSearc/InputSearc.vue";
import Button from "@/components/Button/Button.vue";

const route = useRoute();

const title = route.meta.title;
const subTitle = route.meta.subTitle;

const email = ref<string>("");
const text = ref<string>("");

function registerCustomer() {
  const registerCustomer = {
    name: text.value,
    email: email.value,
  };

  console.log(registerCustomer);
}
</script>

<template>
  <div class="my-4 containner text-center">
    <Title :title="title" :subTitle="subTitle" />

    <form @submit.prevent="registerCustomer">
      <h4 class="font-bold text-base">Put your question.</h4>

      <InputSearc
        placeholder="Type your e-mail..."
        type="e-mail"
        v-model:modelValue="email"
      />

      <InputSearc
        placeholder="Type your question..."
        type="text"
        v-model:modelValue="text"
      />

      <Button title="Submit question" color="standard" />
    </form>
  </div>
</template>
