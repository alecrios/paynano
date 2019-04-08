<template>
	<div>
		<div v-if="!addressIsValid">
			Invalid address
		</div>

		<div v-if="addressIsValid">
			<AddressDisplay :address="address"/>
			<AddressQRCode :address="address"/>
			<AddressCopyButton :address="address"/>
		</div>
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
		addressIsValid() {
			return /^((nano)|(xrb))_[13456789abcdefghijkmnopqrstuwxyz]{60}$/.test(this.address);
		},
	},
};
</script>

<style scoped>

</style>
