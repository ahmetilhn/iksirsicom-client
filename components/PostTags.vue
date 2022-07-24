<template>
  <div class="post-tags flex--row row--middle--center">
    <nuxt-link :to="tag" v-for="tag in tags" :key="tag">{{ tag }}</nuxt-link>
  </div>
</template>
<script>
export default {
  name: 'PostTags',
  props: {
    tags: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.post-tags {
  a {
    background-color: $gray-two;
    display: block;
    padding: 4px 8px;
    border-radius: 3px;
    margin-right: 5px;
    font-size: 13px;
  }
}
</style>
