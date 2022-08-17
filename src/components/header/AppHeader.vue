<template>
  <div class="container-header">
    <div class="container">
      <AppHeaderNav/>
      <div class="input">
        <i class="iconfont icon-search"></i>
        <input type="text" placeholder="搜一搜">
      </div>

      <AppHeaderCart/>
    </div>
  </div>

</template>

<script>
import AppHeaderNav from '@/components/header/AppHeaderNav'
import AppHeaderCart from '@/components/AppHeaderCart'

export default {
  name: 'AppHeader',
  components: {
    AppHeaderNav,
    AppHeaderCart
  }
}
</script>

<style scoped lang="less">
@height: 132px;
.container-header {
  height: @height;
  background: white;

  .container {
    display: flex;
    align-items: center;

    .input {
      position: relative;
      border-bottom: 1px solid #e7e7e7;

      i {
        position: absolute;
        font-size: 18px;
        left: 5px;
        top: 7px;
        line-height: 18px;
      }

      input {
        width: 170px;
        height: 32px;
        padding-left: 30px;
      }
    }

    .cart {
      margin-left: 16px;
      width: 50px;
      height: 32px;
      position: relative;

      i {
        display: block;
        font-size: 22px;
      }

      span {
        font-size: 12px;
        position: absolute;
        right: 16px;
        top: 0;
        padding: 0 6px;
        background: #e26237;
        color: white;
        border-radius: 10px;
      }
    }
  }

}

</style>
