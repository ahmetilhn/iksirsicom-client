<template>
  <div class="author-card flex--column column--middle--center">
    <div
      v-if="author.avatar"
      class="flex--row row--middle--center author-card__avatar"
    >
      <img :src="author.avatar" alt="" />
    </div>
    <div
      class="flex--row row--middle--center author-card__avatar author-card__avatar--not-avatar"
      v-else
    >
      <img src="@/assets/img/logo.svg" alt="" />
    </div>
    <p>
      <strong>{{ author.full_name }}</strong>
    </p>
    <div class="author-card__links flex--row row--middle--center">
      <a :href="author.github_url" target="BLANK">
        <img src="@/assets/img/social/github.svg" alt="" />
      </a>
      <a :href="author.linkedin_url" target="BLANK">
        <img src="@/assets/img/social/linkedin.svg" alt="" />
      </a>
      <a :href="author.medium_url" target="BLANK">
        <img src="@/assets/img/social/medium.svg" alt="" />
      </a>
    </div>
  </div>
</template>
<script>
export default {
  name: 'AuthorCard',
  props: {
    author: {
      type: Object,
      default: () => {},
      required: true,
    },
  },
}
</script>
<style lang="scss" scoped>
.author-card {
  border: 2px solid $dark-one;
  padding: 15px;
  border-radius: 5px;
  background-color: $gray-one;
  &__avatar {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    margin-bottom: 10px;
    border: 3px solid $dark-two;
    background-color: $white;
    overflow: hidden;
    img {
      width: 110%;
      height: 110%;
      object-fit: cover;
    }
    &--not-avatar {
      img {
        width: 70%;
        height: 70%;
        filter: grayscale(1);
        object-fit: contain;
      }
    }
  }
  &__links {
    margin-top: 10px;
    a {
      width: 36px;
      display: block;
      height: 36px;
      background-color: $white;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0 5px;
      border: 2px solid $dark-one;
      img {
        height: 18px;
      }
    }
  }
}
</style>
