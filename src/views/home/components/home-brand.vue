<template>
  <HomePanel title="热门品牌" sub-title="国际经典 品质保证">
    <template v-slot:right>
      <a href="javascript:void(0);" @click="toggle(-1)" class="iconfont icon-angle-left prev"
         :class="{disabled:index===0}"></a>
      <a href="javascript:void(0);" @click="toggle(1)" class="iconfont icon-angle-right next"
         :class="{disabled:index===1}"></a>
    </template>
    <div class="box" ref="target">
      <Transition name="fade">
        <ul v-if="brand.length" class="list" :style="{transform:`translateX(${-index*1240}px)`}">
          <li v-for="item in brand" :key="item.id">
            <RouterLink to="/">
              <img :src="item.picture" alt="">
            </RouterLink>
          </li>
        </ul>

        <div v-else class="skeleton">
          <XtxSkeleton class="item" v-for="i in 5" :key="i" animated bg="#e4e4e4" width="240px" height="305px"/>
        </div>
      </Transition>

    </div>
  </HomePanel>
</template>

<script>

import HomePanel from '@/views/home/components/HomePanel'
import { ref } from 'vue'
import { findBrand } from '@/api/home'
import { useLazyData } from '@/hooks'

export default {
  name: 'HomeBrand',
  components: { HomePanel },
  setup () {
    const target = ref(null)
    const list = useLazyData(target, () => findBrand(10))

    const index = ref(0)

    function toggle (step) {
      const newIndex = index.value + step
      if (newIndex < 0 || newIndex > 1) {
      } else {
        index.value = newIndex
      }
    }

    return {
      brand: list,
      toggle,
      index,
      target
    }
  }
}
</script>

<style scoped lang='less'>
.skeleton {
  width: 100%;
  display: flex;

  .item {
    margin-right: 10px;

    &:nth-child(5n) {
      margin-right: 0;
    }
  }
}

.home-panel {
  background: #f5f5f5
}

.iconfont {
  width: 20px;
  height: 20px;
  background: #ccc;
  color: #fff;
  display: inline-block;
  text-align: center;
  margin-left: 5px;
  background: @xtxColor;

  &::before {
    font-size: 12px;
    position: relative;
    top: -2px
  }

  &.disabled {
    background: #ccc;
    cursor: not-allowed;
  }
}

.box {
  display: flex;
  width: 100%;
  height: 345px;
  overflow: hidden;
  padding-bottom: 40px;

  .list {
    width: 200%;
    display: flex;
    transition: all 1s;

    li {
      margin-right: 10px;
      width: 240px;

      &:nth-child(5n) {
        margin-right: 0;
      }

      img {
        width: 240px;
        height: 305px;
      }
    }
  }
}
</style>
