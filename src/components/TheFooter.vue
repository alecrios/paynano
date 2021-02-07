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
			:href="donateLink"
			class="link"
			target="_blank"
			rel="noopener"
			v-text="'Donate'"
		/>
	</footer>
</template>

<script>
import CONSTANTS from '@/constants';

export default {
	name: 'TheFooter',
	data() {
		return {
			donateLink: CONSTANTS.DONATE_LINK,
		};
	},
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
