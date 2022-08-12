<template>
  <div class='xtx-goods-page' v-if="goods">
    <div class="container">
      <!-- 面包屑 -->
      <XtxBread>
        <XtxBreadItem to="/">首页</XtxBreadItem>
        <XtxBreadItem v-if="goods" :to="`/category/${goods.categories[1].id}`">{{
            goods.categories[1].name
          }}
        </XtxBreadItem>

        <XtxBreadItem v-if="goods" :to="`/category/sub/${goods.categories[0].id}`">{{
            goods.categories[0].name
          }}
        </XtxBreadItem>

        <XtxBreadItem v-if="goods">{{ goods.name }}</XtxBreadItem>
      </XtxBread>
      <!-- 商品信息 -->
      <div class="goods-info">
        <div class="media">
          <GoodsImage :images="goods.mainPictures"/>
          <GoodsSales/>
        </div>
        <div class="spec">
          <GoodsName :goods="goods"/>
          <!-- sku组件 skuId="1369155865461919746" 测试选中 -->
          <GoodsSku :goods="goods" @change="changeSku"/>
          <!-- 数量选择组件 -->
          <XtxNumbox label="数量" v-model="num" :max="goods.inventory"/>
          <!-- 按钮组件 -->
          <XtxButton @click="insertCart()" type="primary" style="margin-top:20px">加入购物车</XtxButton>
        </div>
      </div>
      <!-- 商品推荐 -->
      <GoodsRelevant/>
      <!-- 商品详情 -->
      <div class="goods-footer">
        <div class="goods-article">
          <!-- 商品+评价 -->
          <div class="goods-tabs"></div>
          <!-- 注意事项 -->
          <div class="goods-warn"></div>
        </div>
        <!-- 24热榜+专题推荐 -->
        <div class="goods-aside"></div>
      </div>
    </div>
  </div>
</template>

<script>

import GoodsRelevant from '@/views/goods/components/GoodsRelevant'
import { nextTick, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { findGoods } from '@/api/product'
import GoodsImage from '@/views/goods/components/goods-image'
import GoodsSales from '@/views/goods/components/goods-sales'
import GoodsName from '@/views/goods/components/goods-name'

export default {
  name: 'XtxGood',
  components: {
    GoodsRelevant,
    GoodsImage,
    GoodsSales,
    GoodsName
    // GoodsSku
  },
  setup () {
    const goods = useGoods()
    return { goods }
  }
}

const useGoods = () => {
  const goods = ref(null)
  const route = useRoute()

  watch(() => route.params.id, (value) => {
    if (value && `/product/${value}` === route.path) {
      findGoods(route.params.id).then(data => {
        goods.value = null
        nextTick(() => {
          goods.value = data.result
        })
      })
    }
  }, { immediate: true })
  return goods
}
</script>

<style scoped lang='less'>
.goods-info {
  min-height: 600px;
  background: #fff;
  display: flex;

  .media {
    width: 580px;
    height: 600px;
    padding: 30px 50px;
  }

  .spec {
    flex: 1;
    padding: 30px 30px 30px 0;
  }
}

.goods-footer {
  display: flex;
  margin-top: 20px;

  .goods-article {
    width: 940px;
    margin-right: 20px;
  }

  .goods-aside {
    width: 280px;
    min-height: 1000px;
  }
}

.goods-tabs {
  min-height: 600px;
  background: #fff;
}

.goods-warn {
  min-height: 600px;
  background: #fff;
  margin-top: 20px;
}
</style>