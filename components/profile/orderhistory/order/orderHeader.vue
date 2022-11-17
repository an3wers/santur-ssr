<template>
  <div class="grid grid-cols-12 gap-6">
    <div class="col-span-12 xl:col-span-9 space-y-6">
      <div
        class="flex flex-col sm:flex-row justify-between items-start space-y-4 sm:space-y-0 space-x-0 sm:space-x-4"
      >
        <div class="grow">
          <h1 class="mb-2">
            Заказ {{ id }} <span v-if="code">/ {{ code }}</span>
          </h1>
          <span class="text-gray-500">{{ date }}</span>
        </div>
        <div class="inline-flex items-center">
          <Popper
            hover
            arrow
            :content="statusHistory"
            class="order-2 sm:order-1"
          >
            <info-icon-24
              color="#9ca3af"
              class="cursor-pointer ml-2 mr-0 sm:mr-2 sm:ml-0"
            />
          </Popper>
          <span
            class="inline-flex space-x-1 order-1 sm:order-2 border border-transparent text-white rounded-md font-semibold py-1.5 px-2.5 text-base"
            :style="{ backgroundColor: statusColor }"
            >{{ status }}</span
          >
          <!-- <span class="text-xs text-gray-500">Изменен: 06.03.2022, 07:15</span> -->
        </div>
      </div>
    </div>
    <div class="col-span-12 xl:col-span-3 space-y-6">
      <div class="flex justify-start md:justify-end space-x-2">
        <app-button
          @click="editOrder(id)"
          :disabled="
            !editAvailable ||
            cartStore.cartId ||
            isEditing ||
            orderStore.editOrder.id
          "
          btnType="secondary"
        >
          <btn-spinner type="dark" v-if="isEditing" />
          Изменить
        </app-button>
        <app-button
          @click="$emit('onCancel', id)"
          :disabled="
            !deleteAvailable || isOrderCanceling || orderStore.editOrder.id
          "
          btnType="secondary"
        >
          <btn-spinner type="dark" v-if="isOrderCanceling" />
          Отменить
        </app-button>
        <div class="relative">
          <app-button-icon
            @click="moreMenuHandler"
            btnType="secondary"
            :class="`nav__link-${indexSubmenu}`"
          >
            <more-horize-24 color="#1f2937" />
          </app-button-icon>
          <transition
            enter-active-class="transition ease-out duration-100"
            enter-from-class="transform opacity-0 scale-95"
            enter-to-class="transform opacity-100 scale-100"
            leave-active-class="transition ease-in duration-75"
            leave-from-class="transform opacity-100 scale-100"
            leave-to-class="transform opacity-0 scale-95"
          >
            <SubMenu
              v-if="menuMoreIsopen"
              :idx="indexSubmenu"
              position="right"
              isOpen="menuMoreIsopen"
              @closeSubmenu="onClose"
            >
              <div class="nav__item">
                <button
                  @click="printHandler"
                  class="flex text-left text-gray-700 w-full text-[0.9375rem] px-4 py-2 no-underline rounded-md hover:bg-slate-150 hover:text-primary"
                >
                  Печать
                </button>
                <button
                  class="flex text-left text-gray-700 w-full text-[0.9375rem] px-4 py-2 no-underline rounded-md hover:bg-slate-150 hover:text-primary"
                >
                  Скачать (xlsx)
                </button>
                <button
                  :disabled="orderStore.editOrder.id"
                  @click="$emit('onCopy', id)"
                  class="flex text-left text-gray-700 w-full text-[0.9375rem] px-4 py-2 no-underline rounded-md hover:bg-slate-150 hover:text-primary"
                >
                  Повторить
                </button>
              </div>
            </SubMenu>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import AppButton from '@/components/UI/Buttons/AppButton.vue';
import MoreHorize24 from '@/components/UI/Icons/MoreHorize_24.vue';
// import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import InfoIcon24 from '@/components/UI/Icons/InfoIcon_24.vue';
import Popper from 'vue3-popper';
import { useCartStore } from '@/stores/cart';
import { useOrderStore } from '@/stores/order';
import BtnSpinner from '@/components/UI/Spinner/BtnSpinner.vue';
import AppButtonIcon from '@/components/UI/Buttons/AppButtonIcon.vue';
import SubMenu from '@/components/UI/DropDown/SubMenu.vue';

const cartStore = useCartStore();
const orderStore = useOrderStore();
const menuMoreIsopen = ref(false);
const indexSubmenu = 98;

defineProps({
  id: {
    type: Number,
  },
  code: {
    type: String,
    default: '',
  },
  status: {
    type: String,
    default: '',
  },
  statusColor: {
    type: String,
    default: '',
  },
  statusHistory: {
    type: String,
    default: '',
  },
  date: {
    type: String,
    default: '',
  },
  editAvailable: {
    type: Boolean,
    default: false,
  },
  deleteAvailable: {
    type: Boolean,
    default: false,
  },
  isOrderCanceling: {
    type: Boolean,
    default: false,
  },
  isEditing: {
    type: Boolean,
    default: false,
  },
});

const emits = defineEmits(['onPrintPage', 'onEditOrder', 'onCancel', 'onCopy']);

function editOrder(id) {
  // EditOrd/?id=...
  emits('onEditOrder', id);
}

function moreMenuHandler() {
  menuMoreIsopen.value = !menuMoreIsopen.value;
}

function onClose() {
  menuMoreIsopen.value = false;
}

function printHandler() {
  onClose();

  emits('onPrintPage');
}
</script>
