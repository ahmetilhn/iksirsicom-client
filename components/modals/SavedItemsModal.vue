<template>
  <modal-container :is-visible="isVisible" @click-outside="clickOutsideHandler">
    <template v-if="savedItems.length">
      <div class="items flex--column column--top--left">
        <inline-post-card
          v-for="item in savedItems"
          :key="item.id"
          :post-detail="item"
          @link-click="linkClickHandler"
        />
      </div>
    </template>
    <template v-else>
      <not-result />
    </template>
  </modal-container>
</template>
<script lang="js">

import { mapState } from 'vuex';
import ModalContainer from '../ModalContainer.vue'
import InlinePostCard from '../InlınePostCard.vue';
import NotResult from '../results/NotResult.vue';
export default {
    name: "SavedItemsModal",
    components: {
        ModalContainer,
        InlinePostCard,
        NotResult
    },
    computed: {
        ...mapState({
            isVisible: store => store.modules.common.savedItemsModalIsVisible,
            savedItems: store => store.modules.savedItems.items
        })
    },
    methods: {
      clickOutsideHandler(){
        this.$store.commit('modules/common/setSavedItemsModalVisible', false)
      },
      linkClickHandler(){
           this.$store.commit('modules/common/setSavedItemsModalVisible', false)
      }
    }
}
</script>
<style lang="scss" scoped>
.items {
  width: 100%;
  padding: 10px 20px;
  height: 100%;
  overflow-y: scroll;
}
::v-deep .not-result {
  min-height: 280px;
}
</style>
