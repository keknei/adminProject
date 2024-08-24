<!-- logo组件 -->
<template>
  <div class="logoContainer">
    <img src="/logo.png" alt="挂了" />
    <span>后台管理系统</span>
  </div>
</template>

<script setup lang="ts" name="Logo"></script>
<style lang="scss" scoped>
.logoContainer {
  display: flex;
  align-items: center;
  height: $baseMenuLogoHeight;
  padding: 10px;
  color: white;

  img {
    width: $baseMenuLogoHeight;
    height: $baseMenuLogoHeight;
  }

  span {
    margin-left: 15px;
    font-size: $baseMenuLogoTitleFontSize;
  }
}
</style>
