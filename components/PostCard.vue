<template>
  <article class="post-card border-effect">
    <!---Like area-->
    <like-box />
    <save-box />
    <div class="post-card__img flex--row row--middle--center">
      <img v-if="false" class="post-card__img--original"
        src="https://www.bleepstatic.com/content/hl-images/2017/03/09/JavaScript.jpg" />
      <!---For not image-->
      <placeholder-image v-if="true" />
    </div>
    <div class="post-card__body">
      <nuxt-link to="/post/12">
        <h2 class="post-card__title">
          Managing Secrets in Node.js with HashiCorp Vault
        </h2>
      </nuxt-link>
      <p class="post-card__desc">
        As the number of services grows in an organization, the problem of
        secret management only gets worse. Between Zero Trust and the emergence
        of microservices, handling secrets such as tokens, credentials, and keys
        has become an increasingly challenging task. That’s where a solution
        like HashiCorp’s Vault can help organizations solve their secret
        management woes.
      </p>
    </div>
    <div class="post-card__info flex--row row--middle--center">
      <span>2 DK'lık okuma</span>
      <div class="post-card__tags">
        <nuxt-link to="">Javascript</nuxt-link>
        <nuxt-link to="">Nodejs</nuxt-link>
        <nuxt-link to="">RestAPI</nuxt-link>
      </div>
    </div>
  </article>
</template>

<script>
import LikeBox from './LikeBox.vue'
import SaveBox from './SaveBox.vue'
import PlaceholderImage from './PlaceholderImage.vue'
import savePostMixin from '~/mixins/save-post.mixin'
export default {
  name: 'PostCard',
  components: { LikeBox, SaveBox, PlaceholderImage },
  mixins: [savePostMixin]
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
