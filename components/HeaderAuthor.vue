<template>
  <div class="author">
    <p>
      DEV by <strong>Ahmet İlhan</strong> DEVOPS by
      <strong>Mustafa İlhan</strong>
    </p>
  </div>
</template>
<style lang="scss" scoped>
.author {
  font-weight: normal;
  font-size: 14px;
  @include small-device {
    font-size: 12px;
    padding: 8px 0;
  }
}
</style>
