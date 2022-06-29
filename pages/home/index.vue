<template>
  <div class="index">
    <welcome-area />
    <vertical-listing />
  </div>
</template>

<script>
import WelcomeArea from './WelcomeArea.vue'
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
