import request from "@/utils/request"
import { loginForm, loginReseponseData, userReseponseData } from "./type"

enum api {
  login = "/user/login",
  userinfo = "/user/info"
}
// 登录接口
export const login = (data: loginForm) => request.post<any, loginReseponseData>(api.login, data)
// 获取用户信息接口
export const getUserInfo = () => request.get<any, userReseponseData>(api.userinfo)
