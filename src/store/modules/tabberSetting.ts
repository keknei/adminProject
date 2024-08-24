import { defineStore } from "pinia"
import type { TabberSettingState } from "./types/tabberSetting"
// 顶部导航栏设置
const useTabberSettingStore = defineStore("tabberSetting", {
  state: (): TabberSettingState => {
    return {
      isCollapse: false, // 侧边栏是否折叠
      refreshState: false // 刷新按钮状态
    }
  },
  getters: {},
  actions: {
    // 改变侧边栏折叠状态
    changeCollapse() {
      this.isCollapse = !this.isCollapse
    },
    // 刷新按钮状态
    setRefreshState() {
      this.refreshState = !this.refreshState
    }
  }
})

export default useTabberSettingStore
