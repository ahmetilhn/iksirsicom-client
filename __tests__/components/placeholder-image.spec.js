import { mount } from '@vue/test-utils'
import PlaceholderImage from '~/components/PlaceholderImage.vue'

describe('PlaceholderImage.vue', () => {
  const wrapper = mount(PlaceholderImage)
  const imgElem = wrapper.find('.placeholder-image > img')
  it('has img', () => {
    expect(imgElem.exists()).toBeTruthy()
  })
  it('has img src', () => {
    expect(imgElem.attributes().src).toBe('@/assets/img/logo.svg')
  })
})
