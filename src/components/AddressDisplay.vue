<template>
	<div>{{ address }}</div>
</template>

<script>
export default {
	name: 'AddressDisplay',
	props: {
		address: {
			type: String,
			required: true,
		},
	},
};
</script>

<style scoped>

</style>
