<template>
  <div class="vertical-listing flex--row row--middle--center">
    <post-card />
  </div>
</template>
<script>
import PostCard from '../PostCard.vue'

export default {
  name: 'VerticalListing',
  components: { PostCard },
}
</script>
<style lang="scss" scoped>
.vertical-listing {
  max-width: 1280px;
  padding: 50px 0;
}
</style>
