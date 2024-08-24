<!-- layout页面 -->
<template>
  <div class="layoutContainer">
    <!-- 左侧菜单栏 -->
    <div class="layoutSlider" :class="tabberSetting.isCollapse ? 'collapse' : ''">
      <Logo />
      <el-scrollbar class="scrollbar">
        <el-menu :default-active="route.path" :collapse="tabberSetting.isCollapse">
          <Menu :menuList="userStore.containsRoute" />
        </el-menu>
      </el-scrollbar>
    </div>
    <!-- 右侧顶部导航 + 页面内容 -->
    <div class="layoutContent">
      <!-- 右侧顶部导航 -->
      <Tabber />
      <!-- 页面内容 -->
      <div class="layoutMain">
        <Main />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts" name="layout">
import Logo from "@/layout/components/logo/index.vue"
import Menu from "@/layout/components/menu/index.vue"
import Tabber from "@/layout/components/tabber/index.vue"
import Main from "@/layout/components/main/index.vue"
import useUserStore from "@/store/modules/user"
import useTabberSetting from "@/store/modules/tabberSetting"
// 顶部导航栏信息
const tabberSetting = useTabberSetting()
// 个人用户信息
const userStore = useUserStore()
// route信息
const route = useRoute()
// 过滤隐藏的菜单
// const filterMenu = (menu: any) => {
//   const arr: any[] = []
//   menu.forEach((item: any) => {
//     if (!item.meta.hidden) {
//       if (item.children && item.children.length > 0) {
//         item.children = filterMenu(item.children)
//         arr.push(item)
//       } else {
//         arr.push(item)
//       }
//     }
//   })
//   return arr
// }
// console.log(filterMenu(userStore.containsRoute))
</script>
<style lang="scss">
.el-menu {
  --el-menu-bg-color: $baseMenuBackground;
  --el-menu-text-color: white;
  --el-menu-hover-bg-color: #60666c;

  border-right: 0;
}

.el-menu--popup-container {
  background: $baseMenuBackground;
}
</style>
<style lang="scss" scoped>
.layoutContainer {
  display: flex;
}

.layoutSlider {
  width: $baseMenuWidth;
  height: 100vh;
  background: $baseMenuBackground;
  transition: all 0.3s;
}

.layoutSlider.collapse {
  width: 65px;
}

.scrollbar {
  height: calc(100vh - $baseMenuLogoHeight - 40px);
  color: white;
}

.layoutContent {
  flex: 1;

  .layoutMain {
    height: calc(100vh - $baseTabberHeight);
    overflow-y: auto;
  }
}
</style>
