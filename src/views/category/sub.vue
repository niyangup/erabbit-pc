<template>
  <div class="sub-category">
    <div class="container">
      <SubBread></SubBread>
      <SubFilter></SubFilter>
    </div>
  </div>
</template>

<script>
import SubBread from '@/views/category/components/SubBread'
import SubFilter from '@/views/category/components/SubFilter'

export default {
  name: 'SubCategory',
  components: {
    SubFilter,
    SubBread
  }

}
</script>

<style scoped>

</style>
