<template>
  <div class="like-box flex--column column--middle--center">
    <svg viewBox="0 0 20 18" :class="{ liked: isLike }" xmlns="http://www.w3.org/2000/svg" @click="liked">
      <path
        d="M10 18C6.38665 14.7733 3.36594e-05 10.7597 3.20929e-05 5.3951C3.12107e-05 2.37384 2.42003 7.06637e-07 5.50003 1.60599e-06C7.24003 2.11407e-06 8.91003 0.744417 10 2C11.09 0.744417 12.76 3.7259e-06 14.5 4.23398e-06C17.58 5.13334e-06 20 2.37385 20 5.3951C20 10.751 13.6214 14.7907 10 18Z"
        fill="white" />
    </svg>
    <p>{{ likeCount }}</p>
  </div>
</template>
<script>

export default {
  name: 'LikeBox',
  data() {
    return {
      isLike: false,
      likeCount: 23,
    }
  },
  methods: {
    liked() {
      if (this.isLike) {
        this.isLike = false;
        this.likeCount--;
      }
      else {
        this.isLike = true;
        this.likeCount++;
      }
    },
  },
}
</script>
<style lang="scss" scoped>
.like-box {
  svg {
    width: 19px;
    cursor: pointer;

    path {
      fill: $gray-one;
    }

    &.liked {
      path {
        fill: $red  !important;
      }
    }
  }

  p {
    font-size: 12px;
    color: $gray-one;
    font-weight: 500;
    margin-top: 10px;
    font-family: $roboto-slab;
  }
}
</style>
