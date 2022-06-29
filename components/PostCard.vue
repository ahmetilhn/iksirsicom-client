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
  }
  &__desc {
    @include golden-text(18);
    line-clamp: 3;
  }
}
</style>
