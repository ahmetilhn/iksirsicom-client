import { mount, RouterLinkStub } from '@vue/test-utils'
import InlinePostCard from '~/components/InlinePostCard.vue'

describe('InlinePostCard.vue', () => {
  const wrapper = mount(InlinePostCard, {
    propsData: {
      postDetail: {
        title: 'test title',
        description: 'test description',
      },
    },
    stubs: {
      NuxtLink: RouterLinkStub,
    },
  })
  it('has title', () => {
    const elem = wrapper.find('.inline-post-card__title')
    expect(elem.exists()).toBeTruthy()
    expect(elem.text()).toBe('test title')
  })
  it('has description', () => {
    const elem = wrapper.find('.inline-post-card__desc')
    expect(elem.exists()).toBeTruthy()
    expect(elem.text()).toBe('test description')
  })

  it('doing the emitting', async () => {
    const link = wrapper.find('.inline-post-card > a')
    await link.trigger('click')
    expect(wrapper.emitted()['link-click'])
  })
})
