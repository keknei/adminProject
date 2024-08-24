import nprogress from "nprogress"
import "nprogress/nprogress.css"
import router from "@/router/index"
import pinia from "@/store/index"
import useUserStore from "@/store/modules/user"

// 引入接口
import { getUserInfo } from "@/api/user/index"
import type { userReseponseData } from "@/api/user/type"
// 用户仓库
const userStore = useUserStore(pinia)
//全局路由切换前置守卫
router.beforeEach(async (to, from, next) => {
  // 进度条开始
  nprogress.start()
  // 设置页面title
  document.title = to.meta.title as string
  // 如果登录了
  if (localStorage.getItem("token")) {
    // 如果是登陆页面不能访问，跳转到首页
    if (to.path === "/login") {
      next({ path: "/" })
    } else {
      // 有用户信息，正常跳转
      if (userStore.username) {
        next()
      } else {
        // 没有用户信息，重新获取
        try {
          // 获取用户信息
          const userResponse: userReseponseData = await getUserInfo()
          const { code, data } = userResponse
          if (code === 200) {
            userStore.setUserInfo(data.checkUser)
            next()
          } else {
            //token过期：获取不到用户信息了
            userStore.clearUserData()
            next({ path: "/login", query: { redirect: to.path } })
          }
        } catch (e) {
          console.log(e)
          //token过期：获取不到用户信息了
          userStore.clearUserData()
          next({ path: "/login", query: { redirect: to.path } })
        }
      }
    }
  } else {
    // 没有登录
    if (to.path === "/login") {
      next()
    } else {
      next({ path: "/login", query: { redirect: to.path } })
    }
  }
})

// 全局路由后置守卫
router.afterEach(() => {
  // 进度条结束
  nprogress.done()
})
