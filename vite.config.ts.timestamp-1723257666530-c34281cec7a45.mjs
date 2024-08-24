// vite.config.ts
import { defineConfig, loadEnv } from "file:///D:/adminTemplate/adminProject/node_modules/vite/dist/node/index.js";
import vue from "file:///D:/adminTemplate/adminProject/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import eslint from "file:///D:/adminTemplate/adminProject/node_modules/vite-plugin-eslint/dist/index.mjs";
import stylelint from "file:///D:/adminTemplate/adminProject/node_modules/vite-plugin-stylelint/dist/index.mjs";
import vueSetupExtend from "file:///D:/adminTemplate/adminProject/node_modules/vite-plugin-vue-setup-extend/dist/index.mjs";
import AutoImport from "file:///D:/adminTemplate/adminProject/node_modules/unplugin-auto-import/dist/vite.js";
import path from "path";
import { createSvgIconsPlugin } from "file:///D:/adminTemplate/adminProject/node_modules/vite-plugin-svg-icons/dist/index.mjs";
var __vite_injected_original_dirname = "D:\\adminTemplate\\adminProject";
var vite_config_default = defineConfig(({ mode }) => {
  console.log(process.env.NODE_ENV);
  console.log(loadEnv(mode, path.resolve(__vite_injected_original_dirname, "./env")));
  return {
    base: "/",
    //开发或生产环境服务的公共基础路径
    envDir: "./env",
    plugins: [
      vue(),
      // 检查js或者html、vue文件
      eslint(),
      // 检查css或者scss
      stylelint({
        fix: true
        // 自动修复
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
        "@": path.resolve(__vite_injected_original_dirname, "./src")
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
  };
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxhZG1pblRlbXBsYXRlXFxcXGFkbWluUHJvamVjdFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcYWRtaW5UZW1wbGF0ZVxcXFxhZG1pblByb2plY3RcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L2FkbWluVGVtcGxhdGUvYWRtaW5Qcm9qZWN0L3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnLCBsb2FkRW52IH0gZnJvbSBcInZpdGVcIlxuaW1wb3J0IHZ1ZSBmcm9tIFwiQHZpdGVqcy9wbHVnaW4tdnVlXCJcbmltcG9ydCBlc2xpbnQgZnJvbSBcInZpdGUtcGx1Z2luLWVzbGludFwiXG5pbXBvcnQgc3R5bGVsaW50IGZyb20gXCJ2aXRlLXBsdWdpbi1zdHlsZWxpbnRcIlxuaW1wb3J0IHZ1ZVNldHVwRXh0ZW5kIGZyb20gXCJ2aXRlLXBsdWdpbi12dWUtc2V0dXAtZXh0ZW5kXCJcbmltcG9ydCBBdXRvSW1wb3J0IGZyb20gXCJ1bnBsdWdpbi1hdXRvLWltcG9ydC92aXRlXCJcbmltcG9ydCBwYXRoIGZyb20gXCJwYXRoXCJcbi8vIGltcG9ydCB7IGZpbGVVUkxUb1BhdGgsIFVSTCB9IGZyb20gXCJub2RlOnVybFwiXG5pbXBvcnQgeyBjcmVhdGVTdmdJY29uc1BsdWdpbiB9IGZyb20gXCJ2aXRlLXBsdWdpbi1zdmctaWNvbnNcIlxuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKCh7IG1vZGUgfSkgPT4ge1xuICBjb25zb2xlLmxvZyhwcm9jZXNzLmVudi5OT0RFX0VOVilcbiAgY29uc29sZS5sb2cobG9hZEVudihtb2RlLCBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcIi4vZW52XCIpKSkgLy8gXHU4M0I3XHU1M0Q2ZW52XHU3Njg0XHU3M0FGXHU1ODgzXHU1M0Q4XHU5MUNGXG4gIHJldHVybiB7XG4gICAgYmFzZTogXCIvXCIsIC8vXHU1RjAwXHU1M0QxXHU2MjE2XHU3NTFGXHU0RUE3XHU3M0FGXHU1ODgzXHU2NzBEXHU1MkExXHU3Njg0XHU1MTZDXHU1MTcxXHU1N0ZBXHU3ODQwXHU4REVGXHU1Rjg0XG4gICAgZW52RGlyOiBcIi4vZW52XCIsXG4gICAgcGx1Z2luczogW1xuICAgICAgdnVlKCksXG4gICAgICAvLyBcdTY4QzBcdTY3RTVqc1x1NjIxNlx1ODAwNWh0bWxcdTMwMDF2dWVcdTY1ODdcdTRFRjZcbiAgICAgIGVzbGludCgpLFxuICAgICAgLy8gXHU2OEMwXHU2N0U1Y3NzXHU2MjE2XHU4MDA1c2Nzc1xuICAgICAgc3R5bGVsaW50KHtcbiAgICAgICAgZml4OiB0cnVlIC8vIFx1ODFFQVx1NTJBOFx1NEZFRVx1NTkwRFxuICAgICAgfSksXG4gICAgICAvLyBcdTUzRUZcdTRFRTVcdTc2RjRcdTYzQTVcdTU3MjhcdTdFQzRcdTRFRjZzY3JpcHRcdTY4MDdcdTdCN0VcdTRFMEFcdTVCOUFcdTRFNDlcdTUxOTluYW1lXHU1NDBEXHU3OUYwXG4gICAgICB2dWVTZXR1cEV4dGVuZCgpLFxuICAgICAgQXV0b0ltcG9ydCh7XG4gICAgICAgIGR0czogXCJhdXRvLWltcG9ydHMuZC50c1wiLFxuICAgICAgICBpbXBvcnRzOiBbXG4gICAgICAgICAgXCJ2dWVcIixcbiAgICAgICAgICBcInZ1ZS1yb3V0ZXJcIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICB2dWV4OiBbXCJ1c2VTdG9yZVwiXVxuICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgZXNsaW50cmM6IHtcbiAgICAgICAgICBlbmFibGVkOiBmYWxzZSxcbiAgICAgICAgICBmaWxlcGF0aDogXCIuLy5lc2xpbnRyYy1hdXRvLWltcG9ydC5qc29uXCJcbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgICAvLyBcdTkxNERcdTdGNkVzdmdcdTU2RkVcdTY4MDdcbiAgICAgIGNyZWF0ZVN2Z0ljb25zUGx1Z2luKHtcbiAgICAgICAgLy8gXHU2MzA3XHU1QjlBXHU5NzAwXHU4OTgxXHU3RjEzXHU1QjU4XHU3Njg0XHU1NkZFXHU2ODA3XHU2NTg3XHU0RUY2XHU1OTM5XG4gICAgICAgIGljb25EaXJzOiBbcGF0aC5yZXNvbHZlKHByb2Nlc3MuY3dkKCksIFwic3JjL2Fzc2V0cy9pY29uc1wiKV0sXG4gICAgICAgIC8vIFx1NjMwN1x1NUI5QXN5bWJvbElkXHU2ODNDXHU1RjBGXG4gICAgICAgIHN5bWJvbElkOiBcImljb24tW2Rpcl0tW25hbWVdXCJcbiAgICAgIH0pXG4gICAgXSxcbiAgICBjc3M6IHtcbiAgICAgIC8vIGNzcyBcdTk4ODRcdTU5MDRcdTc0MDZcdTU2NjhcdTkxNERcdTdGNkVcdTkwMDlcdTk4NzlcbiAgICAgIHByZXByb2Nlc3Nvck9wdGlvbnM6IHtcbiAgICAgICAgLy8gc2FzcyBcdTk4ODRcdTU5MDRcdTc0MDZcdTU2NjhcbiAgICAgICAgc2Nzczoge1xuICAgICAgICAgIGphdmFzY3JpcHRFbmFibGVkOiB0cnVlLFxuICAgICAgICAgIC8vIFx1NUMwNlx1NzUyOFx1NEU4RVx1NThGMFx1NjYwRVx1NTE2OFx1NUM0MCBzYXNzIFx1NTNEOFx1OTFDRlx1NzY4NFx1NjU4N1x1NEVGNlx1NUJGQ1x1NTE2NVx1NTIzMFx1NkJDRlx1NEUyQSBWdWUgXHU2NTg3XHU0RUY2XHU0RTJEXHU3Njg0IHN0eWxlIFx1NjgzN1x1NUYwRlx1NkEyMVx1NTc1N1x1NEUyRFxuICAgICAgICAgIGFkZGl0aW9uYWxEYXRhOiBgQGltcG9ydCBcInNyYy9hc3NldHMvc3R5bGVzL2FwcC5zY3NzXCI7YFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICByZXNvbHZlOiB7XG4gICAgICAvLyBhbGlhczogW3sgZmluZDogXCJAXCIsIHJlcGxhY2VtZW50OiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcIi4vc3JjXCIpIH1dIC8vIFx1NzZGOFx1NUJGOVx1OERFRlx1NUY4NFx1NTIyQlx1NTQwRFx1OTE0RFx1N0Y2RVx1RkYwQ1x1NEY3Rlx1NzUyOCBAIFx1NEVFM1x1NjZGRiBzcmNcbiAgICAgIGFsaWFzOiB7XG4gICAgICAgIFwiQFwiOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcIi4vc3JjXCIpXG4gICAgICB9XG4gICAgfVxuICAgIC8vIHNlcnZlcjoge1xuICAgIC8vICAgb3BlbjogdHJ1ZSwgLy8gXHU2NjJGXHU1NDI2XHU4MUVBXHU1MkE4XHU1NzI4XHU2RDRGXHU4OUM4XHU1NjY4XHU2MjUzXHU1RjAwXG4gICAgLy8gICBodHRwczogZmFsc2UsIC8vIFx1NjYyRlx1NTQyNlx1NUYwMFx1NTQyRiBodHRwc1xuICAgIC8vICAgLy9ob3N0OiBcIjAuMC4wLjBcIiwgLy8gXHU2MjUzXHU1RjAwXHU2RDRGXHU4OUM4XHU1NjY4XHU1NDBFXHU2NjJGbG9jYWxob3N0XHU1NzMwXHU1NzQwXHVGRjBDXHU0RTBEXHU2NjJGaXBcdTU3MzBcdTU3NDBcbiAgICAvLyAgIC8vcG9ydDogMTAxMSwvL1x1N0FFRlx1NTNFM1xuICAgIC8vICAgcHJveHk6IHtcbiAgICAvLyAgICAgXCIvc21zLWJ1c2luZXNzLXdlYlwiOiB7XG4gICAgLy8gICAgICAgdGFyZ2V0OiBcImh0dHA6Ly94eHh4eHh4eHh4eHh4L1wiLFxuICAgIC8vICAgICAgIHRhcmdldDogXCJodHRwOi8vMTkyLjE2OC4xNjkuMjQyOjcxMjUvXCIsXG4gICAgLy8gICAgICAgY2hhbmdlT3JpZ2luOiB0cnVlLFxuICAgIC8vICAgICAgIHJld3JpdGU6IChwYXRoKSA9PiBwYXRoLnJlcGxhY2UoL15cXC93ZWNvbS1idXNpbmVzcy13ZWIvLCBcIlwiKVxuICAgIC8vICAgICB9XG4gICAgLy8gICB9XG4gICAgLy8gfVxuICB9XG59KVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUErUSxTQUFTLGNBQWMsZUFBZTtBQUNyVCxPQUFPLFNBQVM7QUFDaEIsT0FBTyxZQUFZO0FBQ25CLE9BQU8sZUFBZTtBQUN0QixPQUFPLG9CQUFvQjtBQUMzQixPQUFPLGdCQUFnQjtBQUN2QixPQUFPLFVBQVU7QUFFakIsU0FBUyw0QkFBNEI7QUFSckMsSUFBTSxtQ0FBbUM7QUFXekMsSUFBTyxzQkFBUSxhQUFhLENBQUMsRUFBRSxLQUFLLE1BQU07QUFDeEMsVUFBUSxJQUFJLFFBQVEsSUFBSSxRQUFRO0FBQ2hDLFVBQVEsSUFBSSxRQUFRLE1BQU0sS0FBSyxRQUFRLGtDQUFXLE9BQU8sQ0FBQyxDQUFDO0FBQzNELFNBQU87QUFBQSxJQUNMLE1BQU07QUFBQTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsU0FBUztBQUFBLE1BQ1AsSUFBSTtBQUFBO0FBQUEsTUFFSixPQUFPO0FBQUE7QUFBQSxNQUVQLFVBQVU7QUFBQSxRQUNSLEtBQUs7QUFBQTtBQUFBLE1BQ1AsQ0FBQztBQUFBO0FBQUEsTUFFRCxlQUFlO0FBQUEsTUFDZixXQUFXO0FBQUEsUUFDVCxLQUFLO0FBQUEsUUFDTCxTQUFTO0FBQUEsVUFDUDtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsWUFDRSxNQUFNLENBQUMsVUFBVTtBQUFBLFVBQ25CO0FBQUEsUUFDRjtBQUFBLFFBQ0EsVUFBVTtBQUFBLFVBQ1IsU0FBUztBQUFBLFVBQ1QsVUFBVTtBQUFBLFFBQ1o7QUFBQSxNQUNGLENBQUM7QUFBQTtBQUFBLE1BRUQscUJBQXFCO0FBQUE7QUFBQSxRQUVuQixVQUFVLENBQUMsS0FBSyxRQUFRLFFBQVEsSUFBSSxHQUFHLGtCQUFrQixDQUFDO0FBQUE7QUFBQSxRQUUxRCxVQUFVO0FBQUEsTUFDWixDQUFDO0FBQUEsSUFDSDtBQUFBLElBQ0EsS0FBSztBQUFBO0FBQUEsTUFFSCxxQkFBcUI7QUFBQTtBQUFBLFFBRW5CLE1BQU07QUFBQSxVQUNKLG1CQUFtQjtBQUFBO0FBQUEsVUFFbkIsZ0JBQWdCO0FBQUEsUUFDbEI7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLElBQ0EsU0FBUztBQUFBO0FBQUEsTUFFUCxPQUFPO0FBQUEsUUFDTCxLQUFLLEtBQUssUUFBUSxrQ0FBVyxPQUFPO0FBQUEsTUFDdEM7QUFBQSxJQUNGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBZUY7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
