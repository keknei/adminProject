// 登录接口的参数类型
export interface loginForm {
  username: string
  password: string
}

interface dataType {
  token?: string | undefined
  message?: string
}

// 登录接口返回的参数类型
export interface loginReseponseData {
  code: number
  data: dataType
}

export interface userInfo {
  userId: number
  avatar: string
  username: string
  password: string
  desc: string
  roles: string[]
  buttons: string[]
  routes: string[]
  token: string
}

interface user {
  checkUser: userInfo
  message?: string
}

// 返回用户信息接口的数据类型
export interface userReseponseData {
  code: number
  data: user
}
