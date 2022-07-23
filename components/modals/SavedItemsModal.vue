<template>
  <modal-container :is-visible="isVisible" @click-outside="clickOutsideHandler">
  </modal-container>
</template>
<script lang="js">

import { mapState } from 'vuex';
import ModalContainer from '../ModalContainer.vue'
export default {
    name: "SavedItemsModal",
    components: {
        ModalContainer
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
<style lang="scss" scoped></style>
