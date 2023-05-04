import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  actions: {
    userStorage() {
      const state = JSON.parse(localStorage.getItem("user"));
      return state
    },
  },
});

