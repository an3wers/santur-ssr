<template>
  <div class="news-preview">
    <NuxtLink
      class="news-preview__link no-underline text-gray-900 hover:text-primary"
      :to="`/about/news/${news?.ID}`"
    >
      <div class="font-medium text-gray-500 mb-1">
        {{ useDateFormatter(news?.post_date) }}
      </div>
      <div class="font-medium text-xl mb-2">
        {{ news?.post_title }}
      </div>
      <div v-if="news.post_description" class="text-gray-900">
        <div v-html="useHTMLDecoding(news?.post_description)"></div>
      </div>
    </NuxtLink>
  </div>
</template>

<script setup>
// import { useDateFormatter } from "@/utils/helpers";

const props = defineProps({
  news: {
    type: Object,
    default: {},
  },
});
</script>
