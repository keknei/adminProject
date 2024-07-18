import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import eslint from "vite-plugin-eslint"
import stylelint from "vite-plugin-stylelint"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // 检查js或者html、vue文件
    eslint(),
    // 检查css或者scss
    stylelint({
      fix: true // 自动修复
    })
  ],
  css: {
    // css 预处理器配置选项
    preprocessorOptions: {
      // sass 预处理器
      scss: {
        javascriptEnabled: true,
        // 将用于声明全局 sass 变量的文件导入到每个 Vue 文件中的 style 样式模块中
        additionalData: `@import "src/styles/index.scss";`
      }
    }
  }
})
