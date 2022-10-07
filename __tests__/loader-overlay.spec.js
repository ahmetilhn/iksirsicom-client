import { mount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import LoaderOverlay from '~/components/LoaderOverlay.vue'
import { lockScroll } from '~/utils/scroll.util'

const localVue = createLocalVue()
localVue.use(Vuex)

jest.mock('~/utils/scroll.util', () => ({
  lockScroll: jest.fn(),
}))

describe('LoaderOverlay.vue', () => {
  const store = {
    state: {
      common: {
        appIsReady: true,
      },
    },
  }
  const wrapper = mount(LoaderOverlay, {
    localVue,
    mocks: {
      $store: store,
    },
    methods: {
      lockScroll: () => jest.fn(),
    },
  })
  it('has img with animation', () => {
    const imgElem = wrapper.find('.loader-overlay > img')
    expect(imgElem.attributes().src).toBe('@/assets/img/logo-animation.svg')
  })
  it('watching appIsReady', () => {
    store.state.common.appIsReady = true
    expect(lockScroll).toHaveBeenCalledTimes(1)
  })
})
