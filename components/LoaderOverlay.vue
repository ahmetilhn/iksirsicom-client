<template>
  <div class="loader-overlay flex--column column--middle--center">
    <img src="@/assets/img/logo-animation.svg" alt="" />
  </div>
</template>
<script>
import lockScrollMixin from '~/mixins/lock-scroll.mixin'
export default {
  name: 'LoaderOverlay',
  mixins: [lockScrollMixin],
  watch: {
    isVisible: {
      handler: this.lockScroll(this.isVisible),
    },
  },
}
</script>
<style lang="scss" scoped>
.loader-overlay {
  position: fixed;
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  background-color: $white;
  z-index: 23232323323;
}
</style>
