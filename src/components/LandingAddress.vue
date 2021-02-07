<template>
	<div class="landing-address">
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
	name: 'LandingAddress',
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
.landing-address {
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

	.address {
		font-weight: 500;
		font-size: 1rem;
		line-height: 1.25rem;
		color: $color-text;
		margin-top: .75rem;
		word-break: break-all;
	}
}
</style>
