<template>
  <div class="app-small-header flex--row">
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
}
</style>
