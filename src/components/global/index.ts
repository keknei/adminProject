import type { App, Component } from "vue"
import svgIcon from "./svgIcon.vue"
const components: { [name: string]: Component } = { svgIcon }
export default {
  install(app: App) {
    Object.keys(components).forEach((key) => {
      app.component(key, components[key])
    })
  }
}
