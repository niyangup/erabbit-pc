<template>
  <div class="goods-tabs">
    <nav>
      <a
        @click="activeName = 'GoodsDetial'"
        :class="{ active: activeName === 'GoodsDetial' }"
        href="javascript:;"
      >商品详情</a
      >
      <a
        @click="activeName = 'GoodsComment'"
        :class="{ active: activeName === 'GoodsComment' }"
        href="javascript:;"
      >商品评价<span>({{ goods.commentCount }})</span></a>
    </nav>

    <KeepAlive>
      <component :is="activeName"></component>
    </KeepAlive>
  </div>
</template>
<script>
import { inject, ref } from 'vue'
import GoodsDetial from '@/views/goods/components/GoodsDetial'
import GoodsComment from '@/views/goods/components/GoodsComment'

export default {
  name: 'GoodsTabs',
  components: {
    GoodsDetial,
    GoodsComment
  },
  setup () {
    // activeName的值：GoodsDetial  GoodsComment
    const activeName = ref('GoodsDetial')
    // goods详情数据
    const goods = inject('goods')
    return {
      activeName,
      goods
    }
  }
}
</script>
<style scoped lang="less">
.goods-tabs {
  min-height: 600px;
  background: #fff;

  nav {
    height: 70px;
    line-height: 70px;
    display: flex;
    border-bottom: 1px solid #f5f5f5;

    a {
      padding: 0 40px;
      font-size: 18px;
      position: relative;

      > span {
        color: @priceColor;
        font-size: 16px;
        margin-left: 10px;
      }

      &:first-child {
        border-right: 1px solid #f5f5f5;
      }

      &.active {
        &::before {
          content: "";
          position: absolute;
          left: 40px;
          bottom: -1px;
          width: 72px;
          height: 2px;
          background: @xtxColor;
        }
      }
    }
  }
}
</style>
