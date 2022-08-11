<template>
  <div class="container">
    <div class="home-entry">
      <HomeCategory></HomeCategory>
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
}

</style>
