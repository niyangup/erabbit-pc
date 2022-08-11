/**
 * 数据懒加载函数
 * @param target {HTMLDocument}
 * @param callback {Promise}
 */
import { useIntersectionObserver } from '@vueuse/core'
import { ref } from 'vue'

export const useLazyData = (target, callback) => {
  const result = ref([])
  const { stop } = useIntersectionObserver(target, ([{ isIntersecting }], observerElement) => {
    if (isIntersecting) {
      stop()
      callback().then(value => {
        result.value = value.result
      })
    }
  })

  return result
}
