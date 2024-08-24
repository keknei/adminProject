import type { App, Component } from "vue"
import * as ElementPlusIconsVue from "@element-plus/icons-vue"
import svgIcon from "./svgIcon.vue"
const components: { [name: string]: Component } = { svgIcon }
export default {
  install(app: App) {
    Object.keys(components).forEach((key) => {
      app.component(key, components[key])
    })
    // 引入全部elment-plus图标并注册
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
      app.component(key, component)
    }
  }
}
