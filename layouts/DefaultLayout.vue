<template>
  <div class="default-layout flex--column column--middle--center">
    <app-small-header />
    <app-header />
    <main class="default-layout__content flex--column column--middle--center">
      <Nuxt />
    </main>
    <app-footer />
    <subscribe-modal />
    <loader-overlay />
  </div>
</template>
<script>
import AppHeader from './partials/AppHeader.vue'
import AppFooter from './partials/AppFooter.vue'
import AppSmallHeader from './partials/AppSmallHeader.vue'
import SubscribeModal from '~/components/modals/SubscribeModal.vue'
import LoaderOverlay from '~/components/LoaderOverlay.vue'
export default {
  name: 'DefaultLayout',
  components: {
    AppHeader,
    AppFooter,
    AppSmallHeader,
    SubscribeModal,
    LoaderOverlay,
  },
}
</script>
<style lang="scss" scoped>
.default-layout {
  width: 100vw;

  &__content {
    width: 100%;
    min-height: calc(100vh - 120px);
  }
}
</style>
