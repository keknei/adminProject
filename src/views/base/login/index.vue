<!-- 登录 -->
<template>
  <div class="loginContainer">
    <el-row>
      <el-col :span="12" :xs="0"></el-col>
      <el-col :span="12" :xs="12">
        <el-form
          class="loginForm"
          :model="loginFormParams"
          :rules="loginFormRules"
          ref="loginFormRef"
        >
          <h1>Hello</h1>
          <h2>欢迎来到硅谷甄选</h2>
          <el-form-item prop="username">
            <el-input :prefix-icon="User" v-model="loginFormParams.username"></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              type="password"
              :prefix-icon="Lock"
              show-password
              v-model="loginFormParams.password"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button :loading="isLoading" class="loginBtn" type="primary" @click="loginHandler">
              登录
            </el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts" setup name="Login">
import { User, Lock } from "@element-plus/icons-vue"
import { ElNotification } from "element-plus"
// 引入接口
import { login } from "@/api/user"
import type { loginForm, loginReseponseData } from "@/api/user/type"
// 引入用户仓库
import useUserStore from "@/store/modules/user"
const userStore = useUserStore()
// 使用路由
const router = useRouter()
const route = useRoute()
// 用户名密码数据
const loginFormParams: loginForm = reactive({
  username: "",
  password: ""
})
// 用户名的自定义校验规则
const userValidator = (rule: any, value: any, callback: any) => {
  if (/^[a-zA-Z0-9_-]{5,12}$/.test(value)) {
    callback()
  } else {
    callback(new Error("用户名格式不正确"))
  }
}
// 校验规则
const loginFormRules = {
  username: [
    // { required: true, message: "请输入用户名", trigger: "blur" },
    // { required: true, min: 5, max: 12, message: "账号长度至少六位", trigger: "change" }
    { validator: userValidator, trigger: "blur" }
  ],
  password: [
    { required: true, message: "请输入密码", trigger: "blur" },
    { required: true, min: 6, max: 12, message: "密码长度至少六位", trigger: "change" }
  ]
}
// 获取form表单
const loginFormRef = ref()
// 是否请求登录
const isLoading = ref(false)
// 登录时间早/中/下/晚
const getTime = (): string => {
  const hour = new Date().getHours()
  if (hour < 9) {
    return "早上好"
  } else if (hour < 12) {
    return "上午好"
  } else if (hour < 18) {
    return "下午好"
  } else {
    return "晚上好"
  }
}
// 点击登录
const loginHandler = async () => {
  // 验证表单
  await loginFormRef.value.validate()
  try {
    isLoading.value = true
    const loginResponse: loginReseponseData = await login(loginFormParams)
    const { code, data } = loginResponse
    // isLoading.value = false
    if (code === 200) {
      // 设置token
      userStore.setToken(data.token as string)
      ElNotification({
        title: "登录成功",
        message: `Hi, ${getTime()}`,
        type: "success"
      })
      // 跳转首页或者redirect
      router.push({ path: (route.query.redirect as string) || "/" })
    } else {
      ElNotification({
        title: "Error",
        message: data.message,
        type: "error"
      })
    }
  } catch (e) {
    ElNotification({
      title: "Error",
      message: "登录失败",
      type: "error"
    })
  }
}
</script>
<style scoped lang="scss">
.loginContainer {
  width: 100%;
  height: 100vh;
  background: url("@/assets/images/background.jpg") no-repeat;
  background-size: cover;
}

.loginForm {
  position: relative;
  top: 30vh;
  width: 80%;
  padding: 40px;
  background: url("@/assets/images/login_form.png") no-repeat;
  background-size: cover;

  h1 {
    font-size: 40px;
    color: white;
  }

  h2 {
    margin-block: 20px;
    font-size: 20px;
    color: white;
  }

  .loginBtn {
    width: 100%;
  }
}
</style>
