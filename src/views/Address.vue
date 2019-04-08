<template>
	<div>
		<QRCode :address="address"/>
	</div>
</template>

<script>
import QRCode from '@/components/QRCode.vue';

export default {
	name: 'Address',
	components: {
		QRCode,
	},
	computed: {
		address() {
			return this.$route.params.address;
		},
	},
};
</script>

<style scoped>

</style>
