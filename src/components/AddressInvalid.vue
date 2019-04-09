<template>
	<div class="address-invalid">
		<p>Sorry, this URL does not contain a valid Nano address.</p>
	</div>
</template>

<script>
export default {
	name: 'AddressInvalid',
};
</script>

<style scoped>
.address-invalid {
	padding: 1.5rem;
	text-align: center;
	font-size: 1rem;
	line-height: 1.5rem;
	font-weight: 400;
	color: var(--color-text);
}
</style>
