<template>
  <footer class="app-footer flex--column column--middle--center">
    <div class="app-footer__social-links flex--row row--middle--center">
      <nuxt-link to="">
        <img src="@/assets/img/social/github.svg" alt="İksirsi github" />
      </nuxt-link>
      <nuxt-link to="">
        <img src="@/assets/img/social/linkedin.svg" alt="İksirsi linkedin" />
      </nuxt-link>
      <nuxt-link to="">
        <img src="@/assets/img/social/whatsapp.svg" alt="İksirsi whatsapp" />
      </nuxt-link>
    </div>
  </footer>
</template>
<script>
export default {
  name: 'AppFooter',
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
      img {
        height: 18px;
      }
    }
  }
}
</style>
