<template>
	<button
		type="button"
		:class="['button', theme]"
		v-text="text"
		@click="$emit('click')"
	/>
</template>

<script>
export default {
	name: 'BaseButton',
	props: {
		text: {
			type: String,
			required: true,
		},
		theme: {
			type: String,
			default: 'primary',
		},
	},
};
</script>

<style lang="scss" scoped>
.button {
	@include button;
}
</style>
