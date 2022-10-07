<template>
  <transition>
    <div
      v-show="!appIsReady"
      class="loader-overlay flex--column column--middle--center"
    >
      <img src="@/assets/img/logo-animation.svg" alt="" />
    </div>
  </transition>
</template>
<script>
import lockScrollMixin from '~/mixins/lock-scroll.mixin'
export default {
  name: 'LoaderOverlay',
  mixins: [lockScrollMixin],
  computed: {
    appIsReady() {
      return this.$store.state.common.appIsReady
    },
  },
  watch: {
    appIsReady() {
      this.lockScroll(!this.appIsReady)
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
  background-color: rgba(255, 255, 255, 0.583);
  z-index: 23232323323;
  img {
    width: 60px;
    height: 60px;
  }
}
</style>
