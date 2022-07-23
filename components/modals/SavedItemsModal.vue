<template>
  <modal-container v-if="isVisible"> </modal-container>
</template>
<script lang="js">

import { mapState } from 'vuex';
import ModalContainer from '../ModalContainer.vue'
import lockScrollMixin from '~/mixins/lock-scroll.mixin';
export default {
    name: "SavedItemsModal",
    components: {
        ModalContainer
    },
    mixins: [lockScrollMixin],
    computed: {
        ...mapState({
            isVisible: store => store.modules.common.savedItemsModalIsVisible
        })
    },
    watch: {
        isVisible(newValue, _) {
            this.lockScroll(newValue)
        }
    },
    mounted() {
        this.clickOutsideHandler();
    },
    methods: {
        clickOutsideHandler() {
            const self = this;
            window.addEventListener('click', function (e) {
                if (e.target.id === 'modal_container') {
                    self.$store.commit('modules/common/setSavedItemsModalVisible', false)
                }
            });
        }
    },
}
</script>
<style lang="scss" scoped></style>
