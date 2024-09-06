import type { DirectiveBinding } from 'vue';

const vScroll = {
  mounted(el: HTMLElement, binding: DirectiveBinding) {
    let f = function (evt: Event) {
      // const isMobile = window.innerWidth < 768;
      const top = el.getBoundingClientRect().top;
      const bottom = el.getBoundingClientRect().bottom;
      const elHeight = el.clientHeight;

      // アイテムは画面に表示されていない
      const isHidden = top > window.innerHeight || top + elHeight < 0;
      // アイテムが画面に表示されている
      const isVisible =
        (top < window.innerHeight && top + elHeight > 0) ||
        (bottom < window.innerHeight && bottom > 0);
      // アイテムの上半分が画面に表示されている
      const isTopVisible = top < window.innerHeight && top > 0;
      // アイテムの下半分が画面に表示されている
      const isBottomVisible = bottom < window.innerHeight && bottom > 0;
      // アイテムの全体が画面に表示されている // アイテム高が画面の高さより大きい場合は、topが0以下の場合にisFullVisibleがtrueになる
      const isFullVisible = (isTopVisible && isBottomVisible) || top <= 0;

      let visibility = 'hidden';
      if (isFullVisible) {
        visibility = 'full';
      } else if (isTopVisible) {
        visibility = 'above';
      } else if (isBottomVisible) {
        visibility = 'below';
      } else if (isVisible) {
        visibility = 'visible';
      }

      if (
        binding.value(el, {
          scrollTop: window.scrollY, //スクロール位置
          top, //アイテムの現在位置（画面上端からの距離）
          bottom, //アイテムの現在位置（画面下端からの距離）
          elHeight, //アイテムの高さ
          isHidden, //アイテムが画面に表示されていない
          isVisible, //アイテムが画面に表示されている
          isTopVisible, //アイテムの上半分が画面に表示されている
          isBottomVisible, //アイテムの下半分が画面に表示されている
          isFullVisible, //アイテムの全体が画面に表示されている
          visibility // アイテムの表示状態
        })
      ) {
        window.removeEventListener('scroll', f);
      }
    };
    window.addEventListener('scroll', f);
  }
};

export default vScroll;
