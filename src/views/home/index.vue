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
</template>

<script>
import HomeCategory from '@/views/home/components/HomeCategory'
import HomeBanner from '@/views/home/components/HomeBanner'
import HomeNew from '@/views/home/components/HomeNew'
import HomeHot from '@/views/home/components/HomeHot'
import HomeBrand from '@/views/home/components/HomeBrand'
import HomeProduct from '@/views/home/components/HomeProduct'

export default {
  name: 'Home',
  components: {
    HomeProduct,
    HomeBrand,
    HomeHot,
    // eslint-disable-next-line vue/no-unused-components
    HomeNew,
    HomeBanner,
    HomeCategory
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
