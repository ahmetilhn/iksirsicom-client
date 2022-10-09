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
  background-color: $primary-color;
  color: $dark-one;
  position: sticky;
  top: 0;
  z-index: 22;
}
</style>
