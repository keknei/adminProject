export default {
  extends: [
    "stylelint-config-standard", // 继承 Stylelint 中标准的配置
    "stylelint-config-html/vue", // 配置 vue 中 template 样式格式化
    "stylelint-config-recommended-vue/scss", // 继承 Stylelint 中推荐的适合于 vue 中 scss 样式格式化的配置
    "stylelint-config-standard-scss", // 继承 Stylelint 中标准的适合 scss 的配置
    "stylelint-config-standard-vue", // 继承 Stylelint 中标准的适合 vue 的配置
    "stylelint-config-recommended-scss", // 继承 Stylelint 中推荐的适合 scss 的配置
    "stylelint-config-recess-order" // 继承 Stylelint 中以 recess 的方式对 CSS 属性进行排序的配置
  ],
  // 插件是由社区创建的规则或规则集 按照规则对CSS属性进行排序
  plugins: [
    // 执行各种各样的 SCSS语法特性检测规则(插件包)
    "stylelint-scss",
    // 指定排序，比如声明的块内(插件包)属性的顺序
    "stylelint-order"
  ],
  overrides: [
    {
      // 使用 PostCSS 的 scss 语法解析器解析匹配文件中的样式代码
      files: ["**/*.(scss|css|vue|html)"],
      customSyntax: "postcss-scss"
    },
    {
      // 使用 PostCSS 的 html 语法解析器解析匹配文件中的代码
      files: ["**/*.(html|vue)"],
      customSyntax: "postcss-html"
    }
  ],
  // 配置不需要 Stylelint 检查的文件类型
  ignoreFiles: ["**/*.js", "**/*.jsx", "**/*.tsx", "**/*.ts", "**/*.json", "**/*.md", "**/*.yaml"],
  rules: {
    "selector-id-pattern": null,
    "selector-class-pattern": null,
    "keyframes-name-pattern": null,
    "scss/at-mixin-pattern": null,
    "scss/dollar-variable-pattern": null,
    "scss/percent-placeholder-pattern": null,
    "color-function-notation": "legacy",
    "alpha-value-notation": "number",
    "selector-pseudo-class-no-unknown": [
      // 不允许未知的选择器
      true,
      {
        ignorePseudoClasses: ["global", "v-deep", "deep"] // 忽略属性，修改element默认样式的时候能使用到
      }
    ]
  }
}
