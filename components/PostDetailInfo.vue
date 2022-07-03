<template>
    <div class="post-detail-info flex--row row--middle--center">
        <p class="post-detail-info__author">Author: <strong>Ahmet ilhan</strong></p>
        <view-box />
    </div>
</template>
<script>
import ViewBox from './ViewBox.vue'
export default {
    name: "PostDetailInfo",
    components: {
        ViewBox
    }
}
</script>
<style lang="scss" scoped>
.post-detail-info {
    justify-content: space-between;

    &__author {
        p {
            color: $gray-one;

            strong {
                color: $dark-one;
            }
        }
    }
}
</style>
