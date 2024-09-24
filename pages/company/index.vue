<template>
  <div class="page-company">
    <UiPageHeader :subject="response.details.subject" subheading="Company" />
    <article class="c-article">
      <div class="l-container--large l-container--contents">
        <div v-html="response.details.contents"></div>
      </div>
    </article>
  </div>
</template>

<script setup>
const config = useRuntimeConfig();
const lang = ref(useI18n().locale.value);
const { data: response } = await useFetch(
  `${config.public.kurocoApiDomain}/rcms-api/1/content/details/company?_lang=${lang.value}`,
  {
    server: false
  }
);
</script>

<style>
.page-company .c-section--list {
  margin-top: 8rem;
}
.page-company .c-section--list__heading {
  min-width: 420px;
}
.page-company iframe {
  width: 100% !important;
  height: 320px !important;
}
.page-company .u-display-flex-grow-1.greeting {
  padding-top: 6rem;
}
.page-company .u-display-flex-grow-1.greeting .sign {
  font-size: 1.25em;
  text-align: right;
}
</style>
