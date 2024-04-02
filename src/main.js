import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// 注册自定义指令
import directives from './directives/index.js'
// const app = createApp({})
// app.use(directives)

createApp(App).use(store).use(router).use(ElementPlus).use(directives).mount('#app')
