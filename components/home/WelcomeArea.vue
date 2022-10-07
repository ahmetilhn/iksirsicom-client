<template>
  <section class="welcome-area flex--column column--middle--center">
    <img src="@/assets/img/logo.svg" alt="İksirsi logo" />
    <h2>Yazılım ve Teknoloji ile ilgili blogları okumaya hazır mısın?</h2>
    <p>
      İyi bir kariyer için, doğru bir başlangıç gerekir. İksirsi'de bir çok dil
      ve teknolojiye ait makaleleri okuyarak yazılım bilgini artırabilirsin.
    </p>
    <button class="btn-border" @click="goToScroll(300, '.vertical-listing')">Hemen Başla</button>
  </section>
</template>
<script>
import { goToScroll } from '~/utils/scroll.util'
export default {
  name: 'WelcomeArea',
  data() {
    return {
      goToScroll,
    }
  },
}
</script>
<style lang="scss" scoped>
.welcome-area {
  width: 100%;
  height: 600px;
  background-color: $gray-three;
  text-align: center;

  @include small-device {
    padding: 0 $padding-three;
    height: calc(100vh - 90px);
  }

  img {
    width: 80px;

    @include medium-device {
      width: 70px;
    }

    @include small-device {
      width: 60px;
    }
  }

  h2 {
    @include golden-text(40);
    max-width: 900px;
    font-weight: bold;
    font-family: $roboto-slab;
    margin: 40px 0;

    @include medium-device {
      @include golden-text(37);
    }

    @include small-device {
      @include golden-text(32);
    }
  }

  p {
    @include golden-text(20);
    max-width: 800px;
    color: $dark-two;
    margin-bottom: 40px;

    @include medium-device {
      @include golden-text(18);
    }

    @include medium-device {
      @include golden-text(16);
    }
  }
}
</style>
