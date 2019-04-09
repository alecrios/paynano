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
	background-color: hsl(212, 72%, 59%);
	color: white;
	width: 100%;
	border-radius: .25rem;
	font-weight: 600;
	letter-spacing: .03125rem;
	cursor: pointer;
	transition: background-color 125ms ease;
}

.button:hover {
	background-color: hsl(212, 72%, 51%);
}
</style>
