import axios from "axios"
import { ElMessage } from "element-plus"
// 创建axios实例
const request = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API, // 基础路径携带/api
  timeout: 5000
})

// 添加请求拦截器
request.interceptors.request.use((config) => {
  if (localStorage.getItem("token")) {
    config.headers.token = localStorage.getItem("token")
  }
  // 在发送请求之前做些什么
  return config
})

// 添加响应拦截器
request.interceptors.response.use(
  (response) => {
    // 成功的响应回调函数
    return response.data
  },
  (error) => {
    // 失败的响应回调函数
    // 处理http网络错误的
    let msg = ""
    const status = error.response.status
    switch (status) {
      case 401:
        msg = "token过期"
        break
      case 403:
        msg = "无权访问"
        break
      case 404:
        msg = "请求地址错误"
        break
      case 500:
        msg = "服务器出现问题"
        break
      default:
        msg = "无网络"
    }
    // 提示错误信息
    ElMessage({
      type: "error",
      message: msg
    })
    return Promise.reject(error)
  }
)
export default request
