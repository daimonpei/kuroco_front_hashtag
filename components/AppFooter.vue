<template>
  <footer class="l-footer">
    <div class="l-footer__inner">
      <nav class="l-footer__nav">
        <ul class="l-footer__nav__list">
          <li v-if="activePages.includes('company')">
            <NuxtLink to="/company/" @click.native="Drawer = false">{{
              $t('nav.company')
            }}</NuxtLink>
          </li>
          <li v-if="activePages.includes('service')">
            <NuxtLink to="/service/" @click.native="Drawer = false">{{
              $t('nav.service')
            }}</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/news/" @click.native="Drawer = false">{{
              $t('nav.news')
            }}</NuxtLink>
          </li>
          <li v-if="activePages.includes('recruit')">
            <NuxtLink to="/recruit/" @click.native="Drawer = false">{{
              $t('nav.recruit')
            }}</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/contact/" @click.native="Drawer = false">{{
              $t('nav.contact')
            }}</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/privacy/">{{ $t('nav.policy') }}</NuxtLink>
          </li>
        </ul>
      </nav>

      <div class="l-footer__logo">
        <NuxtLink to="/" @click.native="Drawer = false"
          ><img src="~/assets/image/logo_w.svg" alt="Company Name" />
        </NuxtLink>
      </div>
    </div>
    <p class="l-footer__copyright">© 2024 Hashtag Inc. All Rights Reserved.</p>
  </footer>
</template>

<script setup>
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
