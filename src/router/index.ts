import { createRouter, createWebHashHistory } from "vue-router"
import baseRoute from "./modules/base"

// 创建路由器
const router = createRouter({
  history: createWebHashHistory(), // 路由模式hash
  routes: [...baseRoute],
  // 滚动行为
  scrollBehavior() {
    return {
      top: 0,
      left: 0
    }
  }
})

export default router
