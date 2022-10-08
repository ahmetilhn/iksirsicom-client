import { mount } from '@vue/test-utils'
import PostDetailInfo from '~/components/PostDetailInfo.vue'
import ViewBox from '~/components/ViewBox.vue'
describe('PostDetailInfo.vue', () => {
  const wrapper = mount(PostDetailInfo, {
    propsData: {
      author: {
        full_name: 'Safa Gayret',
        user_name: 'safa_gayret',
        avatar:
          'https://miro.medium.com/fit/c/176/176/1*0cI-9VyAwPJhkfUO53Hi-Q.jpeg',
      },
      readingTime: 10,
      viewCount: 20,
      mediumLink:
        'https://safa.medium.com/websocket-vuejste-nas%C4%B1l-kullan%C4%B1l%C4%B1r-haz%C4%B1r-paket-kullanmadan-adc7f29424f2',
    },
  })
  it('has ViewBox component ', () => {
    const viewBoxComp = wrapper.findComponent(ViewBox)
    expect(viewBoxComp.exists()).toBeTruthy()
    expect(viewBoxComp.props().viewCount).toBe(20)
  })
  it('has authorAvatar', () => {
    const imgElem = wrapper.find('.post-detail-info__left > a > img')
    expect(imgElem.exists()).toBeTruthy()
    expect(imgElem.attributes().src).toBe(
      'https://miro.medium.com/fit/c/176/176/1*0cI-9VyAwPJhkfUO53Hi-Q.jpeg'
    )
  })
})
