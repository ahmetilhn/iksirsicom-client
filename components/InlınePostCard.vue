<template>
  <article class="inline-post-card flex--column column--middle--left">
    <nuxt-link :to="'/post/' + postDetail._id" @click.native="linkClick">
      <h2 class="inline-post-card__title">
        {{ postDetail.title }}
      </h2>
      <p class="inline-post-card__desc">
        {{ postDetail.description }}
      </p>
    </nuxt-link>
  </article>
</template>
<script>
export default {
  name: 'InlınePostCard',
  props: {
    postDetail: {
      type: Object,
      default: () => {},
    },
  },
  methods: {
    linkClick() {
      this.$emit('link-click')
    },
  },
}
</script>
<style lang="scss" scoped>
.inline-post-card {
  width: 100%;
  padding: 10px 0;
  border-bottom: 1px solid $gray-two;
  &__title {
    @include golden-text(22);
    margin-bottom: 10px;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    font-weight: bold;
  }

  &__desc {
    @include golden-text(16);
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    color: $dark-two;
  }
}
</style>
