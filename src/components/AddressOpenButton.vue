<template>
	<div class="address-open-button">
		<a
			class="button"
			v-text="'Open in Wallet'"
			:href="deepLink"
		/>
	</div>
</template>

<script>
export default {
	name: 'AddressOpenButton',
	props: {
		deepLink: {
			type: String,
			required: true,
		},
	},
};
</script>

<style lang="scss" scoped>
.address-open-button {
	padding: 1.5rem;
}

.button {
	@include button;
}
</style>
