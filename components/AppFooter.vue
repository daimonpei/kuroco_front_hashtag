<template>
  <footer class="l-footer">
    <div class="l-container--large">
      <nav class="l-footer__nav">
        <ul class="l-footer__nav__list">
          <li>
            <NuxtLink to="/privacy/">{{ $t('nav.policy') }}</NuxtLink>
          </li>
        </ul>
      </nav>
      <p class="l-footer__copyright">
        © 2024 Hashtag Inc. All Rights Reserved.
      </p>
    </div>
  </footer>
</template>
