import { defineStore } from "pinia";
import { api } from "src/boot/axios";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    token: localStorage.getItem("token"),
    user: null,
    menus: [],
    province: null,
    provinces: [],
    regency: [],
    regency_ids: [],
    year_selected: null,
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
      return api
        .get(
          "users/" +
            this.token_data.ID +
            '?Relations={"Name":"Group.Details.RegencyCity.Province"}&Relations={"Name":"Roles.Menus.Childs.Childs.Childs.Childs.Childs.Childs"}'
        )
        .then((res) => {
          this.user = res.data.data;
          this.regency_ids = res.data.data.Group.Details.map(
            (e) => e.RegencyCityID
          );
        })
        .then((res) => {
          this.setMenus();
          this.setProvince();
        })
        .catch((err) => {
          console.log(err);
        });
    },

    getMenuChild(childs) {
      let ids = [];
      for (const child of childs) {
        ids.push(child);
        if (child.Childs.length > 0) {
          ids = ids.concat(getAllIds(child.Childs));
        }
      }
      return ids;
    },

    checkMenu(name) {
      return this.menus.map((e) => e.Url).includes(name);
    },

    setMenus() {
      this.menus = [];
      this.user.Roles.map((e) => {
        this.menus = this.menus.concat(this.getMenuChild(e.Menus));
      });

      this.menus = this.menus.sort((a, b) => a.Ord - b.Ord);
    },

    setProvince() {
      this.province = null;
      this.provinces = [];
      const uniqueSet = new Set(
        this.user.Group.Details.map((item) => item["ProvinceID"])
      );
      this.provinces = Array.from(uniqueSet)
        .map((uniqueValue) =>
          this.user.Group.Details.find(
            (item) => item["ProvinceID"] === uniqueValue
          )
        )
        .map((item) => {
          return {
            value: item.ProvinceID,
            label: item.RegencyCity.Province.LongName,
          };
        });

      if (this.provinces.length == 1) {
        this.province = this.provinces[0];
        this.setRegencies(this.provinces[0].value);
      }
    },

    setRegencies(province) {
      this.regency = [{ label: "-", value: 0, province: [] }];
      this.regency = this.user.Group.Details.filter(
        (item) => item.ProvinceID === province
      ).map((regency) => {
        return {
          label: regency.RegencyCity.Name,
          value: regency.RegencyCityID,
          province: regency.RegencyCity.Province.LongName,
        };
      });
    },
  },
});
