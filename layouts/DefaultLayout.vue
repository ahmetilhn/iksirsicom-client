<template>
  <div class="default-layout flex--column column--middle--center">
    <app-small-header />
    <app-header />
    <main class="default-layout__content flex--column column--middle--center">
      <Nuxt />
    </main>
    <app-footer />
    <div>
      <subscription-modal v-if="isSubscriptionModalVisible" />
      <saved-items-modal v-if="isSavedItemsModalVisible" />
      <authors-modal v-if="isAuthorsModalVisible" />
    </div>
    <loader-overlay />
  </div>
</template>
<script>
import { mapState } from 'vuex'
import AppHeader from './partials/AppHeader.vue'
import AppFooter from './partials/AppFooter.vue'
import AppSmallHeader from './partials/AppSmallHeader.vue'
import SubscriptionModal from '~/components/modals/SubscriptionModal.vue'
import SavedItemsModal from '~/components/modals/SavedItemsModal.vue'
import AuthorsModal from '~/components/modals/AuthorsModal.vue'
import LoaderOverlay from '~/components/LoaderOverlay.vue'
export default {
  name: 'DefaultLayout',
  components: {
    AppHeader,
    AppFooter,
    AppSmallHeader,
    SubscriptionModal,
    SavedItemsModal,
    LoaderOverlay,
    AuthorsModal,
  },
  computed: {
    ...mapState({
      isAuthorsModalVisible: (store) =>
        store.modules.common.authorsModalIsVisible,
      isSavedItemsModalVisible: (store) =>
        store.modules.common.savedItemsModalIsVisible,
      isSubscriptionModalVisible: (store) =>
        store.modules.common.subscriptionModalIsVisible,
    }),
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
