<template>
  <footer class="app-footer flex--column column--middle--center">
    <div class="app-footer__social-links flex--row row--middle--center">
      <a target="BLANK" :href="SOCIAL_LINKS.github.url">
        <img
          src="@/assets/img/social/github.svg"
          :alt="SOCIAL_LINKS.github.title"
        />
      </a>
      <a target="BLANK" :href="SOCIAL_LINKS.linkedin.url">
        <img
          src="@/assets/img/social/linkedin.svg"
          :alt="SOCIAL_LINKS.linkedin.title"
        />
      </a>
      <a target="BLANK" :href="SOCIAL_LINKS.whatsapp.url">
        <img
          src="@/assets/img/social/whatsapp.svg"
          :alt="SOCIAL_LINKS.whatsapp.title"
        />
      </a>
      <a target="BLANK" @click="openSubscriptionModal">
        <img
          src="@/assets/img/social/notification.svg"
          :alt="SOCIAL_LINKS.whatsapp.title"
        />
      </a>
    </div>
  </footer>
</template>
<script>
import { SOCIAL_LINKS } from '~/constants/social-links.constants'
export default {
  name: 'AppFooter',
  data() {
    return {
      SOCIAL_LINKS,
    }
  },
  methods: {
    openSubscriptionModal() {
      this.$store.commit('modules/common/setSubscriptionModalVisible', true)
    },
  },
}
</script>
<style lang="scss" scoped>
.app-footer {
  width: 100vw;
  background-color: $primary-color;
  min-height: 200px;
  border-top: 2px solid $dark-one;

  &__social-links {
    a {
      width: 36px;
      display: block;
      height: 36px;
      background-color: $white;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0 5px;
      border: 1px solid $dark-one;

      img {
        height: 18px;
      }
    }
  }
}
</style>
