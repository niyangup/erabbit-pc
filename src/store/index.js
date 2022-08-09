import { createStore } from 'vuex'
import user from '@/store/modules/user'
import cart from '@/store/modules/cart'
import category from '@/store/modules/category'
import createPersistedState from 'vuex-persistedstate'

export default createStore({
  modules: {
    user,
    cart,
    category
  },
  plugins: [
    createPersistedState({
      key: 'erabbit-pc-store',
      paths: ['user', 'cart']
    })
  ]
})
