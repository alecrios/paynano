<template>
	<div class="landing-open-button">
		<a
			class="button"
			v-text="'Open in Wallet'"
			:href="deepLink"
		/>

		<div class="note">* Not supported by all wallets</div>
	</div>
</template>

<script>
export default {
	name: 'LandingOpenButton',
	props: {
		deepLink: {
			type: String,
			required: true,
		},
	},
};
</script>

<style lang="scss" scoped>
.landing-open-button {
	padding: 1.5rem;

	.button {
		@include button;
	}

	.note {
		margin-top: .5rem;
		text-align: center;
		font-size: .75rem;
		line-height: .75rem;
		font-style: italic;
		color: $color-text-lighter;
	}
}
</style>
