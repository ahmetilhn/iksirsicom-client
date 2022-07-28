<template>
  <modal-container :is-visible="isVisible" @click-outside="clickOutsideHandler">
    <template v-if="true">
      <div class="authors flex--row row--middle--center">
        <author-card />
        <author-card />
      </div>
    </template>
    <template v-else>
      <not-result v-if="false" />
    </template>
  </modal-container>
</template>
<script lang="js">

import { mapState } from 'vuex';
import ModalContainer from '../ModalContainer.vue'
import NotResult from '../results/NotResult.vue';
import AuthorCard from '../AuthorCard.vue';
export default {
    name: "AuthorsModal",
    components: {
    ModalContainer,
    NotResult,
    AuthorCard
},
    computed: {
        ...mapState({
            isVisible: store => store.modules.common.authorsModalIsVisible,
        })
    },
    methods: {
      clickOutsideHandler(){
        this.$store.commit('modules/common/setAuthorsModalVisible', false)
      },
    }
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
}
::v-deep .not-result {
  min-height: 280px;
}
</style>
