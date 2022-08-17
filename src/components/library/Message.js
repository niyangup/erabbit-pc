import { createVNode, render } from 'vue'
import XtxMessage from './XtxMessage.vue'

// DOM容器
const div = document.createElement('div')
div.setAttribute('class', 'xtx-msssage-container')
document.body.appendChild(div)

// 定时器标识
let timer = null

export default ({
  type,
  text
}) => {
  // 渲染组件
  // 将消息提示组件编译为虚拟节点(dom节点)
  // createVNode(组件,属性对象（props）)
  const vnode = createVNode(XtxMessage, {
    type,
    text
  })
  // 准备一个装载消息提示组件的DOM容器
  // 将虚拟节点渲染再容器中
  // render(虚拟节点,DOM容器)
  render(vnode, div)
  // 3s后销毁组件
  clearTimeout(timer)
  timer = setTimeout(() => {
    render(null, div)
  }, 3000)
}
