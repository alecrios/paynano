<template>
	<div class="address-copy-button">
		<button
			class="button"
			@click="copy"
			v-text="'Copy Address'"
		/>
	</div>
</template>

<script>
import copy from 'copy-to-clipboard';

export default {
	name: 'AddressCopyButton',
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
.address-copy-button {
	padding: 1.5rem;
}

.button {
	padding: .75rem 1.5rem;
	background-color: black;
	color: white;
	width: 100%;
	border-radius: .5rem;
	font-weight: 700;
	letter-spacing: .03125rem;
	cursor: pointer;
}
</style>
