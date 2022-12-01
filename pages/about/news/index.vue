<template>
  <div class="container">
    <app-breadcrumbs :breadcrumbs="breadcrumbs" position="center" />
    <h1 class="text-center">Новости компании</h1>
    <!-- Перебор новостей + постраничная навигация -->

    <div v-if="!isError && isNewsLoaded" class="grid grid-cols-12">
      <div class="col-start-1 col-end-13 xl:col-start-3 xl:col-end-11 relative">
        <div v-if="news.length" class="space-y-10 mb-6">
          <news-preview v-for="item in news" :key="item.ID" :news="item" />
        </div>

        <div v-else>
          <p>Не найдено ни одной новости</p>
        </div>

        <page-loader v-if="!isUpdated" />

        <app-pagination
          v-if="isPagination"
          :current="page"
          :countPages="countPages"
          @change="setPageHandler"
        />
      </div>
    </div>

    <page-loader v-if="!isNewsLoaded" />
    <app-page-error v-if="isError && isNewsLoaded" />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import NewsPreview from '@/components/news/NewsPreview.vue';
import AppPageError from '@/components/AppPageError.vue';
import PageLoader from '@/components/loaders/PageLoader.vue';
import AppBreadcrumbs from '@/components/AppBreadcrumbs.vue';
import AppPagination from '@/components/AppPagination.vue';
import { useAppMessage } from '@/stores/appMessage';

useHead({
  title: 'Новости компании',
});

const { API_ADMIN } = useConfig();
const appMessageStore = useAppMessage();
const news = ref([]);
const isError = ref(false);
const isNewsLoaded = ref(false);
const isUpdated = ref(true);
const route = useRoute();
const page = ref(+route.query.page || 1);
const countPages = ref(1);

const setNewsParams = {
  filters: {
    category: {
      name: 'Категория',
      all_filters: [],
      current_filters: [
        {
          ID: '21',
          name: 'Новости',
          value: true,
        },
      ],
    },
  },
};

async function loadNews(page) {
  isError.value = false;
  try {
    const res = await $fetch('post/news', {
      baseURL: API_ADMIN,
      method: 'post',
      credentials: 'include',
      body: { page: page, search: '', ...setNewsParams },
    });
    news.value = res.items;
    countPages.value = res.all_pages_count;
    if (appMessageStore.isShow) {
      appMessageStore.close();
    }
  } catch (error) {
    console.log(error);
    isError.value = true;
    appMessageStore.open('error', 'На странице произошла ошибка', 'error');
  } finally {
    isNewsLoaded.value = true;
  }
}

const isPagination = computed(() => {
  return countPages.value > 1;
});

await loadNews(page.value);

const breadcrumbs = [{ name: 'Новости', url: '/about/news' }];

async function setPageHandler(p) {
  // console.log(page);
  isUpdated.value = false;
  page.value = p;

  const queryStr = `page=${page.value}`;

  window.history.pushState(
    null,
    document.title,
    `${window.location.pathname}?${queryStr}`
  );

  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
  await loadNews(page.value);
  isUpdated.value = true;
}
</script>
