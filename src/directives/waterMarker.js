/*
	需求：给整个页面添加背景水印。
		1、使用 canvas 特性生成 base64 格式的图片文件，设置其字体大小，颜色等。
		2、将其设置为背景图片，从而实现页面或组件水印效果
	使用：设置水印文案，颜色，字体大小即可
	<div v-waterMarker="{text:'测试水印',textColor:'rgba(180, 180, 180, 0.4)'}"></div>
*/
const addWaterMarker = (str, parentNode, font, textColor) => {
	const can = document.createElement('canvas');
	parentNode.appendChild(can);
	can.width = 200;
	can.height = 150;
	can.style.display = 'none';
	const cans = can.getContext('2d');
	cans.rotate((-20 * Math.PI) / 180);
	cans.font = font || '16px Microsoft JhengHei';
	cans.fillStyle = textColor || 'rgba(180, 180, 180, 0.3)';
	cans.textAlign = 'left';
	cans.textBaseline = 'Middle';
	cans.fillText(str, can.width / 10, can.height / 2);
	parentNode.style.backgroundImage = `url(${can.toDataURL('image/png')})`;
};

const waterMarkerDirective = {
	mounted: (el, binding) => {
		addWaterMarker(binding.value.text, el, binding.value.font, binding.value.textColor);
	},
};

export default waterMarkerDirective
