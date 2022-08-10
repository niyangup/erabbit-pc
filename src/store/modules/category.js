// 分类模块
import { topCategory } from '@/api/constants'
import { findAllCategory } from '@/api/category'

export default {
  namespaced: true,
  state () {
    return {
      // 分类信息集合'
      list: topCategory.map((value, index) => {
        return { name: value }
      })
    }
  },
  mutations: {
    setList (state, payload) {
      state.list = payload
    }
  },
  actions: {
    async getList (context, payload) {
      const { result } = await findAllCategory()
      context.commit('setList', result)
    }
  }
}
