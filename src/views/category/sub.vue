<template>
  <div class="sub-category">
    <div class="container">
      <SubBread></SubBread>
      <SubFilter></SubFilter>
      <div class="goods-list">
        <!-- 排序 -->
        <SubSort/>
        <!-- 列表 -->
      </div>
    </div>
  </div>
</template>

<script>
import SubBread from '@/views/category/components/SubBread'
import SubFilter from '@/views/category/components/SubFilter'
import SubSort from '@/views/category/components/SubSort'

export default {
  name: 'SubCategory',
  components: {
    SubFilter,
    SubBread,
    SubSort
  },
  setup () {
  }

}
</script>

<style scoped lang="less">
.goods-list {
  background: #fff;
  padding: 0 25px;
  margin-top: 25px;
}

</style>
