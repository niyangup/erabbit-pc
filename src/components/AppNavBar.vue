<template>
  <nav class="app-top-nav">
    <div class="container">
      <ul>
        <template v-if="profile.token">
          <li>
            <a href="javascript:void(0)">
              <i class="iconfont icon-user">{{ profile.account }}</i>
            </a>
          </li>
          <li><a href="javascript:void(0)">退出登录</a></li>
        </template>

        <template v-else>
          <li><a href="javascript:void(0)">请先登录</a></li>
          <li><a href="javascript:void(0)">免费注册</a></li>
        </template>

        <li><a href="javascript:void(0)">我的订单</a></li>
        <li><a href="javascript:void(0)">会员中心</a></li>
        <li><a href="javascript:void(0)">帮助中心</a></li>
        <li><a href="javascript:void(0)">关于我们</a></li>
        <li><a href="javascript:void(0)">
          <i class="iconfont icon-phone">手机版</i>
        </a></li>
      </ul>
    </div>

  </nav>

</template>

<script>
import { useStore } from 'vuex'
import { computed } from 'vue'

export default {
  name: 'AppNavBar',
  setup () {
    const store = useStore()
    const profile = computed(function () {
      return store.state.user.profile
    })
    return {
      profile
    }
  }
}
</script>

<style scoped lang="less">
@import url(~@/assets/styles/variables.less);

@bgc: #333;
@fontColor: #cdcdcd;
@height: 53px;
.app-top-nav {
  height: @height;
  background: @bgc;
  color: @fontColor;
  line-height: @height;

  .container {
    height: 100%;
    font-size: 14px;

    i {
      font-size: 14px;
    }

    ul {
      display: flex;
      justify-content: end;

      li {
        a {
          padding: 0 15px;
          color: inherit;

          &:hover {
            color: @xtxColor;
          }
        }

        ~ li {
          a {
            border-left: 2px solid #666;
          }
        }
      }
    }
  }
}

</style>
