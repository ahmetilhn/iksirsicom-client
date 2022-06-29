<template>
  <div class="modal-container flex--row row--middle--center">
    <slot></slot>
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
}
</style>
