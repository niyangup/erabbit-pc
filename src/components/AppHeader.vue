<template>
  <div class="container-header">
    <div class="container">
      <h1>
        <img src="@/assets/images/logo.png" alt="" class="logo">
      </h1>
      <ul>
        <li>首页</li>
        <li>居家</li>
        <li>美食</li>
        <li>美食</li>
        <li>美食</li>
        <li>美食</li>
        <li>美食</li>
        <li>美食</li>
        <li>美食</li>
        <li>美食</li>
      </ul>
      <div class="input">
        <i class="iconfont icon-search"></i>
        <input type="text" placeholder="搜一搜">
      </div>

      <div class="cart">
        <i class="iconfont icon-cart"></i>
        <span class="count">0</span>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'AppHeader'
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

    .logo {
      width: 200px;
      height: @height;
      object-fit: contain;
    }

    ul {
      padding-left: 40px;
      flex: 1;
      display: flex;
      font-size: 16px;
      color: #333;

      li {
        margin-right: 40px;
      }
    }

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
