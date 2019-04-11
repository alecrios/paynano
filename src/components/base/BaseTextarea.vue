<template>
	<textarea
		class="textarea"
		:id="id"
		:placeholder="placeholder"
		:value="value"
		@input="$emit('input', $event.target.value)"
	/>
</template>

<script>
export default {
	name: 'BaseTextarea',
	props: {
		id: {
			type: String,
			required: true,
		},
		placeholder: {
			type: String,
			default: '',
		},
		value: {
			type: String,
			required: true,
		},
	},
};
</script>

<style lang="scss" scoped>
.textarea {
	width: 100%;
	height: 5.5rem;
	padding: .5rem 1rem;
	background-color: $color-base;
	border-radius: .25rem;
	background-color: $color-gray;
	font-family: 'Roboto Mono';
	font-weight: 700;
	font-size: 1rem;
	line-height: 1.5rem;
	color: $color-text;
	resize: none;
}
</style>
