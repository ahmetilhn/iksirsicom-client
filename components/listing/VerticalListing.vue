<template>
  <div class="vertical-listing flex--row row--middle--center">
    <template v-if="posts.length">
      <div class="vertical-listing__items flex--row row--middle--left">
        <post-card :post-detail="post" v-for="post in posts" :key="post._id" />
      </div>
      <div class="vertical-listing__bottom flex--row row--middle--center">
        <button class="btn-border" @click="getData">Daha Fazla Gör</button>
      </div>
    </template>
    <template v-else>
      <not-result description="Henüz bir makale yok :(" />
    </template>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import PostCard from '../post/PostCard.vue'
import NotResult from '../results/NotResult.vue'
export default {
  name: 'VerticalListing',
  components: { PostCard, NotResult },
  data() {
    return {
      limit: 6,
    }
  },
  computed: {
    ...mapState({
      posts: (store) => store.modules.posts.posts,
    }),
  },
  methods: {
    async getData() {
      this.$store.commit('modules/common/setAppIsReady', false)
      await this.$store.dispatch('modules/posts/getAllPosts', {
        limit: this.limit,
      })
      this.$store.commit('modules/common/setAppIsReady', true)
      this.limit = this.limit + 3
    },
  },
}
</script>
<style lang="scss" scoped>
.vertical-listing {
  max-width: 1280px;
  padding: 50px 0;
  flex-wrap: wrap;
  min-height: 500px;
  @include large-device {
    padding: 50px $padding-one;
  }

  @include medium-device {
    padding: 50px $padding-two;
  }

  @include small-device {
    padding: 50px $padding-three;
  }

  ::v-deep {
    .post-card {
      width: calc(33.33% - 16px);
      margin: 8px;
      @include medium-device {
        width: calc(50% - 16px);
      }
      @include extra-small-device {
        width: 100%;
        margin: 10px 0;
      }
    }
  }

  &__bottom {
    margin-top: 40px;
    width: 100%;
  }
  &__items {
    width: 100%;
    flex-wrap: wrap;
  }
}
</style>
