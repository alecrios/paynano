<template>
	<div
		class="landing-amount"
	>
		<div class="label">Amount:</div>

		<div
			class="amount"
			v-text="`${amount} NANO`"
			title="Click to copy"
			@click="copy"
		/>
	</div>
</template>

<script>
import copy from 'copy-to-clipboard';

export default {
	name: 'LandingAmount',
	props: {
		amount: {
			type: String,
			required: true,
		},
	},
	methods: {
		copy() {
			copy(this.amount);
			this.$notify({type: 'success', text: 'Copied amount to clipboard'});
		},
	},
};
</script>

<style lang="scss" scoped>
.landing-amount {
	@include font-stack-monospace;
	display: flex;
	justify-content: space-between;
	font-size: 1rem;
	line-height: 1.5rem;
	font-weight: 700;
	color: $color-text;
	padding: 1rem 1.5rem;

	.amount {
		text-align: right;
		cursor: pointer;

		&:hover {
			text-decoration: underline;
		}
	}
}
</style>
