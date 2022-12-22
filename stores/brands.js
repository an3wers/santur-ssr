import { defineStore } from 'pinia';
import { useMainStore } from './main';
import { useAppMessage } from './appMessage';

export const useBrandStore = defineStore('brands', {
  state: () => {
    return {
      allBrands: [],
      onlyHaveSert: false,
      searchValue: ''
    };
  },
  getters: {
    getBrands(state) {

      if(state.onlyHaveSert) {
        return state.allBrands.map(el => {

          const brands = el.brands.filter(b => b.fileSertDil == true)
          if(brands.length) {
             return {letter: el.letter, brands}
          }

        }).filter(el => !!el)
      } else {
        return state.allBrands
      }
      
    },
  },
  actions: {
    async fetchBrands(char = '', search = '') {
      // GetListBrends/?letter=...&search=...

      const mainStore = useMainStore();
      const { open: setError } = useAppMessage();
      try {
        mainStore.pageError = false;

        const response = !char
          ? await useCustomFetch(`apissz/GetListBrends/?search=${search}`)
          : await useCustomFetch(`apissz/GetListBrends/?letter=${char}&search=${search}`);

        if (response.success) {
          this.allBrands = brandsGroupByChar(response.data.brends) ;
        } else {
          throw new Error(
            response.message || 'При загрузке брендов произошла ошибка'
          );
        }
      } catch (error) {
        setError('error', error.message, 'error');
        mainStore.pageError = true;
      }
    },
  },
});

function brandsGroupByChar(array) {
  // TODO аптимизировать функцию
  let result = [];
  if (array.length) {
    const groupByChar = array.reduce((acc, brand) => {
      const { letter } = brand;
      acc[letter] = acc[letter] ? acc[letter] : [];
      acc[letter].push(brand);
      return acc;
    }, {});

    result = Object.entries(groupByChar).map((el) => {
      const [symb, brands] = el;
      const tmp = {};
      tmp.letter = symb;
      tmp.brands = brands;

      return tmp;
    });

    return result;
  }
  return [];
}
