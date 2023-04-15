<script setup lang="ts">
import { useRoute } from "vue-router";
import Title from "@/components/Title/Title.vue";

const route = useRoute();

const title = route.meta.title;
const subTitle = route.meta.subTitle;

const miniCard = [
  { image: "src/assets/about/Build-together.png", name: "Build together" },
  { image: "src/assets/about/Trust.png", name: "Trust" },
];
</script>

<template>
  <div class="containner my-4 text-center">
    <Title :title="title" :subTitle="subTitle" />

    <img src="@/assets/about/processor.png" alt="processor" class="mx-auto" />

    <p>
      OpenArt help anyone create a beautiful website, landing page, app to
      collect NFTs digital art.
    </p>

    <h4 class="font-bold text-base py-4">Crypto for Creative Communities</h4>

    <p>
      NFTs—non-fungible tokens—are empowering artists, musicians, and all kinds
      of genre-defying digital creators to invent a new cultural paradigm. How
      this emerging culture of digital art ownership looks is up to all of us.
    </p>

    <h4 class="font-bold text-base py-4">How it work</h4>

    <div class="flex justify-center gap-2 md:gap-8">
      <div class="card w-[150px]" v-for="card in miniCard">
        <img class="flex" :src="card.image" :alt="card.name" />
        <p class="font-bold">{{ card.name }}</p>
      </div>
    </div>

    <h4 class="font-bold text-base py-4">For Creators</h4>

    <p>
      Creators are invited to join Foundation by members of the community. Once
      you’ve received an invite, you’ll need to set up a MetaMask wallet with
      ETH before you can create an artist profile and mint an NFT—which means
      uploading your JPG, PNG, or video file to IPFS, a decentralized
      peer-to-peer storage network. It will then be an NFT you can price in ETH
      and put up for auction on Foundation.
    </p>
  </div>
</template>
