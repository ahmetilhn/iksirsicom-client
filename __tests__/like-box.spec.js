import { mount, createLocalVue } from '@vue/test-utils'
import Vue from 'vue'
import Vuex from 'vuex'
import LikeBox from '~/components/LikeBox.vue'
import likeService from '~/services/like.service'
import store from '~/store'
const localVue = createLocalVue()
localVue.use(Vuex)
// jest.mock('~/services/like.service', () => ({
//   createLike: () => jest.fn().mockResolvedValue('test response'),
// }))
jest.spyOn(likeService, 'createLike').mockResolvedValue('test value')
describe('LikeBox.vue', () => {
  const wrapper = mount(LikeBox, {
    propsData: {
      likeCount: 2,
      postId: '12',
    },
    store,
    localVue,
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
