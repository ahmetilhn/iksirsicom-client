import { mount, createLocalVue, RouterLinkStub } from '@vue/test-utils'
import Vuex from 'vuex'
import PostCard from '~/components/PostCard.vue'
import LikeBox from '~/components/LikeBox.vue'
import SaveBox from '~/components/SaveBox.vue'
import PlaceholderImage from '~/components/PlaceholderImage.vue'
import savePostMixin from '~/mixins/save-post.mixin'
import Vue from 'vue'
const localVue = createLocalVue()
localVue.use(Vuex)
localVue.mixin(savePostMixin)
describe('PostCard.vue', () => {
  const store = new Vuex.Store({
    state: {
      modules: {
        savedItems: {
          state: {
            items: [],
          },
          mutations: {
            setItem: jest.fn(),
          },
        },
      },
    },
  })
  const wrapper = mount(PostCard, {
    localVue,
    propsData: {
      postDetail: {
        _id: '634163d1ff1b4ef172893e02',
        title:
          'WebSocket, VueJS’te nasıl kullanılır? (Hazır paket kullanmadan)',
        description:
          'Web uygulama geliştirirken, kullanıcının sayfayı yenilemesini beklemeksizin yeni bilgilerden haberdar olmasını gerektiren senaryolarla karşılaşırız. Bu durumlarda başvurduğumuz yöntemlerin başında WebSocket gelir.',
        poster:
          'https://notificare.com/static/a0b75984a033fcd6f392050ae391c518/ab5a8/websockets-with-scarlet-cover.png',
        content: [
          {
            type: 'p',
            text: 'WebSocket’in oluşturduğu iletişim kanalları sayesinde, kullanıcının herhangi bir istekte bulunmasını beklemeksizin, ekranına yeni bilgiyi gönderebiliriz. Yazışma (WhatsApp, Messenger vb.) uygulamalarının tamamı bu standart ile çalışır.',
          },
          {
            type: 'img',
            img_source:
              'https://miro.medium.com/max/1336/1*H_yjD_g2PN5CnwDWTJTxAg.png',
          },
          { type: 'h1', text: 'Bir WebSocket kanalına nasıl bağlanılır?' },
        ],
        reading_time: { $numberInt: '1' },
        medium_link:
          'https://safa.medium.com/websocket-vuejste-nas%C4%B1l-kullan%C4%B1l%C4%B1r-haz%C4%B1r-paket-kullanmadan-adc7f29424f2',
        tags: ['websocket', 'javascript', 'web'],
        info: {
          view: { $numberInt: '27' },
          like: { $numberInt: '5' },
          author: {
            full_name: 'Safa Gayret',
            user_name: 'safa_gayret',
            avatar:
              'https://miro.medium.com/fit/c/176/176/1*0cI-9VyAwPJhkfUO53Hi-Q.jpeg',
          },
        },
        __v: { $numberInt: '0' },
      },
    },
    store,
    stubs: {
      NuxtLink: RouterLinkStub,
    },
  })

  it('has LikeBox component', () => {
    const likeBoxComp = wrapper.findComponent(LikeBox)
    expect(likeBoxComp.exists()).toBeTruthy()
  })
  it('has SaveBox component', () => {
    const saveBoxComp = wrapper.findComponent(SaveBox)
    expect(saveBoxComp.exists()).toBeTruthy()
  })
  it('has PlaceholderImage component', () => {
    const placeholderImgComp = wrapper.findComponent(PlaceholderImage)
    expect(placeholderImgComp.exists()).toBeFalsy()
  })
  it('has postDetail poster', () => {
    const imgElem = wrapper.find('.post-card__img > img')
    expect(imgElem.exists()).toBeTruthy()
    expect(imgElem.attributes().src).toBe(
      'https://notificare.com/static/a0b75984a033fcd6f392050ae391c518/ab5a8/websockets-with-scarlet-cover.png'
    )
  })
  it('has title link', async () => {
    const titleElem = wrapper.findComponent(RouterLinkStub)
    await Vue.nextTick()
    expect(titleElem.props().to).toBe('post/634163d1ff1b4ef172893e02')
  })
})
