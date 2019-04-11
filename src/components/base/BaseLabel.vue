<template>
	<label
		class="label"
		:for="inputId"
		v-text="text"
	/>
</template>

<script>
export default {
	name: 'BaseLabel',
	props: {
		inputId: {
			type: String,
			required: true,
		},
		text: {
			type: String,
			required: true,
		},
	},
};
</script>

<style lang="scss" scoped>
.label {
	display: block;
	font-size: .875rem;
	line-height: .875rem;
	font-weight: 700;
	color: $color-text;
	margin-bottom: .5rem;
}
</style>
