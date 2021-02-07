<template>
	<div
		class="landing-address"
	>
		<span
			class="address"
			v-text="address"
			title="Click to copy"
			@click="copy"
		/>
	</div>
</template>

<script>
import copy from 'copy-to-clipboard';

export default {
	name: 'LandingAddress',
	props: {
		address: {
			type: String,
			required: true,
		},
	},
	methods: {
		copy() {
			copy(this.address)
				? this.$notify({type: 'success', text: 'Copied address to clipboard'})
				: this.$notify({type: 'error', text: 'Failed to copy address to clipboard'});
		},
	},
};
</script>

<style lang="scss" scoped>
.landing-address {
	padding: 1rem 1.5rem;

	.address {
		@include font-stack-monospace;
		word-break: break-all;
		font-weight: 700;
		font-size: 1rem;
		line-height: 1.5rem;
		color: $color-text;
		cursor: pointer;

		&:hover {
			text-decoration: underline;
		}
	}
}
</style>
