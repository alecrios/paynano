<template>
	<div>
		{{ address }}
	</div>
</template>

<script>
export default {
	name: 'Address',
	computed: {
		address() {
			return this.$route.params.address;
		},
	},
};
</script>

<style scoped>

</style>
