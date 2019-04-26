<template>
	<div class="landing-invalid">
		<p>
			Sorry, this URL does not contain a valid payment request.
			Either the address or the amount is invalid.
		</p>
	</div>
</template>

<script>
export default {
	name: 'LandingInvalid',
};
</script>

<style lang="scss" scoped>
.landing-invalid {
	padding: 1.5rem;
	text-align: center;
	font-size: 1rem;
	line-height: 1.5rem;
	color: $color-text;
}
</style>
