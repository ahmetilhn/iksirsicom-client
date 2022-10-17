<template>
  <div class="post flex--row row--middle--center">
    <post-detail-content :post-detail="postDetail" />
  </div>
</template>
<script>
import PostDetailContent from '@/components/post/PostDetailContent.vue'
import viewService from '~/services/view.service'
export default {
  name: 'PostDetail',
  components: { PostDetailContent },
  layout: 'DefaultLayout',
  async asyncData({ app, store, params }) {
    store.commit('modules/common/setAppIsReady', false)
    const postDetail = await store.dispatch(
      'modules/posts/getPostById',
      params.id
    )
    if (postDetail) {
      await viewService.createView(params.id)
      store.commit('modules/common/setAppIsReady', true)
      return {
        postDetail,
      }
    }
  },
  head() {
    return {
      title: this.postDetail.title,
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: 'description',
          name: 'description',
          content: this.postDetail?.description,
        },
      ],
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
