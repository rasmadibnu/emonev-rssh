import { defineStore } from "pinia";
import { api } from "src/boot/axios";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    token: localStorage.getItem("token"),
    user: null,
  }),
  getters: {
    token_data() {
      const base64Url = this.token ? this.token.split(".")[1] : " ";
      const base64 = base64Url
        ? base64Url.replace(/-/g, "+").replace(/_/g, "/")
        : "";
      const jsonPayload = decodeURIComponent(
        atob(base64)
          .split("")
          .map(function (c) {
            return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
          })
          .join("")
      );

      return jsonPayload ? JSON.parse(jsonPayload) : "";
    },
  },
  actions: {
    getUser() {
      api
        .get(
          "users/" +
            this.token_data.ID +
            '?Relation={"Name": "Group.Details.RegencyCity.Province"}'
        )
        .then((res) => {
          this.user = res.data.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
});
