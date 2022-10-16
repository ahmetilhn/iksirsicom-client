<template>
  <div class="post-detail-info flex--row row--middle--center">
    <div class="post-detail-info__left flex--row row--middle--center">
      <a href="">
        <img :src="author.avatar" :alt="author.full_name" />
      </a>
      <div class="post-detail-info__text flex--column column--top-left">
        <p>
          <strong> {{ author.full_name }} </strong>
        </p>
        <div class="flex--row">
          <a v-if="mediumLink" :href="mediumLink">Medium'da oku</a>
          <span>{{ readingTime }} Dk</span>
        </div>
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
    mediumLink: {
      type: String,
      default: '',
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
      border: 2px solid $gray-one;
      object-fit: cover;
      margin-right: 10px;
    }
  }
  &__text {
    margin-left: 2px;
    div {
      margin-top: 7px;
      span {
        color: $gray-one;
        margin-left: 5px;
      }
      a, span {
        font-size: 14px;
      }
      a{
      text-decoration: underline;
      }
    }
  }
}
</style>
