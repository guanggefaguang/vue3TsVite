// 实现文字左右出现横线，用于title文本使用
const striping = {
	beforeMount (el) {
		const stripLeft = document.createElement('div')
		const stripRight = document.createElement('div')
		stripLeft.style.position = 'absolute'
		stripLeft.style.width = '9.89vw'
		stripLeft.style.height = '1px'
		stripLeft.style.backgroundColor = '#737e91'
		stripLeft.style.left = '35%'
		stripLeft.style.top = '50%'
		stripLeft.style.transform = 'translate(-35%, -50%)'
		stripRight.style.position = 'absolute'
		stripRight.style.width = '9.89vw'
		stripRight.style.height = '1px'
		stripRight.style.backgroundColor = '#737e91'
		stripRight.style.right = '35%'
		stripRight.style.top = '50%'
		stripRight.style.transform = 'translate(35%, -50%)'
		el.appendChild(stripLeft)
		el.appendChild(stripRight)
	},
}

export default striping

