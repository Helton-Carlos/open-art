<script setup lang="ts">
import { computed, ref } from 'vue';
import { useUserStore } from '@/store/user';
import { cards } from '@/utils/utils-card';
import Button from '@/components/Button/Button.vue';
import Modal from '@/components/Modal/Modal.vue';
import ModalBuy from '@/components/ModalBuy/ModalBuy.vue';

defineEmits<{ (e: 'onClick'): void }>();

const card = cards();

const store = useUserStore();
const user = store.userStorage();

const { id } = defineProps<{ id: number }>();
const modal = ref<boolean>(false);

const modalBuy = ref<boolean>(false);

const notice = ref<string>(
  'Once a bid has been placed and the reserve price has been met, a 24 hour auction for this artwork will begin.',
);

const getCard = computed<any>(() => {
  return card.find((item) => item.id == id);
});

function pageTopScroll() {
  parent.scroll(0, 0);
}

function buy() {
  pageTopScroll();
  user ? (modalBuy.value = true) : (modal.value = true);
}

function closeModal() {
  modal.value = false;
  modalBuy.value = false;
}

pageTopScroll();
</script>

<template>
  <div
    class="my-8 containner block md:flex md:justify-between md:gap-4 md:items-center"
  >
    <img
      :src="getCard.imageMain"
      :alt="getCard.title"
      class="w-full md:w-[750px]"
    />

    <div>
      <p class="text-gray-dark pt-2 font-extrabold text-md">
        {{ getCard.title }}
      </p>

      <p class="text-gray font-semibold text-sm pb-2">
        {{ getCard.persona }}
      </p>

      <p class="text-left">{{ getCard.describe }}</p>

      <div v-for="types in getCard.definitions" :key="types" class="inline-block pr-1 pt-2">
        <p class="tag">
          #{{ types }}
        </p>
      </div>

      <div class="card mt-4">
        <h4 class="font-bold text-base">Reserve Price</h4>

        <div>
          <p class="font-bold text-xl py-4 pr-2">{{ getCard.value }} ETH</p>

          <p class="font-bold text-gray text-base">
            R$ {{ getCard.dolar }}
          </p>
        </div>

        <p class="pb-4">
          {{ notice }}
        </p>

        <Button title="Place a bid" color="standard" @onClick="buy" />

        <Modal
          v-show="modal"
          title="You are not logged in!"
          subtitle="Make your account."
          titleButton="Ok"
          notice
          @onClick="closeModal"
        />

        <ModalBuy
          v-show="modalBuy"
          title="Place a bid"
          :id="id"
          user="user"
          notice
          @toggleModal="closeModal"
        />
      </div>
    </div>
  </div>
</template>
