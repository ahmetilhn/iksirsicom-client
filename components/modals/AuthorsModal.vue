<template>
  <modal-container :is-visible="isVisible" @click-outside="clickOutsideHandler">
    <not-result v-if="true" />
  </modal-container>
</template>
<script lang="js">

import { mapState } from 'vuex';
import ModalContainer from '../ModalContainer.vue'
import NotResult from '../results/NotResult.vue';
export default {
    name: "AuthorsModal",
    components: {
        ModalContainer,
        NotResult
    },
    computed: {
        ...mapState({
            isVisible: store => store.modules.common.authorsModalIsVisible,
        })
    },
    methods: {
      clickOutsideHandler(){
        this.$store.commit('modules/common/setSavedItemsModalVisible', false)
      },
    }
}
</script>
<style lang="scss" scoped>
::v-deep .not-result {
  min-height: 280px;
}
</style>
