import { defineNuxtPlugin } from '#app';
import vScroll from '~/directives/v-scroll';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('scroll', vScroll);
});
