<template>
  <h1>
    <div class="logo"></div>
  </h1>
  <ul class="nav-list">
    <li v-for="item in categoryList" :key="item.id" class="nav-item">
      <RouterLink :to="`/category/${item.id}`">
        {{ item.name }}
      </RouterLink>
      <div class="layer container">
        <ul class="category-list">
          <li v-for="i in item.children" :key="i.id">
            <RouterLink :to="`/category/sub/${i.id}`">
              <div class="item">
                <img :src="i.picture" alt="" class="item-img">
                <div class="item-title">{{ i.name }}</div>
              </div>
            </RouterLink>
          </li>
        </ul>
      </div>
    </li>
  </ul>
</template>
<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
  name: 'AppHeaderNav',
  setup () {
    const store = useStore()
    const categoryList = computed(function () {
      return store.state.category.list
    })
    return { categoryList }
  }
}
</script>
<style scoped lang="less">
@import "~@/assets/styles/variables.less";

@height: 132px;
.logo {
  display: block;
  width: 200px;
  height: @height;
  object-fit: contain;
  cursor: pointer;
  background: url(~@/assets/images/logo.png) no-repeat center 18px/contain;
}

a {
  color: inherit;
}

.nav-item {
  border-bottom: 1px solid transparent;
}

.nav-item:hover {
  color: @xtxColor;
  border-bottom: 1px solid @xtxColor;

  .layer {
    height: @height;
    opacity: 1;
    visibility: visible;
  }
}

ul {
  padding-left: 40px;
  flex: 1;
  display: flex;
  font-size: 16px;
  color: #333;

  li {
    margin-right: 40px;

    .layer {
      z-index: 999;
      position: absolute;
      box-shadow: 0 0 5px #ccc;
      background: white;
      left: 0;
      right: 0;
      top: 100px;
      display: flex;
      overflow: hidden;
      visibility: hidden;
      align-items: center;
      transition: all 200ms 100ms;
      height: 0;
      opacity: 0;

      a {
        text-decoration: none;
      }

      .item-img {
        width: 60px;
        height: 60px;
        object-fit: contain;
        margin-bottom: 10px;
      }

      .category-list {
        > li {
          &:hover {
            a {
              color: @xtxColor;
            }
          }
        }
      }
    }
  }
}
</style>
