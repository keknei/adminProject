import { createApp } from "vue"
import App from "@/App.vue"
import ElementPlus from "element-plus"
import zhCn from "element-plus/es/locale/lang/zh-cn"
import "element-plus/dist/index.css"
import "./style.css"
import "virtual:svg-icons-register"
import router from "@/router"
import globalComponent from "@/components/global/index.ts"
// 创建vue app
const app = createApp(App)
// element
app.use(ElementPlus, {
  locale: zhCn
})
// router
app.use(router)
// 全局组件
app.use(globalComponent)
app.mount("#app")
