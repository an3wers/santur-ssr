import { defineStore } from 'pinia';
// import { useCustomFetch } from "@/utils/fetch";
import { useAppMessage } from './appMessage';

export const useCartStore = defineStore('cart', {
  state: () => {
    return {
      cartId: null,
      cartItems: [],
      cartCount: 0,
      cartSum: '0,00',
      cartState: 'не сохранена',
      cartWeight: '',
      cartSumRaw: 0,
      cartIsUpdated: true,
      cartContract: '',
    };
  },
  getters: {},
  actions: {
    async addToCart(porduct, count) {
      const appMessageStore = useAppMessage();
      try {
        const response = await useCustomFetch(
          `apissz/AddToCart/?gcode=${porduct}&qty=${count}`
        );
        if (response.success) {
          return response.data;
        } else {
          throw new Error('При добавлении в корзину произошла ошибка');
          // return undefined
        }
      } catch (error) {
        appMessageStore.openWithTimer('error', error.message, 'error');
        return error;
      }
    },
    async removeFromCart(porduct) {
      const appMessageStore = useAppMessage();
      try {
        const response = await useCustomFetch(
          `apissz/RemoveCartItem/?gcode=${porduct}`
        );
        if (response.success) {
          // console.log("Товар удален ", response.data);
          return response.data;
        } else {
          throw new Error(
            response.message ||
              'При удалении товара из корзины произошла ошибка'
          );
        }
      } catch (error) {
        appMessageStore.openWithTimer('error', error.message, 'error');
        return error;
      }
    },

    async cleanCart() {
      const appMessageStore = useAppMessage();
      try {
        const response = await useCustomFetch('apissz/ClearCart');
        if (response.success) {
          return response.data;
        } else {
          throw new Error(
            response.message || 'При очищении корзины произошла ошибка'
          );
        }
      } catch (error) {
        appMessageStore.openWithTimer('error', error.message, 'error');

        return error;
      }
    },

    async getCart() {
      try {
        const response = await useCustomFetch('apissz/GetCart');
        if (response.success) {
          this.cartId = response.data.id;
          this.cartCount = response.data.qtyitems;
          this.cartSum = response.data.summs;
          this.cartSumRaw = response.data.summ;
          this.cartState = response.data.state;
          this.cartItems = response.data.items;
          this.cartWeight = response.data.weight;
          this.cartContract = response.data.dg;
          return response.data;
        } else {
          throw new Error(response.message || 'Cart error');
        }
      } catch (error) {
        return error;
      }
    },
    async getShortCart() {
      try {
        const response = await useCustomFetch('apissz/GetCartShortInfo');
        if (response.success) {
          this.cartCount = response.data.qtyitems;
          this.cartSum = response.data.summs;
          this.cartSumRaw = response.data.summ;
          this.cartState = response.data.state;
        } else {
          throw new Error(response.message || 'Cart error');
        }
      } catch (error) {
        console.log(error.message);
      }
    },
    async changeCount(product, count) {
      const appMessageStore = useAppMessage();

      try {
        const response = await useCustomFetch(
          `apissz/ChangeCartItem/?gcode=${product}&qty=${count}`
        );

        if (response.success) {
          return response.data;
        } else {
          throw new Error(
            response.message || 'При изменении количества произошла ошибка'
          );
        }
      } catch (error) {
        appMessageStore.openWithTimer('error', error.message, 'error');
        return error;
      }
    },
    async changeContractInCart(code) {
      try {
        const response = await useCustomFetch(
          `apissz/SelectDg/?dgCode=${code}`
        );

        if (response.success) {
          return response;
        } else {
          throw new Error(
            response.message || 'При выборе договора произошла ошибка'
          );
        }
      } catch (error) {
        return error;
      }
    },
    async cartConfirm(payMethod, comment, address, tip) {
      const { API_BASE_URL } = useConfig();
      try {
        // CartToOrd/?pay=бн&cmnt=...&address=...
        // const response = await useCustomFetch(`apissz/CartToOrd/?pay=бн&cmnt=...&address=...`)
        /*
        для заказа tip=ord, 
        для черновика tip=draft, 
        для прайса tip=price
        */
        const response = await fetch(
          `${API_BASE_URL}apissz/CartToOrd/?pay=${payMethod}&cmnt=${comment}&address=${address}&tip=${tip}`,
          {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
          }
        );
        const data = await response.json();
        if (data.success) {
          // console.log("Confirm order", data);
          return data.data;
        } else {
          throw new Error(
            data.message || 'При подтверждении заказа произошла ошибка'
          );
        }
      } catch (error) {
        return error;
      }
    },
  },
});
