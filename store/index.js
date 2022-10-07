import Vuex from 'vuex'
import savedItems from './modules/savedItems'
import common from './modules/common'
import posts from './modules/posts'
const store = () => {
  return new Vuex.Store({
    modules: {
      common,
      savedItems,
      posts,
    },
  })
}

export default store
