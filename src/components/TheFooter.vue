<template>
	<footer class="footer">
		<a
			href="https://nano.org/"
			class="link"
			target="_blank"
			rel="noopener"
			v-text="'About Nano'"
		/>

		<RouterLink
			:to="donateLink"
			class="link"
			v-text="'Donate'"
		/>

		<a
			href="https://alecrios.com/contact/"
			class="link"
			target="_blank"
			rel="noopener"
			v-text="'Send feedback'"
		/>
	</footer>
</template>

<script>
import CONSTANTS from '@/constants';

export default {
	name: 'TheFooter',
	data() {
		return {
			donateLink: `/${CONSTANTS.DONATE_ADDRESS}`,
		};
	},
};
</script>

<style lang="scss" scoped>
.footer {
	display: flex;
	justify-content: center;
	max-width: 17rem;
	margin: 0 auto;
	margin-top: 1rem;

	.link {
		font-size: .75rem;
		line-height: 1.25rem;
		font-weight: 500;
		color: $color-stone-lighter;

		&:hover {
			text-decoration: underline;
		}
	}

	.link + .link {
		margin-left: 1.5rem;
	}
}
</style>
