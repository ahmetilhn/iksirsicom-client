import { mount } from '@vue/test-utils'
import ModalContainer from '~/components/ModalContainer.vue'

describe('ModalContainer.vue', () => {
  const wrapper = mount(ModalContainer, {
    props: {
      type: Boolean,
      default: false,
    },
  })
  it('show with isVisible', async () => {
    await wrapper.setProps({
      isVisible: true,
    })
    const elem = wrapper.find('#modal_container')
    expect(elem.exists()).toBeTruthy()
  })

  it('not show with isVisible', async () => {
    await wrapper.setProps({
      isVisible: false,
    })
    const elem = wrapper.find('#modal_container')
    expect(elem.exists()).toBeFalsy()
  })
})
