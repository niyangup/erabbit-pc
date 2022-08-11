import defaultImg from '@/assets/images/200.png'

const importFn = require.context('./', false, /\.vue$/)

export default {
  install (app) {
    importFn.keys().forEach(path => {
      const component = importFn(path).default
      app.component(component.name, component)
    })
    defineDirective(app)
  }
}

function defineDirective (app) {
  app.directive('lazy', {
    mounted (el, binding) {
      const observer = new IntersectionObserver(function ([{ isIntersecting }]) {
        if (isIntersecting) {
          observer.unobserve(el)
          el.onerror = function () {
            el.src = defaultImg
          }
          el.src = binding.value
        }
      }, {
        threshold: 0
      })
      observer.observe(el)
    }
  })
}
