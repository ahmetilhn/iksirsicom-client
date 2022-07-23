<template>
  <modal-container :is-visible="isVisible" @click-outside="clickOutsideHandler">
    <div class="items flex--column column--top--left">
      <inline-post-card v-for="item in 5" :key="item" />
    </div>
  </modal-container>
</template>
<script lang="js">

import { mapState } from 'vuex';
import ModalContainer from '../ModalContainer.vue'
import InlinePostCard from '../InlınePostCard.vue';
export default {
    name: "SavedItemsModal",
    components: {
        ModalContainer,
        InlinePostCard
    },
    computed: {
        ...mapState({
            isVisible: store => store.modules.common.savedItemsModalIsVisible
        })
    },
    methods: {
      clickOutsideHandler(){
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
</style>
