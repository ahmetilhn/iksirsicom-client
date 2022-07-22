<template>
  <div
    id="modal_container"
    class="modal-container flex--row row--middle--center"
  >
    <div class="modal-container__content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ModalContainer',
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
    @include extra-small-device {
      position: absolute;
      padding: 0;
      height: 50vh;
      bottom: 0;
    }
  }
}
</style>
