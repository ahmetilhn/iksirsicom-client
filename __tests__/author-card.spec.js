import { mount } from '@vue/test-utils'
import AuthorCard from '~/components/AuthorCard.vue'

describe('AuthorCard.vue', () => {
  const wrapper = mount(AuthorCard)
  it('has an avatar ', () => {
    const elem = wrapper.find('.author-card__avatar')
    expect(elem.exists()).toBeTruthy()
    expect(elem.attributes().src).toBe(
      'https://media-exp1.licdn.com/dms/image/C4D03AQF52Tcii0IDBw/profile-displayphoto-shrink_800_800/0/1645993304620?e=1664409600&v=beta&t=7CCmp4Gk6kfDm6DloqPoYDjB-vX2GQQQ6eMb0Verk7M'
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
