import copy from './copy.js'
import debounce from './debounce.js'
import throttle from './throttle.js'
import inputFocus from './focus.js'
import resize from './resize.js'
import scrollLoad from './scrollLoad.js'
import inputNumber from './inputNumber.js'
import waterMarker from './waterMarker.js'
import striping from './striping.js'
import permission from './permission.js'
// 自定义指令
const directives = {
	copy,//复制
	debounce,//防抖指令
	throttle,//节流指令
	inputFocus,//原生inp 焦点事件
	resize,//缩放
	scrollLoad,//滚动加载
	inputNumber,
	waterMarker,//需求：给整个页面添加背景水印。
	striping,// 实现文字左右出现横线，用于title文本使用
	permission,//自定义一个权限指令
}

export default {
	install (app) {
		Object.keys(directives).forEach((key) => {
			app.directive(key, directives[key])
		})
	},
}