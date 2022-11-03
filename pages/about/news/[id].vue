<template>
  <div class="container">
    <div class="post-wrapper" v-if="postIsLoaded && !isError">
      <app-breadcrumbs :breadcrumbs="breadcrumbs" position="center" />
      <h1 class="text-center">{{ post?.post_title }}</h1>
      <div class="grid grid-cols-12">
        <div class="col-start-1 col-end-13 xl:col-start-3 xl:col-end-11">
          <div class="text-gray-500 font-medium mb-2">
            {{ useDateFormatter(post?.post_date) }}
          </div>
          <div v-html="useHTMLDecoding(post?.post_content)"></div>
        </div>
      </div>
    </div>
    <page-loader v-if="!postIsLoaded" />
    <app-page-error v-if="isError && postIsLoaded" />
  </div>
</template>

<script setup>
import { computed, ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import AppPageError from '@/components/AppPageError.vue';
import PageLoader from '@/components/loaders/PageLoader.vue';
import AppBreadcrumbs from '@/components/AppBreadcrumbs.vue';

const { API_ADMIN } = useConfig();
const route = useRoute();
const postIsLoaded = ref(false);
const isError = ref(false);
const post = ref(null);

async function loadPost(id) {
  try {
    postIsLoaded.value = false;
    // https://localhost:7168/api/post/detail {"ID":4}
    const res = await $fetch(`${API_ADMIN}api/post/detail`, {
      method: 'post',
      credentials: 'include',
      body: { ID: id },
    });

    if (res.data) {
      post.value = res.data;
      isError.value = false;
    } else {
      throw new Error('На странице произошла ошибка');
    }
  } catch (error) {
    isError.value = true;
  } finally {
    postIsLoaded.value = true;
  }
}

await loadPost(route.params.id);

onMounted(() => {
  if (!post?.value?.ID) {
    navigateTo({ path: '/404' });
  }
});

const breadcrumbs = [{ name: 'Новости', url: '/about/news' }, {}];
</script>
