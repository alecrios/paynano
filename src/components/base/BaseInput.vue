<template>
	<input
		class="input"
		:id="id"
		:type="type"
		:placeholder="placeholder"
		:value="value"
		@input="$emit('input', $event.target.value)"
	>
</template>

<script>
export default {
	name: 'BaseInput',
	props: {
		id: {
			type: String,
			required: true,
		},
		type: {
			type: String,
			default: 'text',
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
.input {
	width: 100%;
	padding: .75rem 1rem;
	background-color: $color-pearl;
	border-radius: .25rem;
	background-color: $color-quartz;
	font-weight: 700;
	font-size: 1rem;
	line-height: 1.5rem;
	color: $color-stone;
}
</style>
