import { defineStore } from 'pinia';
// import { useCustomFetch } from "@/utils/fetch";
// import axios from "axios";

export const useHomeStore = defineStore('home', {
  // TODO: Перенести из стора в компоненты, нет смысла хранить в сторе

  state: () => {
    return {
      topSlider: [],
      popularCategory: [],
      narrowBanner: [],
      bottomBanner: null,
      news: [],
      sales: [],
    };
  },
  getters: {
    // Рефакторинг геттеров
    getSlider(state) {
      return state.topSlider;
    },
    getPopularCategory(state) {
      // return state.popularCategory.filter((el, index) => index < 12);
      return state.popularCategory;
    },
    getNarrowBanner(state) {
      return state.narrowBanner;
    },
    getBottomBanner(state) {
      return state.bottomBanner;
    },
    getSales(state) {
      // return state.sales.filter((el, index) => index < 12)
      return state.sales;
    },
    getNews(state) {
      return state.news;
    },
  },
  actions: {
    async loadTopSlider() {
      // try {
      //   const response = await $fetch('/api/home/slider', { method: 'GET' })
      //   this.topSlider = response
      // } catch (error) {
      //   console.log(error)
      // }
    },
    async loadPopularCategory() {
      try {
        const response = await useCustomFetch('apissz/GetRecomendTKs/?top=8');
        if (response.success) {
          this.popularCategory = response.data;
        }
      } catch (error) {
        console.log(error);
      }
    },
    async loadNarrowSlider() {
      // try {
      //   const response = await $fetch('/api/home/narrow-slider', {
      //     method: 'GET'
      //   })
      //   this.narrowBanner = response
      // } catch (error) {
      //   console.log(error)
      // }
    },
    async loadSales() {
      // TODO: Переписать функцию
      try {
        const response = await useCustomFetch('apissz/getsales');
        // console.log('SALSES', response);
        // console.log('SALSES', Array.isArray(response) )
        this.sales = JSON.parse(response);
        // if (response.success) {
        //   this.sales = response.data;
        // } else {
        //   throw new Error(response.message);
        // }
      } catch (error) {
        console.log(error);
      }
    },
    async loadNews() {
      const { API_ADMIN } = useConfig();
      try {
        const response = await $fetch('post/fresh_news', {
          baseURL: API_ADMIN,
          method: 'post',
          credentials: 'include',
        });

        this.news = response.items || [];
      } catch (error) {
        console.log(error);
      }
    },
  },
});
