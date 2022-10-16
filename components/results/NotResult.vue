<template>
  <div class="not-result flex--column column--middle--center">
    <img src="@/assets/img/logo-animation.svg" alt="" />
    <p>{{ description }}</p>
  </div>
</template>
<script>
export default {
  name: 'NotResult',
  props: {
    description: {
      type: String,
      default: 'Sonuç bulunmadı',
      required: false,
    },
  },
}
</script>
<style lang="scss" scoped>
.not-result {
  width: 100%;
  height: 100%;
  img {
    width: 40px;
    height: 40px;
    margin-bottom: 20px;
    filter: grayscale(1);
  }
}
</style>
