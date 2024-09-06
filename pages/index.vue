<template>
  <div>
    <section class="c-hero" id="c-hero" v-scroll="handleScrollHero">
      <img
        src="~/assets/image/hash_b.svg"
        alt="hashtag"
        class="c-hero__hash animate__animated animate__slideInUp"
      />
      <video
        src="~/assets/image/top.mp4"
        autoplay
        loop
        muted
        playsinline
        class="c-hero__image"
      ></video>
      <div
        class="c-hero__body animate__animated animate__fadeInLeft"
        id="c-hero__body"
      >
        <p class="c-hero__body__lead">{{ $t('hero.lead') }}</p>
        <p class="c-hero__body__text">
          {{ $t('hero.text') }}
        </p>
      </div>
    </section>

    <section
      class="l-container--large l-container--contents l-container--services"
    >
      <div class="c-section--image-text">
        <div class="u-display-flex-grow-2">
          <p
            v-scroll="delay"
            class="c-heading--sub transition transition_fadeInLeft"
          >
            Our Service
          </p>
          <div class="flex-items">
            <div
              v-scroll="delay"
              class="flex-item transition transition_fadeInUp delay_500"
              id="top-service1"
            >
              <img
                class="top-service-icon"
                src="~/assets/image/service_1.png"
                alt="豊富な経験と専門知識"
              />
              <h2 class="c-heading--lv2 service-lead">
                豊富な経験と<br />専門知識
              </h2>
              <p class="c-text">
                ホテルファンドの組成・運用に特化したエキスパートが、確かな経験と深い専門知識で投資機会を最大化します
              </p>
            </div>
            <div
              v-scroll="delay"
              class="flex-item transition transition_fadeInUp delay_750"
              id="top-service2"
            >
              <img
                class="top-service-icon"
                src="~/assets/image/service_3.png"
                alt="ワンストップトータルサービス"
              />
              <h2 class="c-heading--lv2 service-lead">
                ワンストップ<br />トータルサービス
              </h2>
              <p class="c-text">
                ソーシングからアセットマネジメント、出口戦略まで、一貫したサポートで複雑な投資プロセスをスムーズに進めます
              </p>
            </div>
            <div
              v-scroll="delay"
              class="flex-item transition transition_fadeInUp delay_1000"
              id="top-service3"
            >
              <img
                class="top-service-icon"
                src="~/assets/image/service_2.png"
                alt="戦略的投資"
              />
              <h2 class="c-heading--lv2 service-lead">
                高リターンを目指<br />した戦略的投資
              </h2>
              <p class="c-text">
                コア投資から高難易度オポチュニティ投資まで、御社のニーズに応じた最適な投資戦略を提案・実行します
              </p>
            </div>
          </div>
          <NuxtLink to="/service/" class="c-button c-button__full"
            >事業内容を見る</NuxtLink
          >
        </div>
      </div>
      <div
        v-scroll="delay"
        class="after transition transition_fadeInRight stripe"
        id="top-service-after"
      ></div>
    </section>

    <section class="l-container--contents l-container--aboutus">
      <div class="l-container--large">
        <div
          class="u-display-flex u-display-flex-align-items-center u-mb-20 l-container--aboutus-inner"
        >
          <div class="u-display-flex-grow-1">
            <p
              v-scroll="delay"
              class="c-heading--sub transition transition_fadeInLeft"
            >
              About Us
            </p>
            <div class="rect">
              <img src="~/assets/image/person_1.png" />
            </div>

            <h2 class="c-heading--lv1">豊富な経験と実績を活かして</h2>
            <p class="greet">
              当社は、ホテル投資に特化し、豊富な経験と実績を活かして投資家の皆様に安心かつ高収益な投資機会を提供いたします。昨今の観光業回復やインバウンド需要の高まりを背景に、ホテル業界の成長が加速しております。これを機に、当社は資産価値の最大化を目指し、独自の投資戦略でお客様の信頼にお応えしてまいります。
            </p>
          </div>
          <div class="u-display-flex-shrink-0 detail-to-aboutus">
            <NuxtLink to="/company/" class="c-button u-mb-20"
              >詳細を見る</NuxtLink
            >
          </div>
        </div>

        <div
          v-scroll="delay"
          class="after transition transition_fadeInLeft stripe"
          id="top-aboutus-after"
        ></div>
      </div>
    </section>

    <section class="l-container--contents l-container--achivement">
      <div class="l-container--large">
        <div class="u-display-flex u-display-flex-align-items-center u-mb-20">
          <div class="u-display-flex-grow-1">
            <p
              v-scroll="delay"
              class="c-heading--sub transition transition_fadeInLeft"
            >
              Achievements
            </p>
            <h2 class="c-heading--lv1">投資/開発実績</h2>
          </div>
        </div>

        <div
          v-scroll="delay"
          id="menber-cards"
          class="transition transition_fadeInUp"
        >
          <UiCardList
            v-if="ltdNews?.data?.list?.length > 0"
            :list="ltdNews.data.list"
          ></UiCardList>
        </div>
        <div class="u-display-flex-shrink-0">
          <NuxtLink to="/ltd-news/" class="c-button c-button__full"
            >一覧を見る</NuxtLink
          >
        </div>
        <div
          v-scroll="delay"
          class="after transition transition_fadeInLeft stripe"
          id="top-achivement-after"
        ></div>
      </div>
    </section>

    <section class="l-container--large l-container--contents">
      <div class="c-section--list">
        <div class="c-section--list__heading">
          <p
            v-scroll="delay"
            class="c-heading--sub transition transition_fadeInLeft"
          >
            News Release
          </p>
          <h2 class="c-heading--lv1">ニュースリリース</h2>
          <NuxtLink to="/news/" class="c-button">一覧を見る</NuxtLink>
        </div>

        <div class="u-display-flex-grow-1">
          <ul v-if="news.list.length > 0" class="c-topics-list">
            <li v-for="news in news.list" :key="news.topics_id">
              <NuxtLink :to="`/news/detail/${news.topics_id}`" class="c-topics">
                <time class="c-topics__date" :datetime="news.ymd">{{
                  news.ymd
                }}</time>
                <span class="c-badge">
                  {{ news.contents_type_nm }}
                </span>
                <p class="c-topics__title">
                  {{ news.subject }}
                </p>
              </NuxtLink>
            </li>
          </ul>
          <p v-else>記事が存在しません</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const config = useRuntimeConfig();

const { data: news } = await useFetch(
  `${config.public.kurocoApiDomain}/rcms-api/1/news/list`,
  {
    credentials: 'include',
    server: false
  }
);
const { data: ltdNews } = await useFetch(
  `${config.public.kurocoApiDomain}/rcms-api/1/ltd-news/list`,
  {
    credentials: 'include',
    server: false
  }
);

const delay = (el, status) => {
  const id = el.id;
  // console.log(id, status.visibility, status);
  if (status.isVisible) {
    // el.classList から transition_xxx を見つけて、xxx を取得
    const transition = Array.from(el.classList).find((c) =>
      c.startsWith('transition_')
    );
    // el.classList から delay_xxx を見つけて、xxx を取得
    const delay = Number(
      String(
        Array.from(el.classList).find((c) => c.startsWith('delay_')) ||
          'delay_0'
      ).replace('delay_', '')
    );
    console.log({ transition, delay });
    if (transition) {
      if (delay) {
        setTimeout(() => {
          el.classList.add(
            `animate__animated`,
            `animate__${transition.replace('transition_', '')}`
          );
        }, delay);
      } else {
        el.classList.add(
          `animate__animated`,
          `animate__${transition.replace('transition_', '')}`
        );
      }
      return true;
    }
  }
  return false;
};
const handleScrollHero = (el, status) => {
  const id = el.id;
  // console.log(id, status.visibility, status);
  const header = document.getElementById('l-header');
  if (status.top < -670) {
    header.classList.add('l-header--fixed');
  } else {
    header.classList.remove('l-header--fixed');
  }
};
</script>
