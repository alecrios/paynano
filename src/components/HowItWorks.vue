<template>
	<div class="intro">
		<h2>How does it work?</h2>

		<p>
			To request a Nano payment, fill out the form above, then hand out the link to the
			resulting page where users can pay via QR code, deep link, or copy/paste. See an
			<RouterLink
				:to="donateLink"
				class="link"
				v-text="'example link'"
			/>.
		</p>
	</div>
</template>

<script>
export default {
	name: 'HowItWorks',
};
</script>

<style lang="scss" scoped>
.intro {
	text-align: center;
	max-width: 17rem;
	margin: 0 auto;
	margin-top: .75rem;
	padding: 1.5rem 0;
}
</style>
