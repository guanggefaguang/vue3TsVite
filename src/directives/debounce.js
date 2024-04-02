// 防抖指令
export default {
	mounted (el, binding) {
		// 如果不是函数或者不是事件直接返回
		if (typeof binding.value.fn !== "function" || !binding.value.event) return;
		// 默认的延迟时间
		let delay = 400;
		el.timer = null;
		// console.log('多次执行')
		el.handler = function () {
			if (el.timer) {
				clearTimeout(el.timer);
			}
			el.timer = setTimeout(() => {
				binding.value.fn.apply(this, arguments);
			}, binding.value.delay || delay);
		};
		el.addEventListener(binding.value.event, el.handler);
	},
	// 元素卸载前清理定需要清除:延时器并且移除监听事件
	beforeUnmount (el, binding) {
		// console.log(el, '即将卸载');
		if (el.timer) {
			el.timer = null;
			clearTimeout(el.timer);
		}
		el.removeEventListener(binding.value.event, el.handler);
	},
}
