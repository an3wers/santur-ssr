<template>
  <div class="container">
    <Head>
      <Title>{{ brand?.name }}</Title>
    </Head>

    <app-breadcrumbs :breadcrumbs="breadcrumbs" />
    <div class="grid grid-cols-12">
      <div class="col-span-12 lg:col-span-8 xl:col-span-9">
        <div class="flex justify-between items-start">
          <h1>{{ brand?.name }}</h1>
          <!-- logo -->
        </div>
      </div>
    </div>

    <div class="grid grid-cols-12 gap-6">
      <div
        class="order-2 lg:order-1 col-span-12 lg:col-span-8 xl:col-span-9 post-wrapper"
      >
        <!-- category -->

        <div
          v-if="brand.categories.length"
          class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
        >
          <div
            v-for="item in brand.categories"
            :key="item.tk_id"
            class="rounded-2xl border border-gray-300 h-full"
          >
            <NuxtLink
              :to="`/catalog/${item.tk_id}?Бренд=${brand.name}`"
              class="no-underline text-gray-900 flex items-center justify-between space-x-2 px-5 py-4"
            >
              <div class="text-[0.9375rem] font-medium">
                {{ item.name }}
              </div>
              <div class="shrink-0 w-24 h-24">
                <img
                  class="object-contain w-full h-full"
                  :src="item.imgpath"
                  :alt="item.name"
                />
              </div>
            </NuxtLink>
          </div>
        </div>

        <!-- # category -->
        <!-- description -->
        <div class="mt-10" v-if="brand.descr">
          <div v-html="brand.descr"></div>
        </div>
        <!-- # description -->
      </div>
      <div class="order-1 lg:order-2 col-span-12 lg:col-span-4 xl:col-span-3">
        <div class="p-6 rounded-xl bg-slate-100">
          <h2 class="!mt-0">Документы</h2>
          <ul v-if="brand?.files.length" class="space-y-4">
            <li v-for="(item, index) in brand.files" :key="index">
              <NuxtLink :to="item.url" class="flex items-start space-x-2">
                <span><file-icon-24 color="#1976D2" /></span>
                <span>{{ item.categoty }}</span>
              </NuxtLink>
            </li>
          </ul>
          <div v-else>Список документов пуст</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useAppMessage } from '@/stores/appMessage';
import FileIcon24 from '@/components/UI/Icons/FileIcon_24.vue';

const brand = ref(null);
const { open: setError, openWithTimer } = useAppMessage();
const route = useRoute();

async function fetchBrand(alias) {
  try {
    const response = await useCustomFetch(
      `apissz/GetBrendByAlias/?alias=${alias}`
    );

    if (response.success) {
      brand.value = response.data;
    } else {
      throw new Error(
        response.message || 'При загрузке бренда произошла ошибка'
      );
    }
  } catch (error) {
    setError('error', error.message, 'error');
  }
}

await fetchBrand(route.params.alias);

const breadcrumbs = [{ name: 'Наши бренды', url: '/clients/brands' }, {}];
</script>
