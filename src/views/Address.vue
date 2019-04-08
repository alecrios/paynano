<template>
	<div>
		<AddressDisplay :address="address"/>
		<AddressQRCode :address="address"/>
		<AddressCopyButton :address="address"/>
	</div>
</template>

<script>
import AddressDisplay from '@/components/AddressDisplay.vue';
import AddressQRCode from '@/components/AddressQRCode.vue';
import AddressCopyButton from '@/components/AddressCopyButton.vue';

export default {
	name: 'Address',
	components: {
		AddressDisplay,
		AddressQRCode,
		AddressCopyButton,
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
