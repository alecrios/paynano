<template>
	<div>
		<AddressDisplay :address="address"/>
		<QRCode :address="address"/>
		<CopyAddressButton :address="address"/>
	</div>
</template>

<script>
import AddressDisplay from '@/components/AddressDisplay.vue';
import QRCode from '@/components/QRCode.vue';
import CopyAddressButton from '@/components/CopyAddressButton.vue';

export default {
	name: 'Address',
	components: {
		AddressDisplay,
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
