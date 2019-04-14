<template>
	<footer class="footer">
		<RouterLink
			v-if="$route.path !== '/'"
			to="/"
			class="link"
			v-text="'Create Link'"
		/>

		<a
			href="https://nano.org/"
			class="link"
			target="_blank"
			rel="noopener"
			v-text="'About Nano'"
		/>

		<a
			href="https://mynano.link/nano_3xk9wwjp89uod6gfwf775ctuibi4nybm4txi3gax3if1smun6hk57xxr6jnu"
			class="link"
			target="_blank"
			rel="noopener"
			v-text="'Donate'"
		/>
	</footer>
</template>

<script>
export default {
	name: 'TheFooter',
};
</script>

<style lang="scss" scoped>
.footer {
	display: flex;
	justify-content: center;
	margin-top: 1.5rem;

	.link {
		font-size: .75rem;
		line-height: 1.125rem;
		font-weight: 500;
		color: $color-text-lighter;

		&:hover {
			text-decoration: underline;
		}
	}

	.link + .link {
		margin-left: 1.5rem;
	}
}
</style>
