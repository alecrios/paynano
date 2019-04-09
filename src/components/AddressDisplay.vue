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
	padding: 0 1.5rem;
	font-family: 'Roboto Mono';
	font-weight: 700;
	font-size: 1rem;
	line-height: 1.5rem;
	color: var(--color-text);
}
</style>
