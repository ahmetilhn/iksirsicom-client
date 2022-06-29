<template>
  <div class="default-layout">
    <app-small-header />
    <app-header />
    <main class="default-layout__content">
      <Nuxt />
    </main>
    <app-footer />
  </div>
</template>
<script>
import AppHeader from './partials/AppHeader.vue'
import AppFooter from './partials/AppFooter.vue'
import AppSmallHeader from './partials/AppSmallHeader.vue'
export default {
  name: 'DefaultLayout',
  components: {
    AppHeader,
    AppFooter,
    AppSmallHeader,
  },
}
</script>
<style lang="scss" scoped>
.default-layout {
  width: 100vw;
  padding: 14px 0;
}
</style>
