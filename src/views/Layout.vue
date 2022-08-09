<template>
  <nav>顶部</nav>
  <header>头部</header>
  <div class="main">
    <router-view></router-view>
  </div>
  <footer>底部</footer>
</template>

<script>
export default {
  name: 'Layout'
}
</script>

<style scoped>

</style>
