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
              />
              <h2 class="c-heading--lv2 service-lead">
                {{ $t('services.title1') }}
              </h2>
              <p class="c-text">
                {{ $t('services.text1') }}
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
              />
              <h2 class="c-heading--lv2 service-lead">
                {{ $t('services.title2') }}
              </h2>
              <p class="c-text">
                {{ $t('services.text2') }}
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
              />
              <h2 class="c-heading--lv2 service-lead">
                {{ $t('services.title3') }}
              </h2>
              <p class="c-text">
                {{ $t('services.text3') }}
              </p>
            </div>
          </div>
          <NuxtLink to="/service/" class="c-button c-button__full">{{
            $t('readmore')
          }}</NuxtLink>
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

            <h2 class="c-heading--lv1 greet-title">
              {{ $t('aboutus.title') }}
            </h2>
            <p class="greet">
              {{ $t('aboutus.text') }}
            </p>
          </div>
          <div class="u-display-flex-shrink-0 detail-to-aboutus">
            <NuxtLink to="/company/" class="c-button u-mb-20">{{
              $t('readmore')
            }}</NuxtLink>
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
            <h2 class="c-heading--lv1"></h2>
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
          <NuxtLink to="/ltd-news/" class="c-button c-button__full">{{
            $t('readmore')
          }}</NuxtLink>
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
          <NuxtLink to="/news/" class="c-button">{{ $t('readmore') }}</NuxtLink>
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
          <p v-else>{{ $t('nopost') }}</p>
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
