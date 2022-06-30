<template>
    <section class="post-detail-content">
        <article class="html-content" v-html="htmlContent"></article>
    </section>
</template>
<script>
import markdownMixin from "@/mixins/markdown.mixin"
export default {
    name: "PostDetailContent",
    mixins: [markdownMixin],
}
</script>
<style lang="scss" scoped>
.post-detail-content {
    width: 60%;
}
</style>