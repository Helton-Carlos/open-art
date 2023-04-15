<script setup lang="ts">
import { useRoute } from "vue-router";
import Title from "@/components/Title/Title.vue";

const route = useRoute();

const title = route.meta.title;
const subTitle = route.meta.subTitle;
</script>

<template>
  <div class="containner my-4 text-center">
    <Title :title="title" :subTitle="subTitle" />
    <div class="text-left card ">
      <h4 class="font-bold text-base py-4">Contact us</h4>
      <p>Rua Sete de Setembro, 1329</p>
      <p>Vila Estádio - Presidente Prudente, SP</p>
      <p>openart@gmail.com</p>
      <p>Telefone: 18 3903-9771</p>
      <p>Whatsapp: 18 99745-1107</p>
    </div>
  </div>
</template>
