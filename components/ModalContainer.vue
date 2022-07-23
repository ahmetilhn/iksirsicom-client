<template>
  <div
    v-if="isVisible"
    id="modal_container"
    class="modal-container flex--row row--middle--center"
  >
    <div
      class="modal-container__content flex--column column--middle--center border-effect border-effect--no-hover"
    >
      <slot></slot>
    </div>
  </div>
</template>
<script>
import lockScrollMixin from '~/mixins/lock-scroll.mixin'
export default {
  name: 'ModalContainer',
  mixins: [lockScrollMixin],
  props: {
    isVisible: {
      type: Boolean,
      default: false,
    },
  },
  watch: {
    isVisible(newValue, _) {
      this.lockScroll(newValue)
    },
  },
  mounted() {
    this.clickOutsideHandler()
  },
  methods: {
    clickOutsideHandler() {
      const _t = this
      window.addEventListener('click', function (e) {
        if (e.target.id === 'modal_container') {
          _t.$emit('click-outside')
        }
      })
    },
  },
}
</script>
<style lang="scss" scoped>
.modal-container {
  width: 100vw;
  height: 100vh;
  position: fixed;
  backdrop-filter: blur(10px);
  left: 0;
  top: 0;
  z-index: 111111;

  @include medium-device {
    padding: 0 $padding-two;
  }

  &__content {
    max-width: 100%;
    width: 600px;
    min-height: 280px;
    background-color: $white;
    border-radius: 12px;
    padding: 10px;
    @include extra-small-device {
      position: absolute;
      height: 50vh;
      bottom: 0;
      box-shadow: none;
      border-radius: 30px 30px 0 0;
      padding: 14px;
    }
  }
}
</style>
