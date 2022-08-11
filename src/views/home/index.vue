<template>
  <div class="container">
    <div class="home-entry">
      <HomeCategory class="home-category"></HomeCategory>
      <HomeBanner></HomeBanner>
    </div>
  </div>
  <HomeNew></HomeNew>
  <HomeHot></HomeHot>
  <HomeBrand></HomeBrand>
  <HomeProduct></HomeProduct>
  <HomeSpecial></HomeSpecial>
</template>

<script>
import HomeCategory from '@/views/home/components/HomeCategory'
import HomeBanner from '@/views/home/components/HomeBanner'
import HomeNew from '@/views/home/components/HomeNew'
import HomeHot from '@/views/home/components/HomeHot'
import HomeBrand from '@/views/home/components/HomeBrand'
import HomeProduct from '@/views/home/components/HomeProduct'
import HomeSpecial from '@/views/home/components/HomeSpecial'

export default {
  name: 'Home',
  components: {
    HomeProduct,
    HomeBrand,
    HomeHot,
    HomeNew,
    HomeBanner,
    HomeCategory,
    HomeSpecial
  }
}
</script>

<style scoped lang="less">
@height: 500px;
.home-entry {
  height: @height;

  .home-category {
    height: @height;
    z-index: 100;
  }
}

</style>
