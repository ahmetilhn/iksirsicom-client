<template>
  <div class="app-small-header flex--row row--middle--center">
    <header-author />
  </div>
</template>
<script>
import HeaderAuthor from '~/components/HeaderAuthor.vue'
export default {
  name: 'AppSmallHeader',
  components: {
    HeaderAuthor,
  },
}
</script>
<style lang="scss" scoped>
.app-small-header {
  width: 100%;
  border-bottom: 2px solid $dark-one;
  padding: 10px 0;
  background-color: $primary-color;
  color: $dark-one;
  position: sticky;
  top: 0;
  z-index: 22;

  @include small-device {
    font-size: 13px;
    padding: 8px 0;
  }
}
</style>
