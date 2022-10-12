<!--eslint-disable-->
<template>
  <div class="error-page flex--column column--middle--center">
    <h1 class="error-page__title">
      <span class="char" v-for="char in statusCodeCharacters" :key="char">
        {{ char }}
      </span>
    </h1>
    <p class="error-page__description">
      {{ error.message || 'Bilinmeyen bir hata oluştu' }} 😢
    </p>
    <button class="btn-border" @click="$router.push('/')">Ana Sayfa</button>
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    statusCodeCharacters() {
      return String(this.error?.statusCode).split('')
    },
  },
}
</script>

<style lang="scss" scoped>
.error-page {
  width: 100vw;
  height: 100vh;
  padding: 20px;
  text-align: center;
  &__title {
    font-size: 60px;
    font-weight: 700;
    .char {
      position: relative;
      display: inline-block;
      transform: translateY(0);
      animation: bottomToTop 0.6s cubic-bezier(0.55, 0.055, 0.675, 0.19)
        infinite alternate;
      &:nth-of-type(2) {
        animation-delay: 1.8s;
      }
      &:nth-of-type(3) {
        animation-delay: 2s;
      }
    }
  }
  &__description {
    @include golden-text(18);
    margin: 40px 0;
  }
}
</style>
