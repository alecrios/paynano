<template>
	<label class="label" :for="inputId">
		<span>{{ text }}</span>
		<span class="note" v-if="note">({{ note }})</span>
	</label>
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
		note: {
			type: String,
			default: '',
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
	color: $color-stone;
	margin-bottom: .5rem;

	> .note {
		color: $color-stone-lighter;
		font-size: .75rem;
		font-weight: 500;
		margin-left: .5rem;
	}
}
</style>
