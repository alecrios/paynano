<template>
	<div class="qr-code">
		<img
			v-if="png"
			:src="png"
			alt="QR Code"
			width="224"
			height="224"
		>
	</div>
</template>

<script>
import QRCode from 'qrcode';

export default {
	name: 'LandingQRCode',
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
			png: '',
		};
	},
	async created() {
		this.png = await QRCode.toDataURL(this.deepLink, {
			type: 'png',
			width: 224,
			margin: 0,
		});
	},
};
</script>

<style lang="scss" scoped>
.qr-code {
	width: 17rem;
	height: 17rem;
	display: flex;
	align-items: center;
	justify-content: center;
}
</style>
