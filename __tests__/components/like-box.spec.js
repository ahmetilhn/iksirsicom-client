import { mount } from '@vue/test-utils'
import Vue from 'vue'
import LikeBox from '~/components/post/LikeBox.vue'
import likeService from '~/services/like.service'

jest.spyOn(likeService, 'createLike').mockResolvedValue('test value')
describe('LikeBox.vue', () => {
  const wrapper = mount(LikeBox, {
    propsData: {
      likeCount: 2,
      postId: '12',
    },
    mocks: {
      $store: {
        commit: jest.fn(),
      },
    },
  })
  it('has not like class', () => {
    const likeIcon = wrapper.find('.like-box > svg')
    expect(likeIcon.classes('liked')).toBeFalsy()
  })
  it('has count text', () => {
    const pElem = wrapper.find('.like-box > p')
    expect(pElem.text()).toBe('2')
  })
  it('like After you like it, the response comes', async () => {
    const likeBtn = wrapper.find('.like-box > svg')
    await likeBtn.trigger('click')
    await Vue.nextTick()
    expect(likeService.createLike).toHaveBeenCalledTimes(1)
    expect(wrapper.vm.$data.isLike).toBeTruthy()
    expect(wrapper.vm.$data.count).toBe(3)
    expect(wrapper.find('.like-box > p').text()).toEqual('3')
    expect(wrapper.find('.like-box > svg').classes('liked')).toBeTruthy()
  })
})
