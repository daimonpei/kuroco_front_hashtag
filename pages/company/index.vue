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
.page-company .greeting {
  flex-direction: column;
  /* width: 1000px; */
  margin: 1em auto;
  border-radius: 0.25em;
  padding: 2em 3em;
  background: #31374e;
  color: #fff;
}
.page-company .greeting .c-section--list__heading,
.page-company .greeting .c-section--list__heading h2 {
  width: 100%;
  text-align: center;
  margin: 0 auto;
}
.page-company .greeting .u-display-flex-grow-1 {
  /* padding-top: 6rem; */
  display: flex;
  align-items: center;
}
.page-company .greeting .u-display-flex-grow-1 .sign {
  font-size: 1.25em;
  text-align: right;
}
.page-company .image-person-wrapper {
  /* width: 25vw; */
  padding: 2em;
}
.page-company .image-person {
  width: 320px;
  height: auto;
  max-width: none;
}
.page-company .greeting-message {
  font-family: var(--font-family-serif);
}

.page-company .hist {
  display: flex;
  flex-direction: column;
  /* width: 48em; */
  margin: 2em auto;
  padding: 0 7.5em;
}
.page-company .hist p {
  display: flex;
  margin: 0;
}
.page-company .hist p label {
  flex-basis: 6em;
}
.page-company .hist p span {
  flex-basis: 40em;
}

ul.access {
  position: relative;
}
ul.access li.link-to-googlemap {
  list-style: none;
  margin: 0;
  padding: 0;
}
ul.access li.link-to-googlemap a {
  color: #fff;
  background: var(--color-primary);
  margin: 0;
  padding: 0;
  position: absolute;
  top: 0;
  right: 0;
  display: block;
  padding: 0.5em 1em;
}
</style>
