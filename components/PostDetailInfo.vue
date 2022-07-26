<template>
  <div class="post-detail-info flex--row row--middle--center">
    <p class="post-detail-info__author">
      <strong> {{ author.full_name }} </strong> | {{ readingTime }} Dk
    </p>
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
      type: Number || String,
      required: true,
    },
  },
}
</script>
<style lang="scss" scoped>
.post-detail-info {
  justify-content: space-between;

  &__author {
    p {
      color: $gray-one;

      strong {
        color: $dark-one;
      }
    }
  }
}
</style>
