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
		address: {
			type: String,
			required: true,
		},
	},
	computed: {
		deepLink() {
			return `nano:${this.address}`;
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
