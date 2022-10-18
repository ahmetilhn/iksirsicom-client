import { mount } from '@vue/test-utils'
import WelcomeArea from '~/components/home/WelcomeArea.vue'
import { goToScroll } from '~/utils/scroll.util'
jest.mock('~/utils/scroll.util', () => ({
  goToScroll: jest.fn(),
}))
describe('WelcomeArea.vue', () => {
  const wrapper = mount(WelcomeArea)

  it('check logo visible', () => {
    const logoElem = wrapper.find('.welcoma-area__img')
    expect(logoElem.exists()).toBeTruthy()
  })
  it('check logo visible', () => {
    const logoElem = wrapper.find('.welcoma-area__img')
    expect(logoElem.attributes().src).toBe('@/assets/img/logo.svg')
  })
  it('check title', () => {
    const titleElem = wrapper.find('.welcome-area__title')
    expect(titleElem.exists()).toBeTruthy()
    expect(titleElem.text()).toBe(
      'Yazılım ve Teknoloji ile ilgili en iyi Kaynakları mı Arıyorsun?'
    )
  })
  it('check description', () => {
    const descElem = wrapper.find('.welcome-area__desc')
    expect(descElem.exists()).toBeTruthy()
    expect(descElem.text()).toBe(
      "İyi bir kariyer için, doğru bir başlangıç gerekir. İksirsi'de bir çok dil ve teknolojiye ait makaleleri okuyarak yazılım bilgini artırabilirsin."
    )
  })
  it('check btn', () => {
    const btnElem = wrapper.find('.btn-border')
    expect(btnElem.exists()).toBeTruthy()
    expect(btnElem.text()).toBe('Hemen Başla')
  })
  it('check goToScroll func', async () => {
    const btnElem = wrapper.find('.btn-border')
    await btnElem.trigger('click')
    expect(goToScroll).toHaveBeenCalled()
  })
})
