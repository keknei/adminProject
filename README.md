# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template
uses Vue 3 `<script setup>` SFCs, check out the
[script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Learn more about the recommended Project Setup and IDE Support in the
[Vue Docs TypeScript Guide](https://vuejs.org/guide/typescript/overview.html#project-setup).

## 项目统一规范配置

- eslint (校验js语法)
- prettier (校验vue\html\js格式)
- stylelint (校验css\scss\lese格式)
- husky (git commit提交前钩子，修复语法错误)
- lint-staged (可以修复css\scss\lese\js\ts\html\vue等语法错误格式)
- commitlint (统一标准规范提交代码)
- only-allow 强制使用统一npm包管理器工具，不让用别的包管理工具
- env 配置环境变量
- unplugin-auto-import 可以让script setup语法糖中的标签中自动引入reactive\ref\computed\watch等方法
- vite-plugin-vue-setup-extend 可以直接在script标签上定义name
- vite-plugin-svg-icons 注册全局SVG图标
- resolve.alias 相对路径别名配置，使用 @ 代替 src
- sass 配置sass(scss)
- vue-router 配置路由
- axios 接口二次封装，请求返回统一拦截配置
- server 配置统一端口和代理
- pinia 统一状态管理
