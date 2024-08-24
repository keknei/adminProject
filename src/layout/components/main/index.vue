<!-- main -->
<template>
  <router-view #default="{ Component }">
    <transition name="fade">
      <component :is="Component" v-if="flag"></component>
    </transition>
  </router-view>
</template>

<script lang="ts" setup name="Main">
import useTabberSetting from "@/store/modules/tabberSetting"
const tabberSetting = useTabberSetting()
const flag = ref(true)
watch(
  () => tabberSetting.refreshState,
  () => {
    flag.value = false
    nextTick(() => {
      flag.value = true
    })
  }
)
</script>
<style lang="scss" scoped>
.fade-enter-from {
  opacity: 0;
}

.fade-enter-active {
  transition: all 0.3s;
}

.fade-from-to {
  opacity: 1;
}
</style>
