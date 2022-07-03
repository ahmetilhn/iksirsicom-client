<template>
    <div class="post-tags flex--row row--middle--center">
        <nuxt-link :to="tag.value" v-for="tag in tags" :key="tag.value">{{ tag.label }}</nuxt-link>
    </div>
</template>
<script>
export default {
    name: "PostTags",
    data() {
        return {
            tags: [
                { label: "Tag 1", value: "tag-1" },
                { label: "Tag 2", value: "tag-2" },
                { label: "Tag 3", value: "tag-3" },
                { label: "Tag 4", value: "tag-4" }
            ]
        }
    }
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