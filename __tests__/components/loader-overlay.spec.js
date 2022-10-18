import { mount } from '@vue/test-utils'
import Vue from 'vue'
import LoaderOverlay from '~/components/LoaderOverlay.vue'
import * as scrollUtil from '~/utils/scroll.util'

jest.mock('@/utils/scroll.util', () => ({
  lockScroll: jest.fn(),
}))
describe('LoaderOverlay.vue', () => {
  const store = {
    state: {
      modules: {
        common: {
          appIsReady: true,
        },
      },
    },
  }
  const wrapper = mount(LoaderOverlay, {
    mocks: {
      $store: store,
    },
  })
  it('loader is visible', () => {
    const loaderWrapper = wrapper.find('.loader-overlay')
    expect(loaderWrapper.isVisible()).toBeFalsy()
  })
  it('has img with animation', () => {
    const imgElem = wrapper.find('.loader-overlay > img')
    expect(imgElem.attributes().src).toBe('@/assets/img/logo-animation.svg')
  })
  it('watching appIsReady', async () => {
    store.state.modules.common.appIsReady = false
    await Vue.nextTick()
    expect(scrollUtil.lockScroll).toHaveBeenCalledTimes(1)
    const loaderWrapper = wrapper.find('.loader-overlay')
    await Vue.nextTick()
    expect(loaderWrapper.isVisible()).toBeTruthy()
  })
})
