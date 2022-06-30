<template>
  <header class="app-header flex--row row--middle--center">
    <div class="app-header__container flex--row row--middle--center">
      <div class="app-header__logo flex--row row--middle--center">
        <img src="@/assets/img/logo.svg" alt="iksirsi Logo" />
      </div>
      <div class="app-header__buttons flex--row row--middle--center">
        <button class="btn-border">Listem</button>
      </div>
    </div>
  </header>
</template>
<style lang="scss" scoped>
.app-header {
  width: 100vw;
  border-bottom: 2px solid $dark-one;

  &__container {
    width: 100%;
    padding: 16px 0;
    justify-content: space-between;
    max-width: $max-width-one;

    @include large-device {
      padding: 16px 30px;
    }

    @include medium-device {
      padding: 16px 24px;
    }

    @include small-device {
      padding: 10px 16px;
    }
  }

  &__logo {
    width: 41.5px;
    height: 41.5px;
    border: 2px solid $dark-one;

    @include small-device {
      width: 36px;
      height: 36px;
    }

    img {
      height: 80%;
    }
  }
}
</style>
