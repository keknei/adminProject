<!-- 菜单 -->
<template>
  <template v-for="item in filterMenuList" :key="item.path">
    <!-- 不隐藏菜单并且只有一级菜单 -->
    <el-menu-item :index="item.path" v-if="!item.children" @click="goRouter">
      <el-icon :size="20">
        <component :is="item?.meta?.icon" />
      </el-icon>
      <template #title>
        <span>{{ item?.meta?.title || "" }}</span>
      </template>
    </el-menu-item>
    <!-- 不隐藏菜单有一级菜单并且子菜单只有一个并且alwaysShow为false，隐藏父级，显示子级 -->
    <el-menu-item
      :index="item.path"
      v-if="item.children && item.children.length === 1 && !item.meta?.alwaysShow"
      @click="goRouter"
    >
      <el-icon :size="20">
        <component :is="item.children[0].meta?.icon" />
      </el-icon>
      <template #title>
        <span>{{ item?.children[0].meta?.title || "" }}</span>
      </template>
    </el-menu-item>
    <!-- 不隐藏菜单有一级菜单并且子菜单只有一个并且alwaysShow为true，显示父级和显示子级 -->
    <el-sub-menu
      :index="item.path"
      v-if="item.children && item.children.length === 1 && item.meta?.alwaysShow"
    >
      <template #title>
        <el-icon :size="20">
          <component :is="item?.meta?.icon" />
        </el-icon>
        <span>{{ item?.meta?.title || "" }}</span>
      </template>
      <Menu :menuList="item.children" />
    </el-sub-menu>
    <!-- 不隐藏菜单并且有子菜单 -->
    <el-sub-menu :index="item.path" v-if="item.children && item.children.length > 1">
      <template #title>
        <el-icon :size="20">
          <component :is="item?.meta?.icon" />
        </el-icon>
        <span>{{ item?.meta?.title || "" }}</span>
      </template>
      <Menu :menuList="item.children" />
    </el-sub-menu>
  </template>
</template>

<script setup lang="ts" name="Menu">
import { RouteRecordRaw } from "vue-router"
const router = useRouter()

// import { RouteRecordRaw } from "vue-router"
// import type { PropType } from "vue"
// defineProps({
//   menuList: {
//     type: Array as PropType<RouteRecordRaw[]>,
//     default: () => []
//   }
// })
interface MenuProps {
  menuList: RouteRecordRaw[]
}
const props = withDefaults(defineProps<MenuProps>(), {
  menuList: () => []
})
// 过滤不显示的菜单
const filterMenuList = computed(() => {
  return props.menuList.filter((item) => item.meta?.hidden !== true)
})
// 点击菜单跳转路由
const goRouter = (vc: any) => {
  router.push(vc.index)
}
</script>
<!-- <style lang="scss" scoped></style> -->
