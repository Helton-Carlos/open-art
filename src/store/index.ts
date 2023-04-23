import { defineStore } from "pinia";

interface State {
  users: UserInfo | null;
}

export const useUserStore = defineStore("user", {
  state: (): State => {
    return {
      users: {
        name: "",
        email: "",
        password: "",
      },
    };
  },
  actions: {
    localStorage(keys: UserInfo) {
      console.log(keys);
    }
  }
});

interface UserInfo {
  name: string;
  email: string;
  password: string;
}
