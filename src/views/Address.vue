<template>
	<div class="address">
		<AddressInvalid v-if="!addressIsValid"/>

		<div v-if="addressIsValid">
			<AddressQRCode :address="address"/>
			<AddressDisplay :address="address"/>
			<AddressCopyButton :address="address"/>
		</div>
	</div>
</template>

<script>
import AddressInvalid from '@/components/AddressInvalid.vue';
import AddressDisplay from '@/components/AddressDisplay.vue';
import AddressQRCode from '@/components/AddressQRCode.vue';
import AddressCopyButton from '@/components/AddressCopyButton.vue';

export default {
	name: 'Address',
	components: {
		AddressInvalid,
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
.address {
	border-radius: .5rem;
	overflow: hidden;
	background-color: hsla(225, 6.25%, 100%, 1);
	box-shadow: 0 .75rem 1.5rem 0 hsla(225, 6.25%, 0%, .125);
}
</style>
