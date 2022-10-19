// import { useCatalogStore } from '@/stores/catalog';
// import { useAuthStore } from '@/stores/auth';
// import { useMainStore } from '@/stores/main';
// import { useAppMessage } from '@/stores/appMessage';

export default defineNuxtRouteMiddleware((to, from) => {
  //   const catalogStore = useCatalogStore();
  //   const authStore = useAuthStore();
  //   const mainStore = useMainStore();
  //   const appMessageStroe = useAppMessage();
  //   if (catalogStore.$state.isMenu) {
  //     catalogStore.handleMenu();
  //   }
  //   if (authStore.getIsOpenAuthModal) {
  //     authStore.closeAuthModal();
  //   }
  //   if (process.client) {
  //     if (document.body.classList.contains('modal-open')) {
  //       document.body.classList.remove('modal-open');
  //     }
  //   }
  //   if (mainStore.searchValueStore && !to.query.search) {
  //     mainStore.searchValueStore = '';
  //     // mainStore.searchResultStore = []
  //   }
  //   if (appMessageStroe.isShow && appMessageStroe.type === 'error') {
  //     appMessageStroe.close();
  //   }
});
