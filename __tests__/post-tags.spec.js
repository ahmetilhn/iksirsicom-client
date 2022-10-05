import { mount, RouterLinkStub } from '@vue/test-utils'
import PostTags from '~/components/PostTags.vue'

describe('PostCard.vue', () => {
  const wrapper = mount(PostTags, {
    props: {
      tags: {
        type: Array,
        required: true,
      },
    },
    stubs: {
      NuxtLink: RouterLinkStub,
    },
  })
  it('is have length', async () => {
    await wrapper.setProps({ tags: ['tag 1', 'tag 2', 'tag 3'] })
    const tagElems = wrapper.findAll('.post-tags > a')
    expect(tagElems.length).toEqual(3)
  })
  it('is not have length', async () => {
    await wrapper.setProps({ tags: [] })
    const tagElems = wrapper.findAll('.post-tags > a')
    expect(tagElems.length).toEqual(0)
  })
})
