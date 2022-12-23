<template>
  <div class="mb-8">
    <div class="space-y-1 px-1 pt-1 pb-2 lg:pb-1 overflow-y-auto">
      <div class="flex space-x-1 min-w-[760px]">
        <button
          @click="handleChar(all.name, null)"
          class="py-1 text-sm px-1 rounded-md disabled:opacity-70 border border-transparent hover:bg-blue-100 focus:outline-none focus:ring-blue-500 focus:ring focus:ring-opacity-20"
          :class="active === all.name ? 'bg-blue-100' : 'bg-transparent'"
        >
          {{ all.name }}
        </button>
        <button
          @click="handleChar(item.name, item.lng)"
          class="py-1 text-sm px-1 rounded-md disabled:opacity-70 border border-transparent hover:bg-blue-100 focus:outline-none focus:ring-blue-500 focus:ring focus:ring-opacity-20"
          :class="active === item.name ? 'bg-blue-100' : 'bg-transparent'"
          v-for="(item, index) in latinChars"
          :key="index"
        >
          {{ item.name }}
        </button>
        <!-- <button
        @click="handleChar(nums.name, null)"
        class="py-1 text-sm px-1 rounded-md disabled:opacity-70 border border-transparent hover:bg-blue-100 focus:outline-none focus:ring-blue-500 focus:ring focus:ring-opacity-20"
        :class="nums.isActive ? 'bg-blue-100' : 'bg-transparent'"
      >
        {{ nums.name }}
      </button> -->
      </div>
      <div class="flex space-x-1">
        <button
          @click="handleChar(item.name, item.lng)"
          class="py-1 text-sm px-1 rounded-md disabled:opacity-70 border border-transparent hover:bg-blue-100 focus:outline-none focus:ring-blue-500 focus:ring focus:ring-opacity-20"
          :class="active === item.name ? 'bg-blue-100' : 'bg-transparent'"
          v-for="(item, index) in cyrillicChars"
          :key="index"
        >
          {{ item.name }}
        </button>
      </div>
    </div>
    <!-- checkbox -->
    <div
      class="py-2.5 mt-4 border-t border-b border-gray-300 flex flex-col md:flex-row justify-between items-start md:items-center space-x-0 md:space-x-6 space-y-4 md:space-y-0"
    >
      <label class="relative cursor-pointer inline-flex items-center">
        <input
          type="checkbox"
          @change="$emit('handleHaveSert', $event.target.checked)"
          :checked="sertValue"
          class="sr-only peer"
        />
        <div
          class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-0 peer-focus:ring-offset-0 peer-focus:ring-opacity-50 peer-focus:ring-blue-200 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"
        ></div>
        <span class="ml-2">Есть сертификат дилера</span>
      </label>
      <div class="relative w-full md:w-[400px]">
        <form @submit.prevent="onSearch">
          <input
            type="text"
            class="w-full rounded-md border form-input disabled:text-gray-500 py-2 text-base pl-3 pr-14 leading-5 bg-transparent border-gray-300 focus:border-primary focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:bg-gray-100"
            placeholder="Найти по названию..."
            v-model="brandSearchValue"
            @input="$emit('handleSearchValue', brandSearchValue)"
          />
          <button v-if="!isRemoveSearchValue" type="submit" class="absolute right-[12px] top-[9px]">
            <search-icon-20 color="#1976D2" />
          </button>
          <button
            type="button"
            @click="onCleanSearchValue"
            v-else
            class="absolute right-[12px] top-[9px]"
          >
            <close-icon-20 color="#6b7280" />
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import CloseIcon20 from "@/components/UI/Icons/CloseIcon_20.vue";
import SearchIcon20 from "@/components/UI/Icons/SearchIcon_20.vue";

const emits = defineEmits([
  "changeChar",
  "handleHaveSert",
  "handleSearchValue",
  "handleSearchBrand",
  "handleCleanSearchValue",
]);

const props = defineProps({
  active: {
    type: String,
    default: "Все",
  },
  onlyHaveSert: {
    type: Boolean,
    default: false,
  },
  searchValue: {
    type: String,
    default: "",
  },
});

const all = ref({
  name: "Все",
  isActive: true,
});

const latinChars = ref([
  {
    name: "A",
    isActive: false,
    lng: "eng",
  },
  {
    name: "B",
    isActive: false,
    lng: "eng",
  },
  {
    name: "C",
    isActive: false,
    lng: "eng",
  },
  {
    name: "D",
    isActive: false,
    lng: "eng",
  },
  {
    name: "E",
    isActive: false,
    lng: "eng",
  },
  {
    name: "F",
    isActive: false,
    lng: "eng",
  },
  {
    name: "G",
    isActive: false,
    lng: "eng",
  },
  {
    name: "H",
    isActive: false,
    lng: "eng",
  },
  {
    name: "I",
    isActive: false,
    lng: "eng",
  },
  {
    name: "J",
    isActive: false,
    lng: "eng",
  },
  {
    name: "K",
    isActive: false,
    lng: "eng",
  },
  {
    name: "L",
    isActive: false,
    lng: "eng",
  },
  {
    name: "M",
    isActive: false,
    lng: "eng",
  },
  {
    name: "N",
    isActive: false,
    lng: "eng",
  },
  {
    name: "O",
    isActive: false,
    lng: "eng",
  },
  {
    name: "P",
    isActive: false,
    lng: "eng",
  },
  {
    name: "Q",
    isActive: false,
    lng: "eng",
  },
  {
    name: "R",
    isActive: false,
    lng: "eng",
  },
  {
    name: "S",
    isActive: false,
    lng: "eng",
  },
  {
    name: "T",
    isActive: false,
    lng: "eng",
  },
  {
    name: "U",
    isActive: false,
    lng: "eng",
  },
  {
    name: "V",
    isActive: false,
    lng: "eng",
  },
  {
    name: "W",
    isActive: false,
    lng: "eng",
  },
  {
    name: "X",
    isActive: false,
    lng: "eng",
  },
  {
    name: "Y",
    isActive: false,
    lng: "eng",
  },
  {
    name: "Z",
    isActive: false,
    lng: "eng",
  },
]);

const cyrillicChars = ref([
  {
    name: "А",
    isActive: false,
    lng: "rus",
  },
  {
    name: "Б",
    isActive: false,
    lng: "rus",
  },
  {
    name: "В",
    isActive: false,
    lng: "rus",
  },
  {
    name: "Г",
    isActive: false,
    lng: "rus",
  },
  {
    name: "Д",
    isActive: false,
    lng: "rus",
  },
  {
    name: "Е",
    isActive: false,
    lng: "rus",
  },
  {
    name: "Ё",
    isActive: false,
    lng: "rus",
  },
  {
    name: "Ж",
    isActive: false,
    lng: "rus",
  },
  {
    name: "З",
    isActive: false,
    lng: "rus",
  },
  {
    name: "И",
    isActive: false,
    lng: "rus",
  },
  {
    name: "Й",
    isActive: false,
    lng: "rus",
  },
  {
    name: "К",
    isActive: false,
    lng: "rus",
  },
  {
    name: "Л",
    isActive: false,
    lng: "rus",
  },
  {
    name: "М",
    isActive: false,
    lng: "rus",
  },
  {
    name: "Н",
    isActive: false,
    lng: "rus",
  },
  {
    name: "О",
    isActive: false,
    lng: "rus",
  },
  {
    name: "П",
    isActive: false,
    lng: "rus",
  },
  {
    name: "Р",
    isActive: false,
    lng: "rus",
  },
  {
    name: "С",
    isActive: false,
    lng: "rus",
  },
  {
    name: "Т",
    isActive: false,
    lng: "rus",
  },
  {
    name: "У",
    isActive: false,
    lng: "rus",
  },
  {
    name: "Ф",
    isActive: false,
    lng: "rus",
  },
  {
    name: "Х",
    isActive: false,
    lng: "rus",
  },
  {
    name: "Ц",
    isActive: false,
    lng: "rus",
  },
  {
    name: "Ш",
    isActive: false,
    lng: "rus",
  },
  {
    name: "Щ",
    isActive: false,
    lng: "rus",
  },
  {
    name: "Ъ",
    isActive: false,
    lng: "rus",
  },
  {
    name: "Ы",
    isActive: false,
    lng: "rus",
  },
  {
    name: "Ь",
    isActive: false,
    lng: "rus",
  },
  {
    name: "Э",
    isActive: false,
    lng: "rus",
  },
  {
    name: "Ю",
    isActive: false,
    lng: "rus",
  },
  {
    name: "Я",
    isActive: false,
    lng: "rus",
  },
]);

const nums = ref({
  name: "0 - 9",
  isActive: false,
});

const sertValue = ref(props.onlyHaveSert);

const brandSearchValue = ref(props.searchValue);

const isRemoveSearchValue = computed(() => {
  return brandSearchValue.value;
});

function handleChar(char, lang) {
  if (lang) {
    nums.value.isActive = false;
    all.value.isActive = false;

    if (lang === "rus") {
      latinChars.value.forEach((el) => {
        el.isActive = false;
      });
      cyrillicChars.value = cyrillicChars.value.map((el) => {
        return { ...el, isActive: el.name === char ? true : false };
      });
    } else {
      cyrillicChars.value.forEach((el) => {
        el.isActive = false;
      });
      latinChars.value = latinChars.value.map((el) => {
        return { ...el, isActive: el.name === char ? true : false };
      });
    }
  } else {
    latinChars.value.forEach((el) => {
      el.isActive = false;
    });
    cyrillicChars.value.forEach((el) => {
      el.isActive = false;
    });

    if (char === "Все") {
      nums.value.isActive = false;
      all.value.isActive = true;
    } else {
      nums.value.isActive = true;
      all.value.isActive = false;
    }
  }
  emits("changeChar", char, lang);
}

function onSearch() {
  emits("handleSearchBrand", brandSearchValue.value);
}

function onCleanSearchValue() {
  emits("handleCleanSearchValue");
  brandSearchValue.value = "";
}
</script>
