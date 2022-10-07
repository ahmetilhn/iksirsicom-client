import { mount } from '@vue/test-utils'
import HeaderAuthor from '~/components/HeaderAuthor.vue'

describe('HeaderAuthor.vue', () => {
  const wrapper = mount(HeaderAuthor)
  it('has p and strong tag', () => {
    const elem = wrapper.find('.author > p')
    expect(elem.exists).toBeTruthy()
    expect(elem.text()).toContain('Ahmet İlhan')
  })
})
