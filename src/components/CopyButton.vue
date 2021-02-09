<template>
	<button
		class="copy-button"
		:title="`Copy ${lowercaseName}`"
		@click="copy"
		v-text="'Copy'"
	/>
</template>

<script>
import copy from 'copy-to-clipboard';

export default {
	name: 'CopyButton',
	props: {
		text: {
			type: String,
			required: true,
		},
		name: {
			type: String,
			required: true,
		},
	},
	computed: {
		lowercaseName() {
			return this.name.toLowerCase();
		},
	},
	methods: {
		copy() {
			copy(this.text)
				? this.$notify({
					type: 'success',
					text: `Copied ${this.lowercaseName} to clipboard`,
				})
				: this.$notify({
					type: 'error',
					text: `Failed to copy ${this.lowercaseName} to clipboard`,
				});
		},
	},
};
</script>

<style lang="scss" scoped>
.copy-button {
	font-size: .75rem;
	line-height: 1rem;
	text-transform: uppercase;
	letter-spacing: .015625rem;
	font-weight: 700;
	background-color: $color-champagne;
	color: $color-orange;
	border-radius: .25rem;
	padding: .125rem .5rem;
	cursor: pointer;

	&:hover {
		background-color: $color-champagne-hover;
		color: $color-orange-hover;
	}
}
</style>
