<template>
	<button @click="copy">Copy Address</button>
</template>

<script>
import copy from 'copy-to-clipboard';

export default {
	name: 'CopyAddressButton',
	props: {
		address: {
			type: String,
			required: true,
		},
	},
	methods: {
		copy() {
			copy(this.address);
		},
	},
};
</script>

<style scoped>

</style>
