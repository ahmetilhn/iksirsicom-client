<template>
  <section class="welcome-area flex--column column--middle--center">
    <img src="@/assets/img/logo.svg" alt="İksirsi logo" />
    <h2>Yazılım ve Teknoloji ile ilgili blogları okumaya hazır mısın?</h2>
    <p>
      İyi bir kariyer için, doğru bir başlangıç gerekir. İksirsi'de bir çok dil
      ve teknolojiye ait makaleleri okuyarak yazılım bilgini artırabilirsin.
    </p>
    <button class="btn-border">Hemen Ara</button>
  </section>
</template>
<script>
export default {
  name: 'WelcomeArea',
}
</script>
<style lang="scss" scoped>
.welcome-area {
  width: 100%;
  height: 600px;
  background-color: $gray-two;
  text-align: center;
  img {
    width: 80px;
  }
  h2 {
    @include golden-text(40);
    max-width: 900px;
    font-weight: bold;
    font-family: $roboto-slab;
    margin: 40px 0;
  }
  p {
    @include golden-text(20);
    max-width: 800px;
    color: $dark-two;
    margin-bottom: 40px;
  }
}
</style>
