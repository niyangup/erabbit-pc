import XtxSkeleton from '@/components/library/XtxSkeleton'
import XtxCarousel from '@/components/library/XtxCarousel'
import XtxMore from '@/components/library/XtxMore'
import defaultImg from '@/assets/images/200.png'

export default {
  install (app) {
    app.component(XtxSkeleton.name, XtxSkeleton)
    app.component(XtxCarousel.name, XtxCarousel)
    app.component(XtxMore.name, XtxMore)
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
