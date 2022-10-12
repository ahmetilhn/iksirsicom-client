import { mount } from '@vue/test-utils'
import error from '~/layouts/error.vue'
const mockRouter = {
  push: jest.fn(),
}
describe('error.vue', () => {
  const wrapper = mount(error, {
    propsData: {
      error: {
        message: "Cannot read property 'nonexistentThing' of undefined",
        statusCode: 500,
      },
    },
    mocks: {
      $router: mockRouter,
    },
  })
  it('has status code', () => {
    const charOne = wrapper.findAll('.error-page__title > .char').at(0)
    const charTwo = wrapper.findAll('.error-page__title > .char').at(1)
    const charThree = wrapper.findAll('.error-page__title > .char').at(2)
    expect(charOne.text()).toBe('5')
    expect(charTwo.text()).toBe('0')
    expect(charThree.text()).toBe('0')
  })
  it('has description', () => {
    const descElem = wrapper.find('.error-page__description')
    expect(descElem.text()).toBe(
      "Cannot read property 'nonexistentThing' of undefined 😢"
    )
  })
  it('go to homepage is working', () => {
    const btn = wrapper.find('.home-btn')
    btn.trigger('click')
    expect(mockRouter.push).toHaveBeenCalledTimes(1)
  })
})
