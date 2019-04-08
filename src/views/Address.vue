<template>
	<div>
		<QRCode :address="address"/>
		<CopyAddressButton :address="address"/>
	</div>
</template>

<script>
import QRCode from '@/components/QRCode.vue';
import CopyAddressButton from '@/components/CopyAddressButton.vue';

export default {
	name: 'Address',
	components: {
		QRCode,
		CopyAddressButton,
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
