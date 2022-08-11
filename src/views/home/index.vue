<template>
  <div class="container">
    <div class="home-entry">
      <HomeCategory class="home-category"></HomeCategory>
      <HomeBanner></HomeBanner>
    </div>
  </div>
</template>

<script>
import HomeCategory from '@/views/home/components/HomeCategory'
import HomeBanner from '@/views/home/components/HomeBanner'

export default {
  name: 'Home',
  components: {
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
    z-index: 100;
  }
}

</style>
