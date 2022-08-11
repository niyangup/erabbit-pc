import XtxSkeleton from '@/components/library/XtxSkeleton'
import XtxCarousel from '@/components/library/XtxCarousel'

export default {
  install (app) {
    app.component(XtxSkeleton.name, XtxSkeleton)
    app.component(XtxCarousel.name, XtxCarousel)
  }
}
