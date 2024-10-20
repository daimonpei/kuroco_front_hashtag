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
      <div class="c-hero__body" id="c-hero__body">
        <p class="c-hero__body__lead animate__animated animate__fadeInLeft">
          {{ $t('hero.lead') }}
        </p>
        <p ref="heroText" class="c-hero__body__text" style="visibility: hidden">
          {{ $t('hero.text') }}{{ $t('hero.text1') }}<br />{{
            $t('hero.text2')
          }}
        </p>
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
  <div class="scroll-nav" v-scroll="handleScrollScrollNav">
    <span class="material-symbols-outlined icon icon-up" @click="scrollToTop"
      >keyboard_double_arrow_up</span
    >
    <span class="material-symbols-outlined icon icon-down"
      >keyboard_double_arrow_down</span
    >
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
const config = useRuntimeConfig();
const lang = ref(useI18n().locale.value);

const { data: i18nData } = await useFetch(
  `${config.public.kurocoApiDomain}/rcms-api/1/i18n`,
  {
    credentials: 'include',
    server: false
  }
);
const i18n = {};
i18nData.value.list.forEach((d) => {
  const k = d.key.split('.');
  if (!i18n[k[0]]) i18n[k[0]] = {};
  i18n[k[0]][k[1]] = d[lang.value];
});
console.log({ i18n });

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
    // console.log({ transition, delay });
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

const heroText = ref(null);
const handleScrollScrollNav = (el, status) => {
  const iconUp = document.querySelector('.icon-up');
  const iconDown = document.querySelector('.icon-down');
  // console.log(status.scrollPercentage);
  if (status.scrollPercentage < 15) {
    if (iconUp) iconUp.classList.add('onTop');
    if (iconDown) iconDown.classList.add('onTop');
    if (iconDown) iconDown.classList.remove('onBody');
  } else {
    if (iconUp) iconUp.classList.remove('onTop');
    if (iconDown) iconDown.classList.remove('onTop');
    if (iconDown) iconDown.classList.add('onBody');
  }
  if (status.scrollPercentage >= 50) {
    if (iconUp) iconUp.classList.add('onBody');
  } else {
    if (iconUp) iconUp.classList.remove('onBody');
  }
  if (status.scrollPercentage >= 99) {
    if (iconUp) iconUp.classList.add('onBottom');
    if (iconDown) iconDown.classList.add('onBottom');
  } else {
    if (iconUp) iconUp.classList.remove('onBottom');
    if (iconDown) iconDown.classList.remove('onBottom');
  }
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

onMounted(() => {
  setTimeout(() => {
    heroText.value.style.visibility = 'visible';
    heroText.value.classList.add('animate__animated', 'animate__fadeInUp');
  }, 800);
});
</script>

<style lang="scss" scoped>
.scroll-nav {
  position: fixed;
  bottom: 30px;
  right: 0;
  color: var(--color-base);
  .icon {
    font-size: 5em;
    // position: absolute;
    // bottom: 0;
    &.icon-up {
      display: none;
      right: 0;
      cursor: pointer;
      &.onBody {
        display: block;
      }
      &.onBottom {
        display: block;
        color: #fff;
      }
    }
    &.icon-down {
      opacity: 0.8;
      display: block;
      @keyframes scroll {
        0% {
          transform: translateY(0);
        }
        50% {
          transform: translateY(10px);
        }
        100% {
          transform: translateY(0);
        }
      }
      animation: scroll 1s infinite;
      &.onBody {
        display: none;
      }
    }
  }
}
</style>
