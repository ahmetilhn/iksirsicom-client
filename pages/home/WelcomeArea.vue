<template>
  <section class="welcome-area flex--column column--middle--center">
    <img src="@/assets/img/logo.svg" alt="İksirsi logo" />
    <h2>Yazılım ve Teknoloji ile ilgili blogları okumaya hazır mısın?</h2>
    <p>İnternetteki tekdüze bloglardan sıkıldıysanız doğru yerdesiniz.</p>
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
  height: 500px;
  background-color: $gray-two;
  text-align: center;
  img {
    width: 80px;
  }
  h2 {
    font-size: 46px;
    max-width: 900px;
    font-weight: bold;
    font-family: $roboto-slab;
    margin: 40px 0;
  }
  p {
    font-size: 20px;
    color: $dark-two;
    margin-bottom: 40px;
  }
}
</style>
