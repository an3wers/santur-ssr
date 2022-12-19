<template>
  <div class="container">
    <Head>
      <Title>
        {{ useHTMLDecoding(vacancy.data?.post_title)}}
      </Title>
    </Head>
    <div v-if="vPending">
      <PageLoader />
    </div>
    <div v-else class="post-wrapper">
      <AppPageError v-if="vError" />
      <div v-else>
        <app-breadcrumbs :breadcrumbs="breadcrumbs" />
        <h1>
          <span v-html="useHTMLDecoding(vacancy.data?.post_title)"></span>
        </h1>
        <div class="grid grid-cols-12 gap-6">
          <div class="col-span-12 lg:col-span-8">
            <div v-html="useHTMLDecoding(vacancy.data?.post_content)"></div>
          </div>
          <div class="col-span-12 lg:col-span-4">
            <div
              class="flex flex-col space-y-4 bg-slate-100 py-6 px-6 rounded-xl relative lg:sticky top-4"
            >
              <div class="text-2xl font-bold">Откликнуться на вакансию</div>
              <div>Менеджеры по подбору персонала</div>
              <div class="p-4 rounded-lg space-y-2 bg-white shadow-sm">
                <div class="text-lg font-medium">Чистякова Вероника</div>
                <div>
                  +7&nbsp;(343)&nbsp;270-27-55, +7&nbsp;(953)&nbsp;052-19-20
                </div>
                <div>
                  <a target="_blank" href="mailto:chvv@santur.ru"
                    >chvv@santur.ru</a
                  >
                </div>
              </div>
              <div class="p-4 rounded-lg space-y-2 bg-white shadow-sm">
                <div class="text-lg font-medium">Бондарчук Анастасия</div>
                <div>+7&nbsp;(912)&nbsp;213-34-34</div>
                <div>
                  <a target="_blank" href="mailto:bond@santur.ru"
                    >bond@santur.ru</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { watch } from "vue";
import { useRoute } from "vue-router";
import AppPageError from "@/components/AppPageError.vue";
import PageLoader from "@/components/loaders/PageLoader.vue";
import AppBreadcrumbs from "@/components/AppBreadcrumbs.vue";

const breadcrumbs = [{ name: "Вакансии", url: "/about/vacancy" }, {}];

const route = useRoute();
const id = route.params.id;
const { API_ADMIN } = useConfig();

const {
  pending: vPending,
  error: vError,
  data: vacancy,
} = useLazyAsyncData("vacancy", () =>
  $fetch(`${API_ADMIN}post/detail`, {
    method: "post",
    credentials: "include",
    body: {
      ID: id,
    },
  })
);

watch(vacancy, async (newVal) => {
  const data = await newVal.data
  if (!data) {
    console.log("newVal", newVal.data);
    throw createError({
      statusCode: 404,
      fatal: true,
      statusMessage: "Page not found",
    });
  }
});

if (vError.value) {
  throw createError({
    statusCode: vError.value.name,
    fatal: true,
    statusMessage: vError.value.message,
  });
}
</script>
