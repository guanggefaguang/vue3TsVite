
<template>
  about页面
  <input ref="input"
         v-focus
         placeholder="请输入手机号"
         clearable />
  <input ref="input"
         placeholder="请输入手机号"
         clearable />
</template>

<script setup>
const vFocus = {
  mounted: (el) => el.focus()
}
</script>