import { mount } from '@vue/test-utils'
import AuthorCard from '~/components/AuthorCard.vue'

describe('AuthorCard.vue', () => {
  const wrapper = mount(AuthorCard, {
    propsData: {
      author: {
        email: 'ahmetilhan.dev@gmail.com',
        full_name: 'Ahmet ilhan',
        user_name: 'ahmetilhan24',
        avatar: 'https://avatars.githubusercontent.com/u/60369989?v=4',
        medium_url: '',
        github_url: '',
        linkedin_url: '',
        _id: '6347323dd5869b7ec39ad2cd',
      },
    },
  })
  it('has an avatar ', () => {
    const elem = wrapper.find('.author-card__avatar > img')
    expect(elem.exists()).toBeTruthy()
    expect(elem.attributes().src).toBe(
      'https://avatars.githubusercontent.com/u/60369989?v=4'
    )
  })
  it('Has 3 social links', () => {
    const links = wrapper.findAll('.author-card__links > a')
    expect(links.length).toBe(3)
    const link = wrapper.findAll('.author-card__links > a').at(0)
    expect(link.attributes().target).toBe('BLANK')
    const linkImg = wrapper.findAll('.author-card__links > a > img').at(0)
    expect(linkImg.attributes().src).not.toBe('')
  })
})
