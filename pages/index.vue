<template>
  <div class="index flex--column column--middle--center">
    <welcome-area />
    <vertical-listing />
  </div>
</template>

<script>
import WelcomeArea from '../components/home/WelcomeArea.vue'
import VerticalListing from '@/components/listing/VerticalListing.vue'
export default {
  name: 'IndexPage',
  components: {
    WelcomeArea,
    VerticalListing,
  },
  layout: 'DefaultLayout',
}
</script>
<style lang="scss" scoped>
.index {
  width: 100%;
}
</style>
