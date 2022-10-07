import { mount } from '@vue/test-utils'
import AuthorCard from '~/components/AuthorCard.vue'

describe('AuthorCard.vue', () => {
  const wrapper = mount(AuthorCard)
  it('has an avatar', () => {
    const elem = wrapper.find('.author-card__avatar')
    expect(elem.exists()).toBeTruthy()
  })
})
