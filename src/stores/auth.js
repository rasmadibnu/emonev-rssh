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
          return api.get("/menus");
        })
        .then((res) => {
          this.setMenus(res.data.data);
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
          ids = ids.concat(this.getMenuChild(child.Childs));
        }
      }
      return ids;
    },

    checkMenu(name) {
      return this.menus.map((e) => e.Url).includes(name);
    },

    sortMenus(items = []) {
      return [...items]
        .sort((a, b) => (a.Ord || 0) - (b.Ord || 0))
        .map((item) => ({
          ...item,
          Childs: this.sortMenus(item.Childs || []),
        }));
    },

    collectAssignedMenuIds(childs = [], ids = new Set()) {
      childs.forEach((child) => {
        ids.add(child.ID);
        if (child.Childs?.length > 0) {
          this.collectAssignedMenuIds(child.Childs, ids);
        }
      });

      return ids;
    },

    filterMenusByPermission(menus = [], assignedIds = new Set()) {
      return menus.reduce((filtered, menu) => {
        const childs = this.filterMenusByPermission(
          menu.Childs || [],
          assignedIds
        );

        if (assignedIds.has(menu.ID) || childs.length > 0) {
          filtered.push({
            ...menu,
            Childs: childs,
          });
        }

        return filtered;
      }, []);
    },

    setMenus(allMenus = []) {
      this.menus = [];
      const raw_menus = [];
      const assignedIds = new Set();

      this.user.Roles.forEach((role) => {
        role?.Menus?.forEach((menu) => {
          raw_menus.push(menu);
          assignedIds.add(menu.ID);
          this.collectAssignedMenuIds(menu.Childs || [], assignedIds);
        });
      });

      this.raw_menus = raw_menus;
      this.menus = this.sortMenus(
        this.filterMenusByPermission(allMenus, assignedIds)
      );
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
