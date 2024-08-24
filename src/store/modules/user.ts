// 创建用户相关仓库
import { defineStore } from "pinia"
import type { UserState } from "@/store/modules/types/user"
import type { userInfo } from "@/api/user/type"
import containsRoute from "@/router/modules/base"
const useUserStore = defineStore("user", {
  // 存储用户数据地方
  state: (): UserState => {
    return {
      token: localStorage.getItem("token") ? localStorage.getItem("token") : "", // 用户token长久存在本地，刷新后不丢失保持登录状态
      containsRoute,
      avatar: "", // 用户头像
      username: "", // 用户名字
      userId: 0 // 用户id
    }
  },
  getters: {},
  actions: {
    // 登录成功后设置token
    setToken(token: string) {
      this.token = token
      localStorage.setItem("token", token)
    },
    // 设置用户信息
    setUserInfo(userData: userInfo) {
      this.avatar = userData.avatar
      this.username = userData.username
      this.userId = userData.userId
    },
    // 退出登录清除用户信息
    clearUserData() {
      this.avatar = ""
      this.username = ""
      this.userId = 0
      localStorage.setItem("token", "")
    }
  }
})

export default useUserStore
