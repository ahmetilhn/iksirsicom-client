<template>
  <modal-container :is-visible="isVisible" @click-outside="clickOutsideHandler">
    <div class="subscribe-modal flex--column column--middle--center">
      <div class="subscribe-modal__body">
        <h6>Bültene üye ol!</h6>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </p>
      </div>
      <div class="subscribe-modal__form flex--row row--middle--center">
        <input class="input border-effect" type="text" placeholder="E-posta" />
        <button class="btn-border">Kaydol</button>
      </div>
    </div>
  </modal-container>
</template>
<script lang="js">

import { mapState } from 'vuex';
import ModalContainer from '../ModalContainer.vue'
export default {
    name: "SubscribeModal",
    components: {
        ModalContainer
    },
    computed: {
        ...mapState({
            isVisible: store => store.modules.common.subscriptionModalIsVisible
        })
    },
    methods: {
      clickOutsideHandler(){
        this.$store.commit('modules/common/setSubscriptionModalVisible', false)
      }
    }
}
</script>
<style lang="scss" scoped>
.subscribe-modal {
  width: 100%;
  height: 280px;
  @include extra-small-device {
    height: 100%;
    width: auto;
  }

  &__body {
    text-align: center;
    padding: 0 20px;

    @include extra-small-device {
      padding: 0 $padding-three;
    }

    h6 {
      @include golden-text(25);
      margin-bottom: 10px;
    }

    p {
      @include golden-text(16);
    }
  }

  &__form {
    width: 100%;
    margin-top: 20px;

    input {
      width: calc(70% - 60px);

      @include extra-small-device {
        width: calc(100% - 100px);
        margin-right: 5px;
      }

      margin-right: 20px;
    }
  }
}
</style>
