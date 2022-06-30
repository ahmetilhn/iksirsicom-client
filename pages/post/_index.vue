<template>
    <div class="post">
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