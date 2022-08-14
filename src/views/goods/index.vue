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
      <GoodsRelevant :goodsId="goods.id"/>
      <!-- 商品详情 -->
      <div class="goods-footer">
        <div class="goods-article">
          <!-- 商品+评价 -->
          <GoodsTabs></GoodsTabs>
          <!-- 注意事项 -->
          <div class="goods-warn"></div>
        </div>
        <!-- 24热榜+专题推荐 -->
        <div class="goods-aside">
          <GoodsHot/>
          <GoodsHot :type="2"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import GoodsRelevant from '@/views/goods/components/GoodsRelevant'
import { nextTick, provide, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { findGoods } from '@/api/product'
import GoodsImage from '@/views/goods/components/GoodsImage'
import GoodsSales from '@/views/goods/components/GoodsSales'
import GoodsName from '@/views/goods/components/GoodsName'
import GoodsSku from '@/views/goods/components/GoodsSku'
import { useStore } from 'vuex'
import GoodsTabs from '@/views/goods/components/GoodsTabs'
import GoodsHot from '@/views/goods/components/GoodsHot'

export default {
  name: 'XtxGood',
  components: {
    GoodsTabs,
    GoodsRelevant,
    GoodsImage,
    GoodsSales,
    GoodsName,
    GoodsSku,
    GoodsHot
  },
  setup () {
    const goods = useGoods()
    const changeSku = (sku) => {
      // 修改商品的现价原价库存信息
      if (sku.skuId) {
        goods.value.price = sku.price
        goods.value.oldPrice = sku.oldPrice
        goods.value.inventory = sku.inventory
      }
      // 记录选择后的sku，可能有数据，可能没有数据{}
      currSku.value = sku
    }

    // 提供goods数据给后代组件使用
    provide('goods', goods)

    // 选择的数量
    const num = ref(1)

    // 加入购物车
    const store = useStore()
    const currSku = ref(null)
    const insertCart = () => {
      if (currSku.value && currSku.value.skuId) {
        // id skuId name attrsText picture price nowPrice selected stock count isEffective
        const {
          skuId,
          specsText: attrsText,
          inventory: stock
        } = currSku.value
        const {
          id,
          name,
          price,
          mainPictures
        } = goods.value
        store.dispatch('cart/insertCart', {
          skuId,
          attrsText,
          stock,
          id,
          name,
          price,
          nowPrice: price,
          picture: mainPictures[0],
          selected: true,
          isEffective: true,
          count: num.value
        }).then(() => {
          // Message({ type: 'success', text: '加入购物车成功' })
        })
      } else {
        // Message({ text: '请选择完整规格' })
      }
    }

    return {
      goods,
      changeSku,
      num,
      insertCart
    }
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
