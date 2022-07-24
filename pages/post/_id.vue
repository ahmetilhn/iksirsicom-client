<template>
  <div class="post flex--row row--middle--center">
    <post-detail-content :post-detail="data" />
  </div>
</template>
<script>
import PostDetailContent from '@/components/post/PostDetailContent.vue'
export default {
  name: 'PostDetail',
  components: { PostDetailContent },
  layout: 'DefaultLayout',
  async asyncData({ store, params }) {
    const { data } = await store.dispatch(
      'modules/posts/getPostById',
      params.id
    )
    if (data) {
      return {
        data,
      }
    }
  },
}
</script>
<style lang="scss" scoped>
.post {
  padding: 50px 0;
  width: 100%;
  max-width: $max-width-one;

  @include medium-device {
    padding: 50px $padding-one;
  }

  @include small-device {
    padding: 40px $padding-two;
  }

  @include extra-small-device {
    padding: 30px $padding-three;
  }
}
</style>
