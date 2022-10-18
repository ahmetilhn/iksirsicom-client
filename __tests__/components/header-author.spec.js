import { mount } from '@vue/test-utils'
import HeaderAuthor from '~/components/HeaderAuthor.vue'

describe('HeaderAuthor.vue', () => {
  const wrapper = mount(HeaderAuthor)
  it('has p and strong tag', () => {
    const elem = wrapper.find('.author > a > strong')
    expect(elem.exists).toBeTruthy()
    expect(elem.text()).toContain('Destek Ol')
  })
  it('check visible svg icon', () => {
    const svgElem = wrapper.find('.author > a > svg')
    expect(svgElem.exists()).toBeTruthy()
  })
})
