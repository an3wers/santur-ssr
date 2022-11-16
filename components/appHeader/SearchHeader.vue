<template>
  <div class="header__search grow relative">
    <form @submit.prevent="searchRequestSubmit" class="relative">
      <input
        ref="searchField"
        :value="mainStore.searchValueStore"
        @input="searchHandler($event.target.value)"
        @focus="inputFocusHandler"
        class="pl-2 pr-6 py-2 lg:pl-4 lg:pr-10 lg:py-2.5 text-base lg:text-lg leading-5 w-full rounded-md border form-input bg-transparent border-gray-300 focus:border-primary focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:bg-gray-100 disabled:text-gray-500"
        type="text"
        placeholder="Найти товары"
      />
      <!-- @blur="inputBlurHandler" -->
      <span
        v-if="isClearBtn"
        @click="clearSearchHandler"
        class="absolute right-[40px] top-[7.5px] lg:right-[64px] lg:top-[13px] cursor-pointer"
      >
        <close-icon-24 color="#6b7280" />
      </span>
      <app-button-icon
        type="submit"
        class="hidden lg:block absolute search-icon"
        ><search-icon-24 color="#ffffff"
      /></app-button-icon>
      <app-button-icon
        type="submit"
        btnSize="xs"
        class="block lg:hidden absolute search-icon !top-[4px]"
        ><search-icon-20 color="#ffffff"
      /></app-button-icon>
    </form>
    <!-- search results -->
    <div
      v-if="mainStore.searchResultStore.length && isResultSearch"
      ref="searchResultContainer"
      class="search-result absolute р-44 bg-white w-full shadow-lg px-2 py-6 z-10 rounded-b-lg"
    >
      <ul
        class="min-h-16 max-h-[400px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-200 scrollbar-thumb-rounded-md"
      >
        <li
          v-for="item in mainStore.searchResultStore"
          @click="routeHandler(item.tk_id)"
          class="py-2 px-2 block rounded-md hover:bg-slate-100 hover:text-primary mr-2 cursor-pointer"
        >
          {{ item.tk_name }}
        </li>
      </ul>
    </div>
    <!-- # search results -->
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import SearchIcon24 from '@/components/UI/Icons/SearchIcon_24.vue';
import SearchIcon20 from '@/components/UI/Icons/SearchIcon_20.vue';
import AppButtonIcon from '@/components/UI/Buttons/AppButtonIcon.vue';
import CloseIcon24 from '@/components/UI/Icons/CloseIcon_24.vue';
// import { useCustomFetch } from "@/utils/fetch";
import { useMainStore } from '@/stores/main';
import { useAppMessage } from '@/stores/appMessage';

const router = useRouter();
const route = useRoute();
const mainStore = useMainStore();
const appMessage = useAppMessage();

mainStore.searchValueStore = route?.query?.search || '';

const isResultSearch = ref(false);
const searchResultContainer = ref(null);
const searchField = ref(null);

const isClearBtn = computed(() => {
  return route?.query?.search || mainStore.searchValueStore || '';
});

function clearSearchHandler() {
  if (route.params.id) {
    router.push({ path: `/catalog/${route.params.id}`, query: null });
  }
  if (route.path === '/search') {
    router.push({ path: '/', query: null });
  }
  mainStore.searchValueStore = '';
  mainStore.searchResultStore = [];
}

watch(route, () => {
  isResultSearch.value = false;
});

const hideResult = (e) => {
  if (searchResultContainer.value && searchField.value) {
    if (
      !searchResultContainer.value.contains(e.target) &&
      !searchField.value.contains(e.target)
    ) {
      isResultSearch.value = false;
      window.removeEventListener('click', hideResult);
    }
  }
};

watch(isResultSearch, (newVal, oldVal) => {
  if (newVal) {
    window.addEventListener('click', hideResult);
  }
  if (!newVal) {
    window.removeEventListener('click', hideResult);
  }
});

function inputFocusHandler() {
  if (mainStore.searchValueStore && mainStore.searchResultStore.length) {
    isResultSearch.value = true;
  }
}

onMounted(() => {
  if (isResultSearch.value) {
    window.addEventListener('click', (e) => {
      console.log(e.target);
    });
  }
});

const timer = ref(true);

function searchHandler(value) {
  mainStore.searchValueStore = value;

  if (mainStore.searchValueStore) {
    isResultSearch.value = true;

    if (timer.value) {
      clearTimeout(timer.value);
      timer.value = null;
    }

    timer.value = setTimeout(async () => {
      try {
        const res = await useCustomFetch(
          `apissz/quicksearch/?search=${mainStore.searchValueStore}`
        );

        if (res.success) {
          mainStore.searchResultStore = res.data;
        } else {
          throw new Error(res.message || 'При поиске произошла ошибка');
        }
      } catch (error) {
        // console.log(error);
        appMessage.open('error', error.message, 'error');
      }
      clearTimeout(timer.value);
    }, 700);
  }
}

async function searchRequestSubmit() {
  if (mainStore.searchValueStore) {
    router.push({
      path: '/search',
      query: { search: mainStore.searchValueStore },
    });
    isResultSearch.value = false;
  }
}

function routeHandler(id) {
  router.push({
    path: `/catalog/${id}`,
    query: { search: mainStore.searchValueStore },
  });
}
</script>
