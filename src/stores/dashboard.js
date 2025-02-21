import { defineStore } from "pinia";
import { api } from "src/boot/axios";

export const useDashbaordStore = defineStore("dashboard", {
  state: () => ({
    province_id: null,
    provinces: [],

    year: null,
    yearPast: null,
    years: [],
  }),
  getters: {
    yearPast: (state) => {
      const year = state.year.label - 2;
      const yearPast = state.years.find((item) => {
        return item.label == year;
      });

      if (yearPast) {
        return yearPast;
      } else {
        const year = state.year.label - 1;
        const yearPast = state.years.find((item) => {
          return item.label == year;
        });

        if (yearPast) {
          return yearPast;
        } else {
          return state.year;
        }
      }
    },
  },
});
