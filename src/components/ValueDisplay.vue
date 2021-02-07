<template>
	<div class="value-display">
		<div class="heading">
			<span class="label" v-text="valueName"/>
			<CopyButton :text="value" :name="valueName"/>
		</div>

		<div class="value" v-text="valueText"/>
	</div>
</template>

<script>
import CopyButton from '@/components/CopyButton.vue';

const VALUE_NAMES = {
	address: 'Address',
	amount: 'Amount',
};

export default {
	name: 'ValueDisplay',
	components: {
		CopyButton,
	},
	props: {
		type: {
			validator: (value) => Object.keys(VALUE_NAMES).includes(value),
		},
		value: {
			type: String,
			required: true,
		},
	},
	computed: {
		valueName() {
			return VALUE_NAMES[this.type];
		},
		valueText() {
			return this.type === 'amount' ? `${this.value} NANO` : this.value;
		},
	},
};
</script>

<style lang="scss" scoped>
.value-display {
	padding: 1rem 1.5rem;

	.heading {
		display: flex;
		justify-content: space-between;
	}

	.label {
		font-size: 1rem;
		line-height: 1.5rem;
		font-weight: 700;
		color: $color-stone;
	}

	.value {
		font-weight: 600;
		font-size: 1rem;
		line-height: 1.25rem;
		color: $color-stone;
		margin-top: .75rem;
		word-break: break-all;
	}
}
</style>
