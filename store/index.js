import Vuex from 'vuex'
import savedItems from './modules/saved-items'
export const store = () => {
  return new Vuex.Store({
    modules: {
      savedItems,
    },
  })
}
