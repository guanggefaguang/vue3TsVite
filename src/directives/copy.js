// 自定义拷贝功能
export default {
	// 在绑定元素的父组件挂载之后调用
	mounted (el, { value }) {
		el.$value = value
		// 绑定点击事件，就是所谓的一键 copy 啦
		el.addEventListener('click', () => {
			if (!el.$value) {
				// 值为空的时候，给出提示。可根据项目UI仔细设计
				console.log('无复制内容')
				return
			}
			// 动态创建 textarea 标签
			const textarea = document.createElement('textarea')
			// 将该 textarea 设为 readonly 防止 iOS 下自动唤起键盘，同时将 textarea 移出可视区域
			textarea.readOnly = 'readonly'
			textarea.style.position = 'absolute'
			textarea.style.left = '-9999px'
			// 将要 copy 的值赋给 textarea 标签的 value 属性
			textarea.value = el.$value
			// 将 textarea 插入到 body 中
			document.body.appendChild(textarea)
			// 选中值并复制
			textarea.select()
			const result = document.execCommand('Copy')
			if (result) {
				console.log('复制成功') // 可根据项目UI仔细设计
			}
			document.body.removeChild(textarea)
		})
	},

	// 在包含组件的 VNode 及其子组件的 VNode 更新之后调用
	updated (el, { value }) {
		el.$value = value
	},
	// 在绑定元素的父组件卸载之后调用
	unmounted (el) {
		el.removeEventListener('click', el.handler)
	},

}

