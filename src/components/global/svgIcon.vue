<!-- svgIcon -->
<template>
  <div>
    <svg :style="{ width, height }">
      <use :xlink:href="prefix + name" :fill="color"></use>
    </svg>
  </div>
</template>

<script setup lang="ts">
defineProps({
  //svg宽度
  width: {
    type: String,
    default: "16px"
  },
  //svg高度
  height: {
    type: String,
    default: "16px"
  },
  //xlink:href属性值的前缀
  prefix: {
    type: String,
    default: "#icon-"
  },
  //svg矢量图的名字
  name: {
    type: String,
    default: ""
  },
  //svg矢量图的颜色
  color: {
    type: String,
    default: ""
  }
})
</script>
<!-- <style lang="scss" scoped></style> -->
