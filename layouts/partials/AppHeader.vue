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
    max-width: 1280px;
  }
  &__logo {
    width: 40px;
    height: 40px;
    border: 2px solid $dark-one;
    border-radius: 5px;
    img {
      height: 30px;
    }
  }
}
</style>
