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
            class="w-full max-w-4xl mx-auto my-4"
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
          <AccordionWrapper
            v-if="vacancy.length"
            @itemHandler="accordionItemHandler"
          >
            <AccordionItem v-for="item in vacancy" :key="item.ID" :id="item.ID">
              <template #title>
                <div class="text-base md:text-lg font-medium">
                  <span class="text-sm md:text-base block font-normal mb-1"
                    >...</span
                  >
                  <div v-html="useHTMLDecoding(item.post_title)"></div>
                </div>
              </template>
              <template #content>
                <div v-if="singleIsLoading">
                  <AppLoader />
                </div>
                <div v-else v-html="useHTMLDecoding(singleVacancy?.post_content)">
                  
                </div>
              </template>
            </AccordionItem>
            <!-- <AccordionItem id="v1">
              <template #title>
                <div class="text-base md:text-lg font-medium">
                  <span class="text-sm md:text-base block font-normal mb-1"
                    >Екатеринбург</span
                  >
                  Мерчендайзер-консультант (Гипермаркет "ДОМ" на Уралмаш)
                </div>
              </template>
              <template #content>
                <strong>Обязанности:</strong>
                <ul>
                  <li>
                    Презентация, консультация, выкладка на витрины и продажа
                    инженерной сантехники;
                  </li>
                  <li>Пополнение полок с товаром;</li>
                  <li>Ежедневный фотоотчет.</li>
                </ul>
                <strong>Требования:</strong>
                <ul>
                  <li>
                    Опыт работы на должностях с аналогичным функционалом будет
                    преимуществом;
                  </li>
                  <li>Навыки презентации;</li>
                  <li>Клиентоориентированность, трудолюбие, активность.</li>
                </ul>
                <strong>Условия</strong>
                <ul>
                  <li>Официальное трудоустройство по ТК РФ;</li>
                  <li>5/2, пн-вт выходные дни;</li>
                  <li>Место работы: ул. Победы, д. 63, Гипермаркет "ДОМ".</li>
                </ul>
              </template>
            </AccordionItem>
            <AccordionItem id="v2">
              <template #title>
                <div class="text-base md:text-lg font-medium">
                  <span class="text-sm md:text-base block font-normal mb-1"
                    >Екатеринбург</span
                  >
                  Менеджер по продажам (промышленные предприятия)
                </div>
              </template>
              <template #content>
                <strong>Обязанности:</strong>
                <ul>
                  <li>
                    привлечение целевых клиентов (промышленные предприятия);
                  </li>
                  <li>
                    проведение переговоров, заключение договоров, обсуждение
                    условий и отслеживание поставок;
                  </li>
                  <li>
                    развитие и поддержание партнерских отношений с клиентами
                    компании.
                  </li>
                </ul>
                <strong>Требования к кандидату:</strong>
                <ul>
                  <li>высшее техническое образование;</li>
                  <li>опыт работы в продажах;</li>
                  <li>
                    желательно знание ассортимента сантехнического оборудования:
                    котлы, насосы, радиаторы, водонагреватели и т.д.;
                  </li>
                  <li>
                    развитые коммуникативные навыки, активность,
                    ответственность;
                  </li>
                  <li>грамотная устная и письменная речь;</li>
                  <li>
                    уверенный пользователь MS Office, навыки работы в 1С и CRM.
                  </li>
                </ul>
                <strong>Условия</strong>
                <ul>
                  <li>официальное трудоустройство по ТК РФ;</li>
                  <li>заработная плата от 60 000 рублей (Оклад + KPI + % );</li>
                  <li>
                    возможность профессионального развития и карьерного роста
                    внутри компании;
                  </li>
                  <li>компенсация ГСМ, командировочных расходов.</li>
                </ul>
              </template>
            </AccordionItem>
            <AccordionItem id="v3">
              <template #title>
                <div class="text-base md:text-lg font-medium">
                  <span class="text-sm md:text-base block font-normal mb-1"
                    >Екатеринбург</span
                  >
                  Продавец-консультант в магазин сантехники (р-н Широкая Речка)
                </div>
              </template>
              <template #content>
                <strong>Требования:</strong>
                <ul>
                  <li>Высшее или среднее специальное образование;</li>
                  <li>
                    Опыт работы в торговом зале или в оптовых продажах
                    обязателен;
                  </li>
                  <li>Знание 1С: 8,2;</li>
                  <li>
                    Знание ассортимента сантехнического оборудования: котлы,
                    насосы, радиаторы, водонагреватели, запорная арматура -
                    обязательно;
                  </li>
                </ul>
                <strong>Обязанности:</strong>
                <ul>
                  <li>Консультирование клиентов по товару;</li>
                  <li>Подбор оборудования;</li>
                  <li>Выполнение плана продаж;</li>
                  <li>Выкладка товара, мерчендайзинг;</li>
                  <li>Выставление ценников;</li>
                  <li>Работа с браком, возвраты, кассовая дисциплина.</li>
                </ul>
                <strong>Условия</strong>
                <ul>
                  <li>официальное трудоустройство, по ТК РФ;</li>
                  <li>
                    сменный график работы: 4/2 с 09.00 до 20.00 в рабочие дни, с
                    10.00 до 18.00 в выходные дни;
                  </li>
                  <li>"БЕЛАЯ" заработная плата (оклад+ % от продаж);</li>
                  <li>
                    Место работы: р-н Широкая Речка, ул. Суходольская, д. 47,
                    м-н "Мастер-сантехник"
                  </li>
                </ul>
              </template>
            </AccordionItem> -->
          </AccordionWrapper>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import AppBreadcrumbs from "@/components/AppBreadcrumbs.vue";
import AccordionWrapper from "@/components/UI/Accordion/AccordionWrapper.vue";
import AccordionItem from "@/components/UI/Accordion/AccordionItem.vue";
import AppLoader from "@/components/loaders/AppLoader.vue";

const pageDescr =
  "Сантехкомплект-Урал в топ-20 компаний из Екатеринбурга в списке лучших работодателей страны. Наша компания уделяет, большое внимание развитию персонала. У наших сотрудников есть возможность участвовать в проектном управлении компании, возможность карьерного и профессионального роста, внутреннего и внешнего обучения.";

useHead({
  title: "Вакансии в компании",
  meta: [{ name: "description", content: pageDescr }],
});

const { API_ADMIN } = useConfig();

const vacancy = ref([]);
const singleVacancy = ref(null);
const singleIsLoading = ref(false);

const breadcrumbs = [{ name: "Вакансии", url: "/about/vacancy" }];

async function fetchVacancy() {
  try {
    const response = await $fetch('post/vakansii', {
      baseURL: API_ADMIN,
      method: "post",
      credentials: "include",
    });

    if (response) {
      vacancy.value = response.items;
    }
    // TODO: обработать ошибку
    // console.log("Вакансии",response)
  } catch (error) {
    console.log(error.message);
  }
}

await fetchVacancy();

async function accordionItemHandler(id) {
  if (id) {
    if (singleVacancy.value && singleVacancy.value.ID === id) {
      return undefined;
    } else {
      await fetchSingleVacancy(id);
    }
  }
}

async function fetchSingleVacancy(id) {
  singleIsLoading.value = true;
  try {
    const response = await $fetch('/post/detail', {
      baseURL: API_ADMIN,
      method: "post",
      credentials: "include",
      body: {
        ID: id,
      },
    });
    if (response.status === "ok") {
      singleVacancy.value = response.data;
    } else {
      throw new Error("При загрузки вакансии произошла ошибка");
    }
  } catch (error) {
    console.log(error.message);
  } finally {
    singleIsLoading.value = false;
  }
}
</script>
