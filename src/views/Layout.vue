<template>
  <AppNavBar></AppNavBar>
  <header>头部</header>
  <div class="main">
    <router-view></router-view>
    <button @click="login">登录</button>
    <button @click="logout">退出</button>
  </div>
  <footer>底部</footer>
</template>

<script>
import AppNavBar from '@/components/AppNavBar'
import { useStore } from 'vuex'

export default {
  name: 'Layout',
  components: { AppNavBar },
  setup () {
    const store = useStore()

    function logout () {
      store.commit('user/clearUser')
    }

    function login () {
      store.commit('user/setUser', {
        id: '1',
        avatar: '1',
        nickname: '123',
        account: '2222',
        mobile: '1231',
        token: '12321'
      })
    }

    return {
      logout,
      login
    }
  }
}
</script>

<style scoped>

</style>
