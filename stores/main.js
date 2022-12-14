import { defineStore } from 'pinia';

export const useMainStore = defineStore('main', {
  state: () => {
    return {
      pageError: false,
      pageLoader: false,
      searchValueStore: '',
      searchResultStore: [],
      productNotFound: false,
    };
  },
  getters: {},
  actions: {
    setPageIsLoaded() {
      this.pageLoader = true;
    },
  },
});
