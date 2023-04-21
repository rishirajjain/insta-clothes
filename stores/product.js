import { defineStore } from "pinia";

export const useProductStore = defineStore("product", {
  state: () => ({
    productLinks: null,
  }),
  actions: {
    setProductLinks(links) {
      this.productLinks = links;
    },
  },
});
