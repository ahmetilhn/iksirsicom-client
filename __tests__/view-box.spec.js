import { shallowMount } from '@vue/test-utils'
import ViewBox from '~/components/ViewBox.vue'

describe('ViewBox.vue', () => {
  const wrapper = shallowMount(ViewBox, {
    props: {
      viewCount: {
        type: Number,
        required: true,
      },
    },
  })
  it('', async () => {
    await wrapper.setProps({ viewCount: 10 })
    expect(wrapper.find('.view-box__count').text()).toEqual('10')
  })
})
