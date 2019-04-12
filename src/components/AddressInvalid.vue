<template>
	<div class="address-invalid">
		<p>Sorry, this URL does not contain a valid address.</p>
	</div>
</template>

<script>
export default {
	name: 'AddressInvalid',
};
</script>

<style lang="scss" scoped>
.address-invalid {
	padding: 1.5rem;
	text-align: center;
	font-size: 1rem;
	line-height: 1.5rem;
	color: $color-text;
}
</style>
