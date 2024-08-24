<!-- 首页 -->
<template>
  <div>首页</div>
</template>

<script setup lang="ts" name="Home">
// 引入接口
import { getUserInfo } from "@/api/user"
import type { userReseponseData } from "@/api/user/type"
import { ElNotification } from "element-plus"
import useUserStore from "@/store/modules/user"
const userStore = useUserStore()

// 获取用户信息
const getUserInfoApi = async () => {
  try {
    const userResponse: userReseponseData = await getUserInfo()
    const { code, data } = userResponse
    if (code === 200) {
      userStore.setUserInfo(data.checkUser)
    } else {
      ElNotification({
        title: "错误",
        message: data.message,
        type: "error"
      })
    }
  } catch (e) {
    console.log(e)
  }
}
getUserInfoApi()
</script>
<!-- <style lang="scss" scoped></style> -->
