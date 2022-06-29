<template>
  <article class="post-card border-effect">
    <div class="post-card__img">
      <img
        src="https://assets.codepen.io/285131/uslmOwQpdRRUwr6AmBP6JdzeHjS.jpg"
      />
    </div>
    <div class="post-card__body">
      <h2 class="post-card__title">
        Managing Secrets in Node.js with HashiCorp Vault
      </h2>
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
export default {
  name: 'PostCard',
}
</script>
<style lang="scss" scoped>
.post-card {
  width: 33.33%;
  padding: 10px;
  border-width: 4px;
  &__img {
    width: 100%;
    height: 300px;
    img {
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
    -webkit-line-clamp: 4;
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
