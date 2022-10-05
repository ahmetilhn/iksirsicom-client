<template>
  <div class="view-box flex--column column--middle--center">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
      <path fill="none" d="M0 0h48v48h-48z" />
      <path
        d="M24 9c-10 0-18.54 6.22-22 15 3.46 8.78 12 15 22 15 10.01 0 18.54-6.22 22-15-3.46-8.78-11.99-15-22-15zm0 25c-5.52 0-10-4.48-10-10s4.48-10 10-10 10 4.48 10 10-4.48 10-10 10zm0-16c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6z"
      />
    </svg>
    <p class="view-box__count">{{ viewCount }}</p>
  </div>
</template>
<script>
export default {
  name: 'ViewBox',
  props: {
    viewCount: {
      type: Number,
      required: true,
    },
  },
}
</script>
<style lang="scss" scoped>
.view-box {
  svg {
    width: 24px;
    fill: $gray-one;

    &.liked {
      path {
        fill: $red !important;
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
