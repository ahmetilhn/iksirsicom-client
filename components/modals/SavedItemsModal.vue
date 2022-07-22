<template>
  <modal-container v-if="isVisible">
    <div
      class="subscribe-modal flex--column column--middle--center border-effect border-effect--no-hover"
    >
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
import lockScrollMixin from '~/mixins/lock-scroll.mixin';
export default {
    name: "SavedItemsModal",
    components: {
        ModalContainer
    },
    mixins: [lockScrollMixin],
    computed: {
        ...mapState({
            isVisible: store => store.modules.common.savedItemsModalIsVisible
        })
    },
    watch: {
        isVisible(newValue, _) {
            this.lockScroll(newValue)
        }
    },
    mounted() {
        this.clickOutsideHandler();
    },
    methods: {
        clickOutsideHandler() {
            const self = this;
            window.addEventListener('click', function (e) {
                if (e.target.id === 'modal_container') {
                    self.$store.commit('modules/common/setSavedItemsModalVisible', false)
                }
            });
        }
    },
}
</script>
<style lang="scss" scoped>
.subscribe-modal {
  max-width: 100vw;
  width: 600px;
  height: 280px;
  background-color: $white;
  border-radius: 12px;

  @include extra-small-device {
    height: 100%;
    border-radius: 20px 20px 0 0;
    width: auto;
    padding: 10px;
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
