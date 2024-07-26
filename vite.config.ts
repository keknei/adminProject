import { defineConfig, loadEnv } from "vite"
import vue from "@vitejs/plugin-vue"
import eslint from "vite-plugin-eslint"
import stylelint from "vite-plugin-stylelint"
import vueSetupExtend from "vite-plugin-vue-setup-extend"
import AutoImport from "unplugin-auto-import/vite"
import path from "path"
// import { fileURLToPath, URL } from "node:url"
import { createSvgIconsPlugin } from "vite-plugin-svg-icons"

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  console.log(process.env.NODE_ENV)
  console.log(loadEnv(mode, path.resolve(__dirname, "./env"))) // 获取env的环境变量
  return {
    base: "/", //开发或生产环境服务的公共基础路径
    envDir: "./env",
    plugins: [
      vue(),
      // 检查js或者html、vue文件
      eslint(),
      // 检查css或者scss
      stylelint({
        fix: true // 自动修复
      }),
      // 可以直接在组件script标签上定义写name名称
      vueSetupExtend(),
      AutoImport({
        dts: "auto-imports.d.ts",
        imports: [
          "vue",
          "vue-router",
          {
            vuex: ["useStore"]
          }
        ],
        eslintrc: {
          enabled: false,
          filepath: "./.eslintrc-auto-import.json"
        }
      }),
      // 配置svg图标
      createSvgIconsPlugin({
        // 指定需要缓存的图标文件夹
        iconDirs: [path.resolve(process.cwd(), "src/assets/icons")],
        // 指定symbolId格式
        symbolId: "icon-[dir]-[name]"
      })
    ],
    css: {
      // css 预处理器配置选项
      preprocessorOptions: {
        // sass 预处理器
        scss: {
          javascriptEnabled: true,
          // 将用于声明全局 sass 变量的文件导入到每个 Vue 文件中的 style 样式模块中
          additionalData: `@import "src/assets/styles/app.scss";`
        }
      }
    },
    resolve: {
      // alias: [{ find: "@", replacement: path.resolve(__dirname, "./src") }] // 相对路径别名配置，使用 @ 代替 src
      alias: {
        "@": path.resolve(__dirname, "./src")
      }
    }
    // server: {
    //   open: true, // 是否自动在浏览器打开
    //   https: false, // 是否开启 https
    //   //host: "0.0.0.0", // 打开浏览器后是localhost地址，不是ip地址
    //   //port: 1011,//端口
    //   proxy: {
    //     "/sms-business-web": {
    //       target: "http://xxxxxxxxxxxxx/",
    //       target: "http://192.168.169.242:7125/",
    //       changeOrigin: true,
    //       rewrite: (path) => path.replace(/^\/wecom-business-web/, "")
    //     }
    //   }
    // }
  }
})
