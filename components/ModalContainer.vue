<template>
  <div v-if="isVisible" class="modal-container flex--row row--middle--center">
    <slot></slot>
  </div>
</template>
<script>
import lockScrollMixin from '@/mixins/lock-scroll.mixin'
export default {
  name: 'ModalContainer',
  mixins: [lockScrollMixin],
  data() {
    return {
      isVisible: false,
    }
  },
  watch: {
    isVisible(newVal, _) {
      this.lockScroll(newVal)
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
}
</style>
