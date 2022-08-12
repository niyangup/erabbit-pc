<template>
  <div class="xtx-checkbox" @click="changeChecked()">
    <i v-if="checked" class="iconfont icon-checked"></i>
    <i v-else class="iconfont icon-unchecked"></i>
    <span v-if="$slots.default"><slot/></span>
  </div>
</template>
<script>

import { ref, watch } from 'vue'

export default {
  name: 'XtxCheckbox',
  props: {
    modelValue: {
      type: Boolean,
      default: false
    }
  },
  emits: ['change'],
  setup (props, { emit }) {
    const checked = ref(false)
    const changeChecked = () => {
      emit('update:modelValue', !props.modelValue)
      emit('change', !props.modelValue)
    }

    watch(() => props.modelValue, value => {
      checked.value = props.modelValue
    }, { immediate: true })
    return {
      checked,
      changeChecked
    }
  }
}
</script>
<style scoped lang="less">
.xtx-checkbox {
  display: inline-block;
  margin-right: 2px;

  .icon-checked {
    color: @xtxColor;

    ~ span {
      color: @xtxColor;
    }
  }

  i {
    position: relative;
    top: 1px;
  }

  span {
    margin-left: 2px;
  }
}
</style>
