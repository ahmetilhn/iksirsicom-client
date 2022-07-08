import Vuex from 'vuex'
import savedItems from './modules/savedItems'
import common from './modules/common'
export const store = () => {
  return new Vuex.Store({
    modules: {
      common,
      savedItems,
    },
  })
}
