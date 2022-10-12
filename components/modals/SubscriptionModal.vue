<template>
  <modal-container :is-visible="isVisible" @click-outside="clickOutsideHandler">
    <div class="subscription-modal flex--column column--middle--center">
      <div class="subscription-modal__body">
        <h6>Bültene üye ol!</h6>
        <p>
          Bu sitede paylaşılan Makaleler, mediumda özel olarak seçilmekte. Bu
          özenle seçilmiş makalelerden haberdar olmak istiyorsanız bültene üye
          olun!
        </p>
      </div>
      <div class="subscription-modal__form flex--row row--middle--center">
        <input
          class="input border-effect"
          v-model="email"
          type="text"
          placeholder="E-posta"
        />
        <button
          class="btn-border"
          :disabled="!email.length"
          @click="sendSubscription"
        >
          Kaydol
        </button>
      </div>
    </div>
  </modal-container>
</template>
<script lang="js">

import { mapState } from 'vuex';
import ModalContainer from '../ModalContainer.vue'
import subscriptionService from '~/services/subscription.service';
import { EMAIL_REGEX } from "~/constants/regex.constants"
export default {
    name: "subscriptionModal",
    components: {
        ModalContainer
    },
    data(){
    return{
      email: ""
    }
    },
    computed: {
        ...mapState({
            isVisible: store => store.modules.common.subscriptionModalIsVisible
        })
    },
    methods: {
      clickOutsideHandler(){
        this.$store.commit('modules/common/setSubscriptionModalVisible', false)
      },
      async sendSubscription(){
         if(this.email.match(EMAIL_REGEX)) {
         this.$store.commit("modules/common/setAppIsReady", false)
         const res = await subscriptionService.createSubscription(this.email);
         if(res) {
         this.$store.commit('modules/common/setSubscriptionModalVisible', false)
         }
         this.$store.commit("modules/common/setAppIsReady", true)
         }
         else {
          alert("Lütfen bir e-posta giriniz")
         }
      }
    }
}
</script>
<style lang="scss" scoped>
.subscription-modal {
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
