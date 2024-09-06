<template>
  <div class="l-container--wrap">
    <UiPageHeader subject="開発/投資実績" subheading="Achivement" />
    <section>
      <div class="l-container--large">
        <div class="l-container--contents">
          <UiCardList
            v-if="ltdNews?.data?.list?.length > 0"
            :list="ltdNews.data.list"
          />
          <UiCardList
            v-if="ltdNews?.data?.list?.length > 0"
            :list="ltdNews.data.list"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const config = useRuntimeConfig();

const { authUser } = useAuth();

const group = computed(() => {
  if (authUser.value.isPremiumUser) {
    return '通常会員へ戻す';
  }
  if (authUser.value.isRegularUser) {
    return 'プレミアム会員へアップグレードする';
  }
  return null;
});

const { data: ltdNews } = await useFetch(
  `${config.public.kurocoApiDomain}/rcms-api/1/ltd-news/list`,
  {
    credentials: 'include',
    params: { cnt: 12 },
    server: false
  }
);
</script>
