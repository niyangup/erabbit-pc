<template>
  <div class="xtx-bread-item">
    <RouterLink :to="to" v-if="to">
      <slot></slot>
    </RouterLink>

    <span v-else><slot></slot></span>
  </div>
</template>

<script>
export default {
  name: 'XtxBreadItem',
  props: {
    to: {
      type: [String, Object]
    }
  }
}
</script>

<style scoped>

</style>
