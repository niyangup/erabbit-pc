<template>
  <div class="sub-category">
    <div class="container">
      <SubBread></SubBread>
      <SubFilter></SubFilter>
      <div class="goods-list">
        <!-- 排序 -->
        <SubSort/>
        <!-- 列表 -->
        <ul>
          <li v-for="goods in goodList" :key="goods.id">
            <GoodsItem :goods="goods"></GoodsItem>
          </li>
        </ul>
        <XtxInfiniteLoading :loading="loading" :finished="finished" @infinite="getData"></XtxInfiniteLoading>
      </div>
    </div>
  </div>
</template>

<script>
import SubBread from '@/views/category/components/SubBread'
import SubFilter from '@/views/category/components/SubFilter'
import SubSort from '@/views/category/components/SubSort'
import GoodsItem from '@/views/category/components/GoodsItem'
import { ref, watch } from 'vue'
import { findSubCategoryGoods } from '@/api/category'
import { useRoute } from 'vue-router'

export default {
  name: 'SubCategory',
  components: {
    GoodsItem,
    SubFilter,
    SubBread,
    SubSort
  },
  setup () {
    const route = useRoute()
    const loading = ref(false)
    const finished = ref(false)
    const goodList = ref([])
    const reqParams = {
      page: 1,
      pageSize: 20,
      categoryId: null
    }
    const getData = () => {
      loading.value = true
      reqParams.categoryId = route.params.id
      findSubCategoryGoods(reqParams).then(value => {
        reqParams.page++
        if (value.result.items.length) {
          goodList.value.push(...value.result.items)
        } else {
          finished.value = true
        }
        loading.value = false
      })
    }
    watch(() => route.params.id, value => {
      if (value && `/category/sub/${value}` === route.path) {
        reqParams.page = 1
        loading.value = false
        finished.value = false
        goodList.value = []
      }
    })

    return {
      loading,
      finished,
      getData,
      goodList
    }
  }

}
</script>

<style scoped lang="less">
.goods-list {
  background: #fff;
  padding: 0 25px;
  margin-top: 25px;

  ul {
    display: flex;
    flex-wrap: wrap;
    padding: 0 5px;

    li {
      margin-right: 20px;
      margin-bottom: 20px;

      &:nth-child(5n) {
        margin-right: 0;
      }
    }
  }
}

</style>
