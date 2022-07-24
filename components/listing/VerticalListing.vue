<template>
  <div class="vertical-listing flex--row row--middle--center">
    <post-card :postDetail="item" v-for="item in items" :key="item.id" />
    <div class="vertical-listing__bottom flex--row row--middle--center">
      <button class="btn-border">Daha fazla gör</button>
    </div>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
import PostCard from '../PostCard.vue'
export default {
  name: 'VerticalListing',
  components: { PostCard },
  data() {
    return {
      items: [],
    }
  },
  fetch(context) {
    context.getAllPosts()
  },
  methods: {
    ...mapActions({
      getAllPosts: 'modules/posts/getAllPosts',
    }),
  },
  mounted() {
    this.getAllPosts()
  },
}
</script>
<style lang="scss" scoped>
.vertical-listing {
  max-width: 1280px;
  padding: 50px 0;
  flex-wrap: wrap;
  justify-content: space-between;

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
      width: calc(33.33% - 10px);

      @include medium-device {
        width: calc(50% - 5px);
        margin-bottom: 10px;
      }

      @include extra-small-device {
        width: 100%;
      }

      margin-bottom: 20px;
    }
  }

  &__bottom {
    margin-top: 40px;
    width: 100%;
  }
}
</style>
