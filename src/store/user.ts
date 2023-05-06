import { defineStore } from "pinia";

interface State {
  users: UserInfo | null;
}

export const useUserStore = defineStore("user", {
  state: (): State => {
    return {
      users: {
        name: "helton",
        email: "helton@gmail.com",
        money: "200.00",
        following: 252,
        followers: 92,
        image: "src/assets/profile/persona.jpg",
        since: 2021,
        context:
          "Helton Brito is a multi-disciplinary artist exploring analog + digital realms since 1990. Collaborators inc July, BMW, Comme Des Garçons, ICA, NTS, Sonos,  Stone Island, Tate Modern + Warp.",
      },
    };
  },
  actions: {
    userStorage() {
      const logar = JSON.parse(localStorage.getItem("user"));
      if (
        logar.email === this.users?.email &&
        logar.name === this.users?.name
      ) {
        return this.users;
      }
    },
  },
});
interface UserInfo {
  name: string;
  email: string;
  money: string;
  following: number;
  followers: number;
  image: string;
  since: number;
  context: string;
}
