import { mount } from '@vue/test-utils'
import VerticalListing from '~/components/listing/VerticalListing.vue'
import PostCard from '~/components/post/PostCard.vue'
describe('VerticalListing.vue', () => {
  const postData = {
    _id: '634163d1ff1b4ef172893e02',
    title: 'WebSocket, VueJS’te nasıl kullanılır? (Hazır paket kullanmadan)',
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
      {
        type: 'h1',
        text: 'Bir WebSocket kanalına nasıl bağlanılır?',
      },
    ],
    reading_time: 1,
    medium_link:
      'https://safa.medium.com/websocket-vuejste-nas%C4%B1l-kullan%C4%B1l%C4%B1r-haz%C4%B1r-paket-kullanmadan-adc7f29424f2',
    tags: ['websocket', 'javascript', 'web'],
    info: {
      view: 27,
      like: 5,
      author: {
        full_name: 'Safa Gayret',
        user_name: 'safa_gayret',
        avatar:
          'https://miro.medium.com/fit/c/176/176/1*0cI-9VyAwPJhkfUO53Hi-Q.jpeg',
      },
    },
  }
  const wrapper = mount(VerticalListing, {
    mocks: {
      $store: {
        commit: jest.fn(),
        dispatch: jest.fn(),
        state: {
          modules: {
            posts: {
              posts: [postData],
            },
            savedItems: {
              items: [],
            },
          },
        },
      },
    },
  })
  it('check ', () => {
    const listContainer = wrapper.find('.vertical-listing__items')
    expect(listContainer.exists()).toBeTruthy()
  })
  it('check components ', () => {
    const postCard = wrapper.findComponent(PostCard)
    expect(postCard.exists()).toBeTruthy()
    expect(postCard.props().postDetail).toBe(postData)
  })
  it('check more than btn', () => {
    const moreBtnElem = wrapper.find('.vertical-listing__bottom > .btn-border')
    expect(moreBtnElem.exists()).toBeTruthy()
    expect(moreBtnElem.text()).toBe('Daha Fazla Gör')
  })
})
