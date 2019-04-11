<template>
	<div
		class="address-qr-code"
		title="Click to copy"
		v-html="svg"
		@click="copyAddress"
	/>
</template>

<script>
import copy from 'copy-to-clipboard';
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
			svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45"></svg>',
		};
	},
	methods: {
		copyAddress() {
			copy(this.address);
			this.$notify({type: 'success', text: 'Copied address to clipboard'});
		},
	},
	async created() {
		this.svg = await QRCode.toString(this.address, {type: 'svg'});
	},
};
</script>

<style lang="scss" scoped>
.address-qr-code {
	cursor: pointer;
}
</style>
