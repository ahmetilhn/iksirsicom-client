<template>
  <div class="post-detail-info flex--row row--middle--center">
    <div class="post-detail-info__left flex--row row--middle--center">
      <a href="author.social">
        <img :src="author.avatar" :alt="author.full_name" />
      </a>
      <div class="post-detail-info__text flex--column column--top-left">
        <p class="post-detail-info__author">
          <strong> {{ author.full_name }} </strong>
        </p>
        <span>{{ readingTime }} Dk</span>
      </div>
    </div>
    <view-box :view-count="viewCount" />
  </div>
</template>
<script>
import ViewBox from './ViewBox.vue'
export default {
  name: 'PostDetailInfo',
  components: {
    ViewBox,
  },
  props: {
    author: {
      type: Object,
      required: true,
    },
    readingTime: {
      type: Number,
      required: true,
    },
    viewCount: {
      type: Number,
      required: true,
    },
  },
}
</script>
<style lang="scss" scoped>
.post-detail-info {
  justify-content: space-between;
  &__left {
    img {
      width: 46px;
      height: 46px;
      border-radius: 50%;
      object-fit: cover;
      margin-right: 10px;
    }

    span {
      color: $gray-one;
      margin-top: 8px;
    }
    &__text {
      margin-left: 10px;
    }
  }
}
</style>
