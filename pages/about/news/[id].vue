<template>
  <div class="container">
    <div class="post-wrapper" v-if="postIsLoaded && !isError">
      <app-breadcrumbs :breadcrumbs="breadcrumbs" />
      <h1>{{ post.post_title }}</h1>
      <div class="grid grid-cols-12 gap-6">
        <div class="col-span-12 xl:col-span-8">
          <!-- <div v-if="getContent" v-html="getContent"></div> -->
          <!-- <div v-html="decodeHTMLEntities(getContent)"></div> -->
          <div v-html="parse(getContent)"></div>
        </div>
      </div>
    </div>
    <page-loader v-if="!postIsLoaded" />
    <app-page-error v-if="isError && postIsLoaded" />
  </div>
</template>

<script setup>
// import axios from "axios";
import { computed, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import AppPageError from '@/components/AppPageError.vue';
import PageLoader from '@/components/loaders/PageLoader.vue';
import AppBreadcrumbs from '@/components/AppBreadcrumbs.vue';

const route = useRoute();
const router = useRouter();
const postIsLoaded = ref(false);
const isError = ref(false);
const post = ref(null);

async function loadPost(id) {
  try {
    postIsLoaded.value = false;
    // https://localhost:7168/api/post/detail {"ID":4}
    const res = await $fetch('http://10.10.10.77:5168/api/post/detail', {
      method: 'post',
      credentials: 'include',
      body: { ID: id },
    });

    if (res.data) {
      post.value = res.data;
      isError.value = false;
      //   console.log('POST', res);
    } else {
      router.push({ name: 'NotFound' });
    }
  } catch (error) {
    console.log(error);
    isError.value = true;
  } finally {
    postIsLoaded.value = true;
  }
}

await loadPost(route.params.id);

function decodeHTMLEntities(text) {
  let textArea = document.createElement('textarea');
  textArea.innerHTML = text;
  return textArea.value;
}

function parse(str) {
  //.Replace("&", "&amp;").Replace("\"", "&quot;").Replace("'", "&apos;").Replace(">", "&gt;").Replace("<", "&lt;");

  return str
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&amp;/g, '&');
}

const getContent = computed(() => {
  let tmp = post.value.post_content.replace(
    /\\\\r|\\\\n|\\\\t|\\n|\\t|\\r/g,
    ''
  );

  // console.log(tmp);

  return tmp;
});

const breadcrumbs = [{ name: 'Новости', url: '/about/news' }, {}];
</script>
