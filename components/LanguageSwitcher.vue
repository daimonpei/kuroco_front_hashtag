<template>
  <div>
    <nuxt-link :to="switchLocalePath('en')">{{ $t('links.en') }}</nuxt-link>
    <span class="separator">|</span>
    <nuxt-link :to="switchLocalePath('ja')">{{ $t('links.ja') }}</nuxt-link>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
* {
  font-size: 0.84em;
  padding: 0.15em !important;
}
a.router-link-active {
  color: var(--color-primary) !important;
  &:hover {
    color: var(--color-white) !important;
  }
}
.separator {
  margin: 0 0.5rem;
  color: var(--color-white);
}
</style>
