import { mount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import LoaderOverlay from '~/components/LoaderOverlay.vue'
import lockScrollMixin from '~/mixins/lock-scroll.mixin'

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.mixin(lockScrollMixin)

describe('LoaderOverlay.vue', () => {
  const store = {
    state: {
      common: {
        state: {
          appIsReady: true,
        },
        mutations: {
          setAppIsReady: jest.fn(),
        },
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
    store.state.common.state.appIsReady = true
    expect(wrapper.vm.lockScroll).toHaveBeenCalledTimes(1)
  })
})
