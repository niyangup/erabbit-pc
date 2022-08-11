<template>
  <div class="home-category-container">
    <ul>
      <li v-for="item in menuList" :key="item.id" class="center">
        <RouterLink :to="`/category/${item.id}`">{{ item.name }}</RouterLink>
        <template v-if="item.children">
          <RouterLink :to="`/category/sub/${sub.id}`" v-for="sub in item.children" :key="sub.id">{{
              sub.name
            }}
          </RouterLink>
        </template>

      </li>
    </ul>

  </div>
</template>

<script>
import { computed, reactive } from 'vue'
import { useStore } from 'vuex'

export default {
  name: 'HomeCategory',
  setup () {
    const store = useStore()

    const brand = reactive({
      id: 'brand',
      name: '品牌',
      children: [{
        id: 'brand-children',
        name: '品牌推荐'
      }],
      brands: []
    })

    const menuList = computed(() => {
      // 得到9个分类切每个一级分类下的子分类只有两个
      const list = store.state.category.list.map((item) => {
        return {
          id: item.id,
          name: item.name,
          children: item.children && item.children.slice(0, 2),
          goods: item.goods
        }
      })
      list.push(brand)

      return list
    })

    return { menuList }
  }
}
</script>

<style scoped lang="less">
@import url(~@/assets/styles/variables.less);

.home-category-container {
  position: absolute;
  width: 250px;
  height: 100%;
  background: #333333;
  color: #ffffff;

  .center {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  ul {
    li {
      width: 100%;
      height: 50px;
      cursor: pointer;

      &:hover {
        background: @xtxColor;
      }

      a {
        margin-right: 4px;
        color: inherit;

        &:first-child {
          font-size: 16px;
        }
      }
    }
  }
}
</style>
