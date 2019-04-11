<template>
	<div
		class="address-display"
		v-text="address"
	/>
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

<style lang="scss" scoped>
.address-display {
	word-break: break-all;
	padding: 0 1.5rem;
	font-family: 'Roboto Mono';
	font-weight: 700;
	font-size: 1rem;
	line-height: 1.5rem;
	color: $color-text;
}
</style>
