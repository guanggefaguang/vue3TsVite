function checkArray (key) {
	let arr = ['1', '2', '3', '4']
	let index = arr.indexOf(key)
	if (index > -1) {
		console.log('有权限');
		return true // 有权限
	} else {
		console.log('无权限');
		return false // 无权限
	}
}
const permission = {
	mounted (el, binding) {
		let permission = binding.value // 获取到 v-permission的值
		if (permission) {
			let hasPermission = checkArray(permission)
			if (!hasPermission) {
				// 没有权限 移除Dom元素
				el.parentNode && el.parentNode.removeChild(el)
			}
		}
	},
}

export default permission
