<template>
  <div class="vertical-listing flex--row row--middle--center">
    <post-card v-for="item in 6" :key="item" />
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
  flex-wrap: wrap;
  justify-content: space-between;
  ::v-deep {
    .post-card {
      width: calc(33.33% - 10px);
      margin-bottom: 20px;
    }
  }
}
</style>
