import Vuex from 'vuex'
import savedItems from './modules/savedItems'
export const store = () => {
  return new Vuex.Store({
    modules: {
      savedItems,
    },
  })
}
