const route = [
  {
    path: "/",
    name: "首页",
    alias: "/index",
    component: () => import("@/views/base/home.vue")
  },
  {
    path: "/404",
    name: "404",
    component: () => import("@/views/error/notFound.vue")
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/404"
  }
]
export default route
