<template>
	<div :class="['container', width]">
		<slot/>
	</div>
</template>

<script>
export default {
	name: 'BaseContainer',
	props: {
		width: {
			type: String,
			default: 'regular',
		},
	},
};
</script>

<style lang="scss">
.container {
	position: relative;
	max-width: 17rem;
	margin: 0 auto;
	border-radius: .5rem;
	background-color: $color-pearl;
	box-shadow: $box-shadow-large;

	&.wide {
		max-width: 20rem;
	}
}
</style>
