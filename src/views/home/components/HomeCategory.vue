<template>
  <div class="home-category-container" @mouseleave="categoryIdRef=null">
    <ul class="menu">
      <li :class="{active:categoryIdRef===item.id}" v-for="item in menuList" :key="item.id" class="center menu-item"
          @mouseenter="categoryIdRef=item.id">
        <RouterLink :to="`/category/${item.id}`">{{ item.name }}</RouterLink>
        <template v-if="item.children">
          <RouterLink :to="`/category/sub/${sub.id}`" v-for="sub in item.children" :key="sub.id">{{
              sub.name
            }}
          </RouterLink>
        </template>

      </li>
    </ul>

    <div class="layer">
      <h4>{{ currentCategory && currentCategory.id === 'brand' ? '品牌' : '分类' }}推荐
        <small>根据您的购买或浏览记录推荐</small></h4>
      <!-- 商品 -->
      <ul v-if="currentCategory&&currentCategory.goods">
        <li v-for="item in currentCategory.goods" :key="item.id">
          <RouterLink to="/">
            <img :src="item.picture" alt="">
            <div class="info">
              <p class="name ellipsis-2">{{ item.name }}</p>
              <p class="desc ellipsis">{{ item.desc }}</p>
              <p class="price"><i>¥</i>{{ item.price }}</p>
            </div>
          </RouterLink>
        </li>
      </ul>
      <!-- 品牌 -->
      <ul v-if="currentCategory && currentCategory.brands">
        <li class="brand" v-for="brand in currentCategory.brands" :key="brand.id">
          <RouterLink to="/">
            <img :src="brand.picture" alt="">
            <div class="info">
              <p class="place"><i class="iconfont icon-dingwei"></i>{{ brand.place }}</p>
              <p class="name ellipsis">{{ brand.name }}</p>
              <p class="desc ellipsis-2">{{ brand.desc }}</p>
            </div>
          </RouterLink>
        </li>
      </ul>
    </div>

  </div>
</template>

<script>
import { computed, reactive, ref } from 'vue'
import { useStore } from 'vuex'
import { findBrand } from '@/api/home'

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

    const categoryIdRef = ref(null)

    const currentCategory = computed(function () {
      return menuList.value.find(item => item.id === categoryIdRef.value)
    })

    findBrand().then(data => {
      brand.brands = data.result
    })

    return {
      menuList,
      categoryIdRef,
      currentCategory
    }
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

  .menu {
    .menu-item {
      width: 100%;
      height: 50px;
      cursor: pointer;

      &:hover, &.active {
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

  // 弹出层样式
  .layer {
    width: 990px;
    height: 500px;
    background: rgba(255, 255, 255, 0.8);
    position: absolute;
    left: 250px;
    top: 0;
    display: none;
    padding: 0 15px;

    h4 {
      font-size: 20px;
      font-weight: normal;
      line-height: 80px;
      color: black;

      small {
        font-size: 16px;
        color: #666;
      }
    }

    ul {
      display: flex;
      flex-wrap: wrap;

      li {
        width: 310px;
        height: 120px;
        margin-right: 15px;
        margin-bottom: 15px;
        border: 1px solid #eee;
        border-radius: 4px;
        background: #fff;

        &:nth-child(3n) {
          margin-right: 0;
        }

        a {
          display: flex;
          width: 100%;
          height: 100%;
          align-items: center;
          padding: 10px;

          &:hover {
            background: #e3f9f4;
          }

          img {
            width: 95px;
            height: 95px;
          }

          .info {
            padding-left: 10px;
            line-height: 24px;
            width: 190px;

            .name {
              font-size: 16px;
              color: #666;
            }

            .desc {
              color: #999;
            }

            .price {
              font-size: 22px;
              color: @priceColor;

              i {
                font-size: 16px;
              }
            }
          }
        }
      }

      // 品牌的样式
      li.brand {
        height: 180px;

        a {
          align-items: flex-start;

          img {
            width: 120px;
            height: 160px;
          }

          .info {
            p {
              margin-top: 8px;
            }

            .place {
              color: #999;
            }
          }
        }
      }
    }
  }

  &:hover {
    .layer {
      display: block;
    }
  }
}
</style>
