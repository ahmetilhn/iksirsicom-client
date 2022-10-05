import { shallowMount } from '@vue/test-utils'
import SaveBox from '~/components/SaveBox.vue'

describe('SaveBox.vue', () => {
  const wrapper = shallowMount(SaveBox, {
    props: {
      isSaved: {
        type: Boolean,
        default: false,
      },
    },
  })
  it('isSave comes true', () => {
    expect(wrapper.find('.saved').exists()).toBeFalsy()
  })
  it('isSave comes true', async () => {
    await wrapper.setProps({ isSaved: true })
    expect(wrapper.find('.saved').exists()).toBeTruthy()
  })
  it('emit trigger by click', async () => {
    await wrapper.setProps({ isSaved: false })
    const elem = wrapper.find('.save-box > svg')
    await elem.trigger('click')
    expect(wrapper.emitted().saveClick).toBeTruthy()
  })
})
