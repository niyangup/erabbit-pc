<template>
  <h1>
    <div class="logo"></div>
  </h1>
  <ul class="nav-list">
    <li v-for="item in 5" :key="item" class="nav-item">
      <a href="javascript:void(0)">
        美食
      </a>
      <div class="layer container">
        <ul class="category-list">
          <li v-for="i in 3" :key="i">
            <a href="javascript:void(0)">
              <div class="item">
                <img src="../../assets/images/item.png" alt="" class="item-img">
                <div class="item-title">宠物食品</div>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </li>
  </ul>
</template>
<script>
export default {
  name: 'AppHeaderNav'
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
