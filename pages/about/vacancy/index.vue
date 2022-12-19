<template>
  <div class="container">
    <div class="post-wrapper">
      <app-breadcrumbs :breadcrumbs="breadcrumbs" position="center" />
      <h1 class="text-center">Вакансии</h1>
      <div class="grid grid-cols-12">
        <div class="col-start-1 col-end-13 xl:col-start-3 xl:col-end-11">
          <p>
            Сантехкомплект-Урал в топ-20 компаний из Екатеринбурга в списке
            лучших работодателей страны. Наша компания уделяет, большое внимание
            развитию персонала. У наших сотрудников есть возможность участвовать
            в проектном управлении компании, возможность карьерного и
            профессионального роста, внутреннего и внешнего обучения.
          </p>
          <p>
            Наша компания уделяет, большое внимание развитию персонала. У наших
            сотрудников есть возможность участвовать в проектном управлении
            компании, возможность карьерного и профессионального роста,
            внутреннего и внешнего обучения.
          </p>
          <p>
            Для повышения профессионального уровня сотрудников мы постоянно
            проводим различные мероприятия, направленные на развитие навыков,
            необходимых для успешного выполнения работы, стремимся предоставлять
            возможности профессионального и карьерного роста, реализовать
            творческий потенциал, обучать и удерживать лучших сотрудников.
          </p>
          <img
            class="w-full max-w-4xl my-4 border border-gray-300"
            src="/images/vacancies_page_.jpg"
            alt="Почему я работаю в Сантехкомплект-Урал"
          />
          <h2>Менеджер по подбору персонала</h2>
          <p>
            Вы можете узнать о наличии вакансий или отправить резюме по
            электронной почте
          </p>
          <div
            class="flex flex-col sm:flex-row space-y-6 space-x-0 sm:space-x-6 sm:space-y-0"
          >
            <div class="p-5 rounded-lg space-y-2 border border-gray-300 w-full">
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
            <div class="p-5 rounded-lg space-y-2 border border-gray-300 w-full">
              <div class="text-lg font-medium">Бондарчук Анастасия</div>
              <div>+7&nbsp;(912)&nbsp;213-34-34</div>
              <div>
                <a target="_blank" href="mailto:bond@santur.ru"
                  >bond@santur.ru</a
                >
              </div>
            </div>
          </div>
          <h2>Открытые вакансии</h2>
          <p>
            <NuxtLink
              target="_blank"
              to="https://ekaterinburg.hh.ru/employer/40785"
              >Актуальные вакансии</NuxtLink
            >
            на hh.ru
          </p>
          <div v-if="isVacancyError">
            <p>При загрузке вакансий произошла ошибка</p>
            <div class="mt-6">
              <AppButton @click="$router.go(0)">Обновить страницу</AppButton>
            </div>
          </div>
          <div v-else class="divide-y divide-gray-300 my-4">
            <div
              v-for="item in vacancy"
              :key="item.ID"
              class="flex text-left space-x-2 justify-between items-center w-full p-4 md:p-5 bg-slate-150"
            >
              <div class="text-base md:text-lg font-medium">
                <span class="text-sm md:text-base block font-normal mb-1">{{
                  item.custom_fields[0][1].value
                }}</span>
                <NuxtLink
                  class="text-gray-900 no-underline"
                  :to="`/about/vacancy/${item.ID}`"
                  ><div v-html="useHTMLDecoding(item.post_title)"></div
                ></NuxtLink>
              </div>
              <span>
                <ArrowForvardIcon_24 />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import AppBreadcrumbs from "@/components/AppBreadcrumbs.vue";
import ArrowForvardIcon_24 from "~~/components/UI/Icons/ArrowForvardIcon_24.vue";
import AppButton from "~~/components/UI/Buttons/AppButton.vue";
const pageDescr =
  "Сантехкомплект-Урал в топ-20 компаний из Екатеринбурга в списке лучших работодателей страны. Наша компания уделяет, большое внимание развитию персонала. У наших сотрудников есть возможность участвовать в проектном управлении компании, возможность карьерного и профессионального роста, внутреннего и внешнего обучения.";

useHead({
  title: "Вакансии в компании",
  meta: [{ name: "description", content: pageDescr }],
});

const { API_ADMIN } = useConfig();

const vacancy = ref([]);
const isVacancyError = ref(false);

const breadcrumbs = [{ name: "Вакансии", url: "/about/vacancy" }];

async function fetchVacancy() {
  isVacancyError.value = false;
  try {
    const response = await $fetch("post/vakansii", {
      baseURL: API_ADMIN,
      method: "post",
      credentials: "include",
    });

    // for test
    let tmpArr = [];

    tmpArr = response.items.map((el) => {
      return { ...el, custom_fields: Object.entries(el.custom_fields) };
    });

    if (response) {
      vacancy.value = tmpArr;
    }
  } catch (error) {
    console.log(error.message);
    isVacancyError.value = true;
  }
}

await fetchVacancy();
</script>
