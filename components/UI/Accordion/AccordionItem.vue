<template>
  <div>
    <button
      @click="updateState(id)"
      class="flex text-left space-x-2 justify-between items-center w-full p-4 md:p-5 bg-slate-150"
    >
      <!-- title -->
      <slot name="title" />
      <span :class="stateAccordion === id ? 'rotate-180' : ''">
        <ExpandMoreIcon24 />
      </span>
    </button>

    <div class="p-4 md:p-5" v-show="stateAccordion === id">
      <!-- content -->
      <slot name="content" />
    </div>
  </div>
</template>

<script setup>
import { ref, inject, computed, watch } from 'vue';
import ExpandMoreIcon24 from '@/components/UI/Icons/ExpandMoreIcon_24.vue';

const props = defineProps({
  id: {
    type: [String, Number],
    default: '',
  },
});

const { stateAccordion, updateState } = inject('activeItem');

// console.log('injectItem', activeItem);

// const isActive = computed(() => {
//   return actItem === props.id;
// });

// defineEmits(['handdleItem']);
</script>
