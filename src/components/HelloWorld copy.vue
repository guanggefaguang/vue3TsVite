<template>
  <div>
    <div>{{ msg }}</div>

    <h1 v-striping
        style="position: relative;">这是标题</h1>

    <div class="from">
      <el-input v-model="fromData.name"
                v-focus
                placeholder="请输入名称"
                clearable />

      <br>
      <el-input v-model="fromData.phone"
                v-focus
                placeholder="请输入手机号"
                clearable />

      <button v-copy="fromData">复制</button>

    </div>

    <!-- <el-button type="primary"
               size="samll"
               @click="on_text_Click">自定义点击事件</el-button> -->

    <el-form :inline="true"
             ref="formInlineREF"
             :model="formInline"
             class="demo-form-inline"
             :rules="rules">
      <el-form-item label="姓名"
                    prop="user">
        <el-input v-model="formInline.user"
                  v-focus
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
                   @click="save">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
 <!-- 方式一：(script 右边写上 setup) -->
<script setup>
//  方式二  方式三 
//  <script>
import { ElMessage } from 'element-plus'
import { onBeforeMount, ref } from "vue";
const msg = ref('测试msg')
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

// const formInline = reactive({
//   user: '',
//   region: '',
//   date: ''
// })

const rules = {
  user: [{ require: true, message: '请输入名称', trigger: 'blur' }],
  region: [{ require: true, message: '请选择性别', trigger: 'change' }],
  date: [{ require: true, message: '请选择日期', trigger: 'change' }],

}
const formInlineREF = ref(null)
function save () {
  formInlineREF.value?.validate(['user', 'region', 'date']).then(() => {
    // 验证通过
    ElMessage({
      message: '验证通过',
      type: 'success',
    })
  }).catch((err) => {
    //验证失败
    console.log(formInlineREF);
    ElMessage(err + '验证失败')

  })
}
// 自定义指令
// const handleInput = {
//   event: 'input',
//   fn (event) {
//     console.log('Debounced Input:', event.target.value);
//   },
//   delay: 500
// }


// const on_text_Click = () => {
//   console.log(msg.value)
//   if (typeof msg.value === "string") {
//     msg.value = '22222'
//     console.log('string')
//   } else {
//     console.log('other')
//   }
//   // alert(msg)
// }



onBeforeMount(() => {
  console.log('数据渲染前')
})


/* import { onBeforeMount, ref } from "vue";
export default {
name: "OrderForm_BP",
setup () {
  const msg = ref('OrderForm_BP')
  const on_text_Click = () => {
    console.log(msg.value)
    if (typeof msg.value === "string") {
      console.log('string')
    } else {
      console.log('other')
    }
    // alert(msg)
  }
  onBeforeMount(() => {
    console.log('数据渲染前')
  })
  return {
    on_text_Click,
    msg,
  }
}
} */


//  方式三 
// import { reactive, toRefs } from "vue";
// export default {
//   name: "hellowWorld",
//   setup () {
//     const data = reactive({
//       msg: "",
//       userList: [],
//       tableList: [],
//     })
//     const on_text_Click = function () {
//       console.log(data.msg, '自定义点击事件')
//       data.msg = '测试点击数据'
//       if (data.msg === "msg") {
//         console.log('string')
//       } else {
//         console.log('other')
//       }
//     }
//     return {
//       //解构
//       ...toRefs(data),
//       on_text_Click
//     }
//   }
// }
</script > 

<style scoped>
.from {
  border: 1px saddlebrown solid;
  padding: 30px 40%;
}
</style>
