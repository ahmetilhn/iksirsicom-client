<template>
  <modal-container :is-visible="isVisible" @click-outside="clickOutsideHandler">
    <template v-if="authors.length">
      <div class="authors flex--row row--middle--center">
        <author-card
          v-for="author in authors"
          :key="author._id"
          :author="author"
        />
      </div>
    </template>
    <template v-else>
      <not-result description="Henüz bir yazar yok :(" />
    </template>
  </modal-container>
</template>
<script lang="js">
import { mapState } from 'vuex';
import ModalContainer from '../ModalContainer.vue'
import NotResult from '../results/NotResult.vue';
import AuthorCard from '../AuthorCard.vue';
import userService from '~/services/user.service';
export default {
    name: "AuthorsModal",
    components: {
    ModalContainer,
    NotResult,
    AuthorCard
    },
    data(){
      return{
        authors: []
      }
    },
    computed: {
        ...mapState({
            isVisible: store => store.modules.common.authorsModalIsVisible,
        })
    },
    mounted(){
      this.fetchUsers();
    },
    methods: {
      clickOutsideHandler(){
        this.$store.commit('modules/common/setAuthorsModalVisible', false)
      },
      async fetchUsers(){
      if(process.client){
        const res = await userService.getUsers();
        if(res){
          this.authors = res
        }
      }
      }
    },
}
</script>
<style lang="scss" scoped>
.authors {
  width: 100%;
  height: 100%;
  min-height: 280px;
  flex-wrap: wrap;
  ::v-deep .author-card {
    margin: 10px;
  }
  @include small-device {
    ::v-deep .author-card {
      margin: 5px;
      width: calc(50% - 10px);
    }
  }
}
::v-deep .not-result {
  min-height: 280px;
}
</style>
