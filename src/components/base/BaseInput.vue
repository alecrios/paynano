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
	@include input;
}
</style>
