<template>
  <article class="post-card border-effect">
    <!---Like area-->
    <like-box :like-count="postDetail.info.like" :post-id="postDetail._id" />
    <save-box :is-saved="isSaved" @saveClick="saveClickHandler(postDetail)" />
    <div class="post-card__img flex--row row--middle--center">
      <img
        v-if="postDetail.poster"
        class="post-card__img--original"
        :src="postDetail.poster"
        alt=""
      />
      <!---For not image-->
      <placeholder-image v-else />
    </div>
    <div class="post-card__body">
      <nuxt-link :to="'post/' + postDetail._id">
        <h2 class="post-card__title">
          {{ postDetail.title }}
        </h2>
      </nuxt-link>
      <p class="post-card__desc">
        {{ postDetail.description }}
      </p>
    </div>
    <div class="post-card__info flex--row row--middle--center">
      <span>{{ postDetail.reading_time }} Dakika</span>
      <div class="post-card__tags">
        <nuxt-link to="" v-for="tag in postDetail.tags" :key="tag">
          {{ tag }}
        </nuxt-link>
      </div>
    </div>
  </article>
</template>

<script>
import PlaceholderImage from '../PlaceholderImage.vue'
import LikeBox from './LikeBox.vue'
import SaveBox from './SaveBox.vue'
import savePostMixin from '~/mixins/save-post.mixin'
export default {
  name: 'PostCard',
  components: { LikeBox, SaveBox, PlaceholderImage },
  mixins: [savePostMixin],
  props: {
    postDetail: {
      type: Object,
      default: () => {},
    },
  },
}
</script>
<style lang="scss" scoped>
.post-card {
  width: 33.33%;
  padding: 15px;
  border-width: 4px;
  position: relative;

  ::v-deep {
    .like-box,
    .save-box {
      position: absolute;
      left: 30px;
      top: 30px;
    }

    .save-box {
      left: auto;
      right: 30px;
    }
  }

  &__img {
    width: 100%;
    height: 240px;

    &--original {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__body {
    width: 100%;
    height: 188px;
    padding: 10px 0;
  }

  &__title {
    @include golden-text(22);
    margin-bottom: 20px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    font-weight: bold;
  }

  &__desc {
    @include golden-text(16);
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    color: $dark-two;
  }

  &__info {
    padding: 10px 0;
    justify-content: space-between;

    span {
      color: $dark-two;
      font-weight: bold;
      font-size: 13px;
    }
  }

  &__tags {
    a {
      font-size: 13px;
      color: $dark-two;
      margin: 5px;
    }
  }
}
</style>
