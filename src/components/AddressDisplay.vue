<template>
	<div class="address-display">{{ address }}</div>
</template>

<script>
export default {
	name: 'AddressDisplay',
	props: {
		address: {
			type: String,
			required: true,
		},
	},
};
</script>

<style scoped>
.address-display {
	word-break: break-all;
	font-family: monospace;
	padding: 1.5rem;
}
</style>
