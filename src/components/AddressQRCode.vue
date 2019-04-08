<template>
	<div v-html="svg"/>
</template>

<script>
import QRCode from 'qrcode';

export default {
	name: 'AddressQRCode',
	props: {
		address: {
			type: String,
			required: true,
		},
	},
	data() {
		return {
			svg: null,
		};
	},
	methods: {
		async getSvg() {
			this.svg = await QRCode.toString(this.address, {type: 'svg'});
		},
	},
	created() {
		this.getSvg();
	},
};
</script>

<style scoped>

</style>
