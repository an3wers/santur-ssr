<template>
  <div class="space-y-1 mb-8 pb-4 lg:pb-0 overflow-y-auto">
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
</template>

<script setup>
import { ref } from 'vue';

const emits = defineEmits(['changeChar']);

defineProps({
  active: {
    type: String,
    default: 'Все',
  },
});

const all = ref({
  name: 'Все',
  isActive: true,
});

const latinChars = ref([
  {
    name: 'A',
    isActive: false,
    lng: 'eng',
  },
  {
    name: 'B',
    isActive: false,
    lng: 'eng',
  },
  {
    name: 'C',
    isActive: false,
    lng: 'eng',
  },
  {
    name: 'D',
    isActive: false,
    lng: 'eng',
  },
  {
    name: 'E',
    isActive: false,
    lng: 'eng',
  },
  {
    name: 'F',
    isActive: false,
    lng: 'eng',
  },
  {
    name: 'G',
    isActive: false,
    lng: 'eng',
  },
  {
    name: 'H',
    isActive: false,
    lng: 'eng',
  },
  {
    name: 'I',
    isActive: false,
    lng: 'eng',
  },
  {
    name: 'J',
    isActive: false,
    lng: 'eng',
  },
  {
    name: 'K',
    isActive: false,
    lng: 'eng',
  },
  {
    name: 'L',
    isActive: false,
    lng: 'eng',
  },
  {
    name: 'M',
    isActive: false,
    lng: 'eng',
  },
  {
    name: 'N',
    isActive: false,
    lng: 'eng',
  },
  {
    name: 'O',
    isActive: false,
    lng: 'eng',
  },
  {
    name: 'P',
    isActive: false,
    lng: 'eng',
  },
  {
    name: 'Q',
    isActive: false,
    lng: 'eng',
  },
  {
    name: 'R',
    isActive: false,
    lng: 'eng',
  },
  {
    name: 'S',
    isActive: false,
    lng: 'eng',
  },
  {
    name: 'T',
    isActive: false,
    lng: 'eng',
  },
  {
    name: 'U',
    isActive: false,
    lng: 'eng',
  },
  {
    name: 'V',
    isActive: false,
    lng: 'eng',
  },
  {
    name: 'W',
    isActive: false,
    lng: 'eng',
  },
  {
    name: 'X',
    isActive: false,
    lng: 'eng',
  },
  {
    name: 'Y',
    isActive: false,
    lng: 'eng',
  },
  {
    name: 'Z',
    isActive: false,
    lng: 'eng',
  },
]);

const cyrillicChars = ref([
  {
    name: 'А',
    isActive: false,
    lng: 'rus',
  },
  {
    name: 'Б',
    isActive: false,
    lng: 'rus',
  },
  {
    name: 'В',
    isActive: false,
    lng: 'rus',
  },
  {
    name: 'Г',
    isActive: false,
    lng: 'rus',
  },
  {
    name: 'Д',
    isActive: false,
    lng: 'rus',
  },
  {
    name: 'Е',
    isActive: false,
    lng: 'rus',
  },
  {
    name: 'Ё',
    isActive: false,
    lng: 'rus',
  },
  {
    name: 'Ж',
    isActive: false,
    lng: 'rus',
  },
  {
    name: 'З',
    isActive: false,
    lng: 'rus',
  },
  {
    name: 'И',
    isActive: false,
    lng: 'rus',
  },
  {
    name: 'Й',
    isActive: false,
    lng: 'rus',
  },
  {
    name: 'К',
    isActive: false,
    lng: 'rus',
  },
  {
    name: 'Л',
    isActive: false,
    lng: 'rus',
  },
  {
    name: 'М',
    isActive: false,
    lng: 'rus',
  },
  {
    name: 'Н',
    isActive: false,
    lng: 'rus',
  },
  {
    name: 'О',
    isActive: false,
    lng: 'rus',
  },
  {
    name: 'П',
    isActive: false,
    lng: 'rus',
  },
  {
    name: 'Р',
    isActive: false,
    lng: 'rus',
  },
  {
    name: 'С',
    isActive: false,
    lng: 'rus',
  },
  {
    name: 'Т',
    isActive: false,
    lng: 'rus',
  },
  {
    name: 'У',
    isActive: false,
    lng: 'rus',
  },
  {
    name: 'Ф',
    isActive: false,
    lng: 'rus',
  },
  {
    name: 'Х',
    isActive: false,
    lng: 'rus',
  },
  {
    name: 'Ц',
    isActive: false,
    lng: 'rus',
  },
  {
    name: 'Ш',
    isActive: false,
    lng: 'rus',
  },
  {
    name: 'Щ',
    isActive: false,
    lng: 'rus',
  },
  {
    name: 'Ъ',
    isActive: false,
    lng: 'rus',
  },
  {
    name: 'Ы',
    isActive: false,
    lng: 'rus',
  },
  {
    name: 'Ь',
    isActive: false,
    lng: 'rus',
  },
  {
    name: 'Э',
    isActive: false,
    lng: 'rus',
  },
  {
    name: 'Ю',
    isActive: false,
    lng: 'rus',
  },
  {
    name: 'Я',
    isActive: false,
    lng: 'rus',
  },
]);

const nums = ref({
  name: '0 - 9',
  isActive: false,
});

function handleChar(char, lang) {
  if (lang) {
    nums.value.isActive = false;
    all.value.isActive = false;

    if (lang === 'rus') {
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

    if (char === 'Все') {
      nums.value.isActive = false;
      all.value.isActive = true;
    } else {
      nums.value.isActive = true;
      all.value.isActive = false;
    }
  }
  emits('changeChar', char, lang);
}
</script>
