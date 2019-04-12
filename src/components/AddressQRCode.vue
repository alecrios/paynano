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
		deepLink: {
			type: String,
			required: true,
		},
	},
	data() {
		return {
			svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45"></svg>',
		};
	},
	async created() {
		this.svg = await QRCode.toString(this.deepLink, {type: 'svg'});
	},
};
</script>

<style lang="scss" scoped>

</style>
