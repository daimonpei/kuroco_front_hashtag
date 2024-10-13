<template>
  <header
    class="l-header"
    id="l-header"
    :class="{ 'is-open': Drawer, [currentPage]: true }"
  >
    <div class="l-header__inner">
      <div class="l-header__logo">
        <NuxtLink to="/" @click.native="Drawer = false"
          ><img src="~/assets/image/logo_w.svg" alt="Company Name" />
        </NuxtLink>
      </div>
      <nav class="l-header__nav">
        <button
          @click="Drawer = !Drawer"
          type="button"
          class="l-header__nav__toggle"
        >
          <div class="l-header__nav__toggle__icon">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
        <div class="l-header__nav__inner">
          <ul class="l-header__nav__list">
            <li
              class="l-header__nav__list__item"
              v-if="activePages.includes('company')"
            >
              <NuxtLink to="/company/" @click.native="Drawer = false">{{
                $t('nav.company')
              }}</NuxtLink>
            </li>
            <li
              class="l-header__nav__list__item"
              v-if="activePages.includes('service')"
            >
              <NuxtLink to="/service/" @click.native="Drawer = false">{{
                $t('nav.service')
              }}</NuxtLink>
            </li>
            <li class="l-header__nav__list__item">
              <NuxtLink to="/news/" @click.native="Drawer = false">{{
                $t('nav.news')
              }}</NuxtLink>
            </li>
            <li
              class="l-header__nav__list__item"
              v-if="activePages.includes('recruit')"
            >
              <NuxtLink to="/recruit/" @click.native="Drawer = false">{{
                $t('nav.recruit')
              }}</NuxtLink>
            </li>
            <li class="l-header__nav__list__item">
              <NuxtLink to="/contact/" @click.native="Drawer = false">{{
                $t('nav.contact')
              }}</NuxtLink>
            </li>
            <li class="l-header__nav__list__item">
              <LanguageSwitcher />
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { computed, ref } from 'vue';
const Drawer = ref(false);
// 現在のページslugを取得
const route = useRoute();
const currentPage = computed(() => route.path.split('/')[1] || 'home');
// const { authUser, isLoggedIn, logout } = useAuth();

const config = useRuntimeConfig();
const { data: contents } = await useFetch(
  `${config.public.kurocoApiDomain}/rcms-api/1/content/list`,
  {
    credentials: 'include',
    //     query: {
    //       filter,
    //     },
    //     watch: [filter],
    server: false // in order to get query parameter, runs only client side
  }
);

let activePages = [];
if (contents) {
  activePages = contents.value.list.map((element) => {
    return element.slug;
  });
}
</script>
