<template>
  <div class="home-banner-container">
    <XtxCarousel :sliders="slidersRef" autoPlay></XtxCarousel>
  </div>
</template>

<script>
import { ref } from 'vue'
import { findBanner } from '@/api/home'

export default {
  name: 'HomeBanner',
  setup () {
    const slidersRef = ref([])
    findBanner().then(value => {
      slidersRef.value = value.result
    })

    return { slidersRef }
  }
}
</script>

<style scoped lang="less">
.home-banner-container {
  width: 100%;
  height: 100%;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  .xtx-carousel {
    ::v-deep .carousel-btn.prev {
      left: 270px;
    }

    ::v-deep .carousel-indicator {
      padding-left: 250px;
    }
  }
}

</style>
