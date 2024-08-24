<!-- tabber -->
<template>
  <div class="layoutTabber">
    <div class="tabberLeft">
      <el-icon class="isFold" @click="changeCollapse">
        <component :is="tabberSetting.isCollapse ? 'Expand' : 'Fold'" />
      </el-icon>
      <el-breadcrumb separator-icon="ArrowRight">
        <el-breadcrumb-item
          v-for="(item, index) in route.matched"
          :key="index"
          :to="item.path"
          v-show="[undefined, true].includes(item.meta.alwaysShow as any)"
        >
          <el-icon>
            <component :is="item.meta.icon" />
          </el-icon>
          <span class="tabberTitle">{{ item.meta.title }}</span>
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="tabberRight">
      <el-button size="small" icon="Refresh" circle @click="updateRefresh" />
      <el-button size="small" icon="FullScreen" circle @click="fullScreen" />
      <el-button size="small" icon="Setting" circle />
      <img :src="userStore.avatar" class="avatar" />
      <el-dropdown>
        <span class="el-dropdown-link">
          {{ userStore.username }}
          <el-icon class="el-icon--right">
            <arrow-down />
          </el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="logout">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script lang="ts" setup name="Tabber">
import useTabberSetting from "@/store/modules/tabberSetting"
import useUserStore from "@/store/modules/user"
const router = useRouter()
const route = useRoute()
// 顶部导航栏信息
const tabberSetting = useTabberSetting()
// 用户信息
const userStore = useUserStore()
// 点击侧边栏折叠状态
const changeCollapse = () => {
  tabberSetting.changeCollapse()
}
// 点击刷新按钮
const updateRefresh = () => {
  tabberSetting.setRefreshState()
}
// 点击全屏
const fullScreen = () => {
  // 是否全屏模式
  const isFullscreen = document.fullscreenElement
  // 切换到非全屏模式
  if (isFullscreen) {
    document.exitFullscreen()
  } else {
    document.documentElement.requestFullscreen()
  }
}
// 退出登录
const logout = async () => {
  userStore.clearUserData()
  router.replace({
    path: "/login",
    query: {
      redirect: route.path
    }
  })
}
</script>

<style lang="scss" scoped>
.layoutTabber {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: $baseTabberHeight;
  padding: 0 20px 0 10px;
}

.tabberLeft,
.tabberRight {
  display: flex;
}

.tabberLeft {
  .isFold {
    margin-right: 10px;
    cursor: pointer;
  }

  .tabberTitle {
    margin-left: 5px;
    vertical-align: text-top;
  }
}

.tabberRight {
  .avatar {
    width: 24px;
    height: 24px;
    margin-inline: 12px;
    border-radius: 50%;
  }

  .el-dropdown-link {
    display: flex;
    align-items: center;
  }

  .el-icon--right {
    vertical-align: middle;
  }
}
</style>
