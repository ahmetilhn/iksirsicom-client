<template>
    <section class="post-detail-content">
        <div class="post-detail-content__header">
            <h1>Import a HTML file and watch it magically convert to Markdown</h1>
            <h2>This text you see here is *actually- written in Markdown! To get a feel
                for Markdown's syntax, type some text into the left window and

                watch the results in the right.This text you see here is *actually- written in Markdown! To get a feel
                for Markdown's syntax, type some text into the left window and
                watch the results in the right.</h2>
            <post-detail-info />
            <div class="post-detail-content__poster flex--column column--middle--center">
                <figure v-if="true" class="flex--column column--middle--center">
                    <img src="https://i.imgur.com/6xrqbvr.jpeg" alt="" />
                    <figcaption>Photo Title</figcaption>
                </figure>
                <placeholder-image v-if="false" />
            </div>
        </div>
        <article class="post-detail-content__html" v-html="htmlContent"></article>
    </section>
</template>
<script>
import markdownMixin from "@/mixins/markdown.mixin"
import PostDetailInfo from "~/components/PostDetailInfo.vue"
import PlaceholderImage from "~/components/PlaceholderImage.vue"
export default {
    name: "PostDetailContent",
    components: { PostDetailInfo, PlaceholderImage },
    mixins: [markdownMixin],
}
</script>
<style lang="scss">
.post-detail-content {
    width: 100%;
    max-width: 840px;

    &__header {
        font-family: $roboto-slab;

        h1 {
            @include golden-text(44);
            font-weight: 600;

            @include small-device {
                @include golden-text(32);
            }

            @include extra-small-device {
                @include golden-text(28);
            }
        }

        h2 {
            @include golden-text(20);
            padding: 40px 0;
        }

    }

    &__poster {

        padding: 40px 0;

        min-height: 400px;

        figure {
            img {
                width: 100%;
            }

            figcaption {
                font-size: 13px;
                font-weight: 500;
                color: $gray-one;
                margin-top: 10px;
            }
        }

    }

    &__html {

        p,
        span {
            display: block;
            padding: 30px 0;
            @include golden-text(18);

            @include small-device {
                @include golden-text(18);
            }
        }

        h3,
        h4,
        h5,
        h6 {
            font-weight: 500;
            display: block;
        }

        h3 {
            @include golden-text(28);

            @include small-device {
                @include golden-text(24);
            }
        }

        h4 {
            @include golden-text(25);

            @include small-device {
                @include golden-text(21);
            }
        }

        h5 {
            @include golden-text(22);

            @include small-device {
                @include golden-text(19);
            }
        }

        h6 {
            @include golden-text(19);

            @include small-device {
                @include golden-text(18);
            }
        }
    }
}
</style>