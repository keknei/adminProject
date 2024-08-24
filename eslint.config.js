import fs from "fs"
import path from "path"
import url from "url"
import globals from "globals"
import pluginJs from "@eslint/js"
import tseslint from "typescript-eslint"
import pluginVue from "eslint-plugin-vue"
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended"

const filename = url.fileURLToPath(import.meta.url)
const autoImportGlobals = JSON.parse(
  fs.readFileSync(path.resolve(path.dirname(filename), "./.eslintrc-auto-import.json")).toString()
)

export default [
  {
    ignores: [
      "config/*",
      ".husky",
      ".local",
      "public/*",
      ".vscode",
      "node_modules",
      "*.md",
      "idea",
      "dist"
    ]
  },
  { files: ["**/*.{js,mjs,cjs,ts,vue}"] },
  {
    languageOptions: {
      globals: { ...globals.browser, ...globals.node, ...autoImportGlobals.globals },
      parserOptions: {
        parser: tseslint.parser // 在vue文件上使用ts解析器
      }
    }
  },
  // eslint 默认推荐规则
  pluginJs.configs.recommended,
  // tseslint 默认推荐规则
  ...tseslint.configs.recommended,
  // vue3 默认基本规则
  ...pluginVue.configs["flat/essential"],
  //关闭所有不必要的或可能与Prettier冲突的规则
  eslintPluginPrettierRecommended,
  //在rules中添加自定义规则
  {
    rules: {
      "vue/multi-word-component-names": "off", // 关闭组件命名规则
      "@typescript-eslint/no-explicit-any": ["off"] // 关闭不能使用any类型的警告
    }
  }
]
