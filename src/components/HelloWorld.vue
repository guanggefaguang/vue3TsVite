<template>
  <div v-waterMarker="{text:'测试水印',textColor:'rgba(180, 180, 180, 0.4)'}">
    <h1 v-striping
        style="position: relative;">这是标题</h1>

    <div class="wrap"
         v-resize="onResize">

      <div>{{ msg }}</div>

      <!-- 搜索 测试 防抖功能-->
      <div class="flex">

        <el-input v-model="search"
                  v-debounce="{ fn: debounceClick, event: 'input', delay: 300}"
                  placeholder="请输入内容"
                  clearable />

        <el-button type="primary"
                   v-throttle="{fn: searchClick, event: 'click', delay: 2000}">查询</el-button>
        <el-button type="primary"
                   v-copy="search">复制</el-button>
      </div>

      <div class="flex">
        <!-- 显示 -->
        <el-button type="primary"
                   v-permission="'1'">权限按钮1</el-button>
        <!-- 不显示 -->
        <el-button type="primary"
                   v-permission="'10'">权限按钮2</el-button>

      </div>

      <div class="from">
        <el-input ref="inputRef"
                  v-model="fromData.name"
                  placeholder="请输入名称"
                  clearable />
        <el-input v-model="fromData.phone"
                  placeholder="请输入手机号"
                  clearable />

        <!--  原生 全局的焦点方法 start-->
        <!-- <input placeholder="请输入手机号"
             clearable />
      <br>
      <input v-inputFocus
             placeholder="请输入手机号"
             clearable /> -->
        <!--  原生 全局的焦点方法 end-->

        <br>
        <!-- <button v-debounce="{ fn: debounceClick, event: 'click', delay: 3000}">测试防抖</button> -->
      </div>

      <el-form :inline="true"
               ref="formInlineREF"
               :model="formInline"
               class="demo-form-inline"
               :rules="rules">
        <el-form-item label="姓名"
                      prop="user">
          <el-input v-model="formInline.user"
                    placeholder="请输入姓名"
                    clearable />
        </el-form-item>
        <br>
        <el-form-item label="性别"
                      prop="region">
          <el-select v-model="formInline.region"
                     placeholder="请选择性别"
                     clearable>
            <el-option label="男"
                       value="1" />
            <el-option label="女"
                       value="2" />
          </el-select>
        </el-form-item>
        <br>

        <el-form-item label="时间"
                      prop="date">
          <el-date-picker v-model="formInline.date"
                          type="date"
                          placeholder="请选择时间"
                          clearable />
        </el-form-item>
        <br>

        <el-form-item>

          <el-button type="primary"
                     v-throttle="{fn: save, event: 'click', delay: 2000}">保存</el-button>
        </el-form-item>
      </el-form>
      <h1>{{reMsg(msg2)}}</h1>
      <button @click="setMsg('itred',$event)"></button>

    </div>
  </div>

</template>
<script setup>
import { ElMessage } from 'element-plus'
import { onBeforeMount, ref } from "vue";
const search = ref('')//测试搜索

const msg = ref('测试msg')


//  3-31测试vue3 字符串翻转 以及新增字符串
const msg2 = ref('123')//测试字符串翻转

function reMsg (val) {
  console.log('=====', val)
  return val.split('').reverse().join('')
}
// 1、如子组件使用steps，需要在父组件中使用

// 2、如果子组件使用没有使用则可以正常获取子组件的参数因为是默认私有，所以需要使用 defineExpose暴露参数，不然父组件获取不到子组件的参数

// defineExpose({
//   msg
// })


// element 局部自动焦点方法
const inputRef = ref(null);
setTimeout(() => {
  inputRef.value.focus();
}, 0);

// const copyText = ref('测试复制内容')



const fromData = ref({
  name: '',
  phone: ''
})
const formInline = ref({
  user: '',
  region: '',
  date: ''
})
const rules = {
  user: [{ required: true, message: '请输入名称', trigger: 'blur' }],
  region: [{ required: true, message: '请选择性别', trigger: 'change' }],
  date: [{ required: true, message: '请选择日期', trigger: 'change' }],
}
const formInlineREF = ref(null)
const save = () => {
  console.log(1);
  formInlineREF.value.validate(valid => {
    if (valid) {
      console.log('校验结果', valid)
      console.log(formInline.value);

      let datas = JSON.parse(JSON.stringify(formInline.value))
      console.log(datas);//解析序列化

      // 获取 formInline 中的值
      const userInput = formInline.value.user;
      const regionInput = formInline.value.region;
      const dateInput = formInline.value.date;

      console.log('姓名:', userInput);
      console.log('性别:', regionInput);
      console.log('时间:', dateInput);

      // 验证通过
      ElMessage({
        message: '验证通过',
        type: 'success',
      })
    } else {
      ElMessage('验证失败')
      // console.log('--', '验证失败');
    }
  })
}
// 搜索框 的防抖
const debounceClick = () => {
  // console.log("防抖函数", search.value);
}
// 搜索按钮 节流
const searchClick = () => {
  // console.log(1, search.value);
}
// 监听测试缩放
const onResize = () => {
  // console.log('测试缩放', window.innerWidth, window.innerHeight);
}

onBeforeMount(() => {
  // console.log('数据渲染前')
})
</script > 
<style scoped>
.wrap {
  width: 1000px;
  margin: 0 auto;
}
.flex {
  display: flex;
}
.from {
  border: 1px solid solid;
  padding: 30px 40%;
}
</style>
