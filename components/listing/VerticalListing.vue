<template>
  <div class="vertical-listing flex--row row--middle--center">
    <post-card :postDetail="item" v-for="item in items" :key="item.id" />
    <div class="vertical-listing__bottom flex--row row--middle--center">
      <button class="btn-border">Daha fazla gör</button>
    </div>
  </div>
</template>
<script>
import PostCard from '../PostCard.vue'

export default {
  name: 'VerticalListing',
  data() {
    return {
      items: [
        {
          id: 1,
          title: '4 Passive Income Streams for a Programmer',
          description:
            'Learn how to generate passive income as a programmer. — Everybody wants to earn extra money but due to time constraints and jobs, we can not give extra time to earn extra money. Think about that you are sleeping an',
        },
        {
          id: 2,
          title: 'Basics Of SQL',
          description:
            'Introduction In the past, present, and in future, SQL is one of the most used Query languages for enterprise application development in the Software Industry. It’s flexible and user-friendly and easy to learn. It supports',
        },
        {
          id: 3,
          title:
            'Build a Responsive, Modern Dashboard Layout With CSS Grid and Flexbox',
          description:
            'Create a beautiful, responsive dashboard page without any framework and including a sliding side nav — Have you every been mystified by those',
        },
        {
          id: 4,
          title: 'Stop Using Function Parameters Now',
          description:
            'Use object destructuring instead — Functions in JavaScript can be many things, but first and foremost it’s a contract. When we define a function we essentially define a contract between a caller and the implementor. The',
        },
        {
          id: 5,
          title: 'REST API',
          description:
            'What is REST API? — REST stands for “Representational State Transfer”. Client — Our application is requesting the data. Dynamic Server/Cloud —The server to which the client will be trying to access the data from. When',
        },
        {
          id: 6,
          title: 'How I built my tech startup as a solo developer',
          description:
            'Time flies! Here are some thoughts, tips, and mistakes after running a tech company as a solo developer for almost a year. What am I building? ❓ I had the idea that I wanted to build a Crossfit training app for gyms and athletes',
        },
      ],
    }
  },
  components: { PostCard },
}
</script>
<style lang="scss" scoped>
.vertical-listing {
  max-width: 1280px;
  padding: 50px 0;
  flex-wrap: wrap;
  justify-content: space-between;

  @include large-device {
    padding: 50px $padding-one;
  }

  @include medium-device {
    padding: 50px $padding-two;
  }

  @include small-device {
    padding: 50px $padding-three;
  }

  ::v-deep {
    .post-card {
      width: calc(33.33% - 10px);

      @include medium-device {
        width: calc(50% - 5px);
        margin-bottom: 10px;
      }

      @include extra-small-device {
        width: 100%;
      }

      margin-bottom: 20px;
    }
  }

  &__bottom {
    margin-top: 40px;
    width: 100%;
  }
}
</style>
