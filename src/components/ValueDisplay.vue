<template>
	<div class="value-display">
		<div class="heading">
			<span class="label" v-text="valueName"/>
			<CopyButton :text="value" :name="valueName"/>
		</div>

		<div v-if="type === 'address'" class="address-value" v-text="value"/>

		<div v-if="type === 'amount'" class="amount-value">
			<span class="nano-value">
				{{ value }} <span class="unit" v-text="'NANO'"/>
			</span>

			<span v-if="fiatValue" class="fiat-value">
				<span>(≈{{ fiatSymbol }}{{ fiatValue }} <span class="unit" v-text="fiatName"/>)</span>
			</span>
		</div>
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
	data() {
		return {
			fiatSymbol: '',
			fiatValue: 0,
			fiatName: '',
		};
	},
	computed: {
		valueName() {
			return VALUE_NAMES[this.type];
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

	.address-value {
		font-weight: 600;
		font-size: 1rem;
		line-height: 1.25rem;
		color: $color-stone;
		margin-top: .75rem;
		word-break: break-all;
	}

	.amount-value {
		font-weight: 600;
		font-size: 1rem;
		line-height: 1.25rem;
		color: $color-stone;
		margin-top: .75rem;
	}

	.nano-value {
		display: inline-block;
		margin-right: .75rem;

		.unit {
			font-size: .75rem;
			font-weight: 700;
			letter-spacing: .015625rem;
		}
	}

	.fiat-value {
		display: inline-block;
		font-weight: 400;
		color: $color-stone-lightest;

		.unit {
			font-size: .75rem;
			font-weight: 500;
			letter-spacing: .015625rem;
		}
	}
}
</style>
