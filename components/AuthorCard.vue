<template>
  <div class="author-card flex--column column--middle--center">
    <img
      class="author-card__avatar"
      src="https://media-exp1.licdn.com/dms/image/C4D03AQF52Tcii0IDBw/profile-displayphoto-shrink_800_800/0/1645993304620?e=1664409600&v=beta&t=7CCmp4Gk6kfDm6DloqPoYDjB-vX2GQQQ6eMb0Verk7M"
      alt=""
    />
    <p><strong>Ahmet ilhan</strong></p>
    <div class="author-card__links flex--row row--middle--center">
      <a href="" target="BLANK">
        <img src="@/assets/img/social/github.svg" alt="" />
      </a>
      <a href="" target="BLANK">
        <img src="@/assets/img/social/linkedin.svg" alt="" />
      </a>
      <a href="" target="BLANK">
        <img src="@/assets/img/social/medium.svg" alt="" />
      </a>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.author-card {
  border: 2px solid $dark-one;
  padding: 15px;
  border-radius: 5px;
  background-color: $primary-color;
  &__avatar {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    margin-bottom: 10px;
    border: 3px solid $dark-one;
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
