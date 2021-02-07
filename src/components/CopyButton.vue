<template>
	<button
		class="copy-button"
		:title="`Copy ${name}`"
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
	methods: {
		copy() {
			copy(this.text)
				? this.$notify({type: 'success', text: `Copied ${this.name} to clipboard`})
				: this.$notify({type: 'error', text: `Failed to copy ${this.name} to clipboard`});
		},
	},
};
</script>

<style lang="scss" scoped>
.copy-button {
	@include font-stack-sans-serif;
	font-size: .75rem;
	line-height: 1rem;
	text-transform: uppercase;
	letter-spacing: .0625rem;
	font-weight: 700;
	background-color: $color-yellow;
	color: $color-orange;
	border-radius: .25rem;
	padding: .125rem .5rem;
	cursor: pointer;

	&:hover {
		background-color: $color-yellow-hover;
		color: $color-orange-hover;
	}
}
</style>
