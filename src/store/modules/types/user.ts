import { RouteRecordRaw } from "vue-router"
export interface UserState {
  token: string | null
  containsRoute: RouteRecordRaw[]
  avatar: string
  username: string
  userId: number
}
