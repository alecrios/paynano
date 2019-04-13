<template>
	<div class="landing-open-button">
		<a
			class="button"
			v-text="'Open in Wallet'"
			:href="deepLink"
		/>
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
}

.button {
	@include button;
}
</style>
