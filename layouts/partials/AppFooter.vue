<template>
  <footer class="app-footer flex--column column--middle--center">
    <div class="app-footer__social-links flex--row row--middle--center">
      <a target="BLANK" @click="openAuthorsModal">
        <img
          src="@/assets/img/social/user.svg"
          :alt="SOCIAL_LINKS.whatsapp.title"
        />
      </a>
      <a target="BLANK" @click="openSubscriptionModal">
        <img
          src="@/assets/img/social/notification.svg"
          :alt="SOCIAL_LINKS.whatsapp.title"
        />
      </a>
      <a
        target="BLANK"
        href="https://github.com/ahmetilhan24/iksirsicom-client"
        title="Bu proje açık kaynaktır. Gihub repository'sine gitmek için tıkla."
      >
        <img
          src="@/assets/img/social/github.svg"
          alt="iksirsi.com Github Repository"
        />
      </a>
      <a
        target="BLANK"
        href="https://github.com/sponsors/ahmetilhan24"
        title="Destek Ol"
      >
        <img
          src="@/assets/img/icons/heart.svg"
          alt="iksirsi.com'a Destek ol"
        />
      </a>
    </div>
  </footer>
</template>
<script>
import { SOCIAL_LINKS } from '~/constants/social-link.constants'
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
    openAuthorsModal() {
      this.$store.commit('modules/common/setAuthorsModalVisible', true)
    },
  },
}
</script>
<style lang="scss" scoped>
.app-footer {
  width: 100vw;
  background-color: $gray-one;
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
