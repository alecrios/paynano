<template>
	<div class="container">
		<slot></slot>
	</div>
</template>

<script>
export default {
	name: 'BaseContainer',
};
</script>

<style lang="scss">
.container {
	border-radius: .5rem;
	overflow: hidden;
	background-color: $color-base;
	box-shadow: $box-shadow-large;
}
</style>
