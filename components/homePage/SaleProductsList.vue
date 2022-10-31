<template>
  <Carousel
    class="carousel-cards"
    :settings="settings"
    :breakpoints="breakpoints"
  >
    <Slide v-for="prod in homeStore.getSales" :key="prod.code">
      <sale-product-price-preview
        :product="prod"
        @onAddCart="addToCartHandler"
        @onAddFavority="addFavorityHandler"
        @onRemoveFavority="removeFavorityHandler"
      />
    </Slide>
    <template #addons>
      <Navigation class="carousel-cards__navigation" />
    </template>
  </Carousel>
</template>

<script setup>
import { ref } from 'vue';
import AppButton from '@/components/UI/Buttons/AppButton.vue';
import { useHomeStore } from '@/stores/home';
import { Carousel, Navigation, Slide } from 'vue3-carousel';
// import {computed} from 'vue'
// import 'vue3-carousel/dist/carousel.css';
import SaleProductPricePreview from '@/components/homePage/SaleProductPricePreview.vue';
import { useCartStore } from '@/stores/cart';
import { useProfileStore } from '@/stores/profile';

const homeStore = useHomeStore();
const cartStore = useCartStore();
const profileStore = useProfileStore();
// const { addToCart, getShortCart } = useCartStore()
// const { addToFavorities, removeFromFavorities} = useProfileStore()

// TODO: Add to cart
// qty_incart

const settings = {
  itemsToShow: 1.5,
  snapAlign: 'start',
};

const breakpoints = {
  640: {
    itemsToShow: 2,
    snapAlign: 'start',
  },
  768: {
    itemsToShow: 3,
    snapAlign: 'start',
  },
  1024: {
    itemsToShow: 4,
    snapAlign: 'start',
  },
  1280: {
    itemsToShow: 5,
    snapAlign: 'start',
  },
  1536: {
    itemsToShow: 6,
    snapAlign: 'start',
  },
};

async function addToCartHandler(id, count) {
  const prodTmp = homeStore.sales.find((el) => el.code === id);
  const res = await cartStore.addToCart(id, count);
  if (res) {
    await cartStore.getShortCart();
    prodTmp.qty_incart = count;
  }
}
async function addFavorityHandler(id) {
  const prodTmp = homeStore.sales.find((el) => el.code === id);
  await profileStore.addToFavorities(id);
  prodTmp.isfavority = true;
}
async function removeFavorityHandler(id) {
  const prodTmp = homeStore.sales.find((el) => el.code === id);
  await profileStore.removeFromFavorities(id);
  prodTmp.isfavority = false;
}
</script>
