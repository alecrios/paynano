<template>
	<div class="address-display">
		<div class="heading">
			<span class="label" v-text="'Address'"/>
			<CopyButton :text="address" name="address"/>
		</div>

		<div class="address" v-text="address"/>
	</div>
</template>

<script>
import CopyButton from '@/components/CopyButton.vue';

export default {
	name: 'AddressDisplay',
	components: {
		CopyButton,
	},
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

	.address {
		font-weight: 600;
		font-size: 1rem;
		line-height: 1.25rem;
		color: $color-stone;
		margin-top: .75rem;
		word-break: break-all;
	}
}
</style>
