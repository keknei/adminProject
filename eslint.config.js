import globals from "globals"
import pluginJs from "@eslint/js"
import tseslint from "typescript-eslint"
import pluginVue from "eslint-plugin-vue"
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended"

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
      globals: { ...globals.browser, ...globals.node },
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
  eslintPluginPrettierRecommended
]
