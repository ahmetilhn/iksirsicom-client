import { mount } from '@vue/test-utils'
import NotResult from '~/components/results/NotResult.vue'

describe('Name of the group', () => {
  const wrapper = mount(NotResult, {
    propsData: {
      description: 'İçerik bulunamadı',
    },
  })
  it('has img', () => {
    const imgElem = wrapper.find('.not-result > img')
    expect(imgElem.exists()).toBeTruthy()
    expect(imgElem.attributes().src).toBe('@/assets/img/logo-animation.svg')
  })
  it('has description', () => {
    const pElem = wrapper.find('.not-result > p')
    expect(pElem.exists()).toBeTruthy()
    expect(pElem.text()).toBe('İçerik bulunamadı')
  })
})
