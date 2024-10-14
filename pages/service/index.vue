<template>
  <div v-if="response" class="l-container--wrap">
    <UiPageHeader :subject="response.details.subject" subheading="Service" />
    <article class="c-article">
      <div class="l-container--large">
        <div class="l-container--contents">
          <h2>投資実績</h2>
          <UiCardList
            v-if="ltdNews?.data?.list?.length > 0"
            :list="ltdNews.data.list"
          />
        </div>
      </div>
      <div class="l-container--large l-container--contents">
        <div v-html="response.details.contents"></div>
      </div>
    </article>
  </div>
</template>

<script setup>
const config = useRuntimeConfig();

const { data: response } = await useFetch(
  `${config.public.kurocoApiDomain}/rcms-api/1/content/details/service`,
  {
    credentials: 'include',
    server: false
  }
);

const { data: ltdNews } = await useFetch(
  `${config.public.kurocoApiDomain}/rcms-api/1/ltd-news/list`,
  {
    credentials: 'include',
    params: { cnt: 12 },
    server: false
  }
);
</script>

<style lang="scss">
h3 {
  clear: both;
}
h3 + .image {
  float: left;
}
h3 + .image + p {
}

.c-card-list li {
  list-style: none !important;
}
</style>
