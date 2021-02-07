<template>
	<div class="amount-display">
		<div class="heading">
			<span class="label" v-text="'Amount'"/>
			<CopyButton :text="amount" name="amount"/>
		</div>

		<div class="amount" v-text="`${amount} NANO`"/>
	</div>
</template>

<script>
import CopyButton from '@/components/CopyButton.vue';

export default {
	name: 'AmountDisplay',
	components: {
		CopyButton,
	},
	props: {
		amount: {
			type: String,
			required: true,
		},
	},
};
</script>

<style lang="scss" scoped>
.amount-display {
	padding: 1rem 1.5rem;

	.heading {
		display: flex;
		justify-content: space-between;
	}

	.label {
		font-size: 1rem;
		line-height: 1.5rem;
		font-weight: 700;
		color: $color-text;
	}

	.amount {
		font-weight: 500;
		font-size: 1rem;
		line-height: 1.25rem;
		color: $color-text;
		margin-top: .75rem;
		word-break: break-all;
	}
}
</style>
