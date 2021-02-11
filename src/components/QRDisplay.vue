<template>
	<div class="qr-display">
		<img
			v-if="png"
			:src="png"
			alt="QR Code"
			:width="size"
			:height="size"
		>
	</div>
</template>

<script>
import QRCode from 'qrcode';

export default {
	name: 'QRDisplay',
	props: {
		address: {
			type: String,
			required: true,
		},
		deepLink: {
			type: String,
			required: true,
		},
	},
	data() {
		return {
			size: 224,
			png: '',
		};
	},
	async created() {
		this.png = await QRCode.toDataURL(this.deepLink, {
			type: 'png',
			width: this.size,
			margin: 0,
		});
	},
};
</script>

<style lang="scss" scoped>
.qr-display {
	width: 17rem;
	height: 17rem;
	display: flex;
	align-items: center;
	justify-content: center;
}
</style>
