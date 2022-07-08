<template>
  <div
    v-if="!appIsReady"
    class="loader-overlay flex--column column--middle--center"
  >
    <img src="@/assets/img/logo-animation.svg" alt="" />
  </div>
</template>
<script>
import { mapState } from 'vuex'
import lockScrollMixin from '~/mixins/lock-scroll.mixin'
export default {
  name: 'LoaderOverlay',
  mixins: [lockScrollMixin],
  computed: {
    ...mapState({
      appIsReady: (store) => store.modules.common.appIsReady,
    }),
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
  background-color: $white;
  z-index: 23232323323;
}
</style>
