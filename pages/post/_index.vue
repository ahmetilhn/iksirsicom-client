<template>
    <div class="post flex--row row--middle--center">
        <post-detail-content />
    </div>
</template>
<script>
import PostDetailContent from "./PostDetailContent.vue";
export default {
    name: "PostDetail",
    components: { PostDetailContent },
    layout: "DefaultLayout",
}
</script>
<style lang="scss" scoped>
.post {
    padding: 50px 0;
    width: 100%;
    max-width: $max-width-one;
    justify-content: space-between;
}
</style>