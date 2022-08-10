<template>
  <AppHeaderSticky></AppHeaderSticky>
  <AppNavBar></AppNavBar>
  <AppHeader></AppHeader>
  <div class="main">
    <router-view></router-view>
  </div>
  <AppFooter></AppFooter>
</template>

<script>
import AppNavBar from '@/components/AppNavBar'
import { useStore } from 'vuex'
import AppHeader from '@/components/header/AppHeader'
import AppFooter from '@/components/AppFooter'
import AppHeaderSticky from '@/components/header/AppHeaderSticky'

export default {
  name: 'Layout',
  components: {
    AppHeaderSticky,
    AppHeader,
    AppNavBar,
    AppFooter
  },
  setup () {
    const store = useStore()
    store.dispatch('category/getList')

    return {}
  }
}
</script>

<style scoped>

</style>
