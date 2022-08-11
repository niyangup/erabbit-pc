<script>
import { h } from 'vue'

export default {
  name: 'XtxBread',
  render () {
    const list = []
    const items = this.$slots.default()
    items.forEach((item) => {
      list.push(item)
      list.push(h('i', { class: 'iconfont icon-angle-right' }))
    })
    // 删除最后一个多余的i
    list.pop()
    return h('div', {
      class: 'xtx-bread'
    }, list)
  }
}
</script>

<style lang='less'>
.xtx-bread {
  display: flex;
  padding: 25px 10px;

  &-item {
    a {
      color: #666;
      transition: all .4s;

      &:hover {
        color: @xtxColor;
      }
    }
  }

  i {
    font-size: 12px;
    margin-left: 5px;
    margin-right: 5px;
    line-height: 22px;
  }
}
</style>
