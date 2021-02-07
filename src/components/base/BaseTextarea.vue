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
	height: 7.5rem;
	resize: none;
	padding: .75rem 1rem;
	background-color: $color-pearl;
	border-radius: .25rem;
	background-color: $color-quartz;
	font-weight: 600;
	font-size: 1rem;
	line-height: 1.5rem;
	color: $color-stone;
}
</style>
