<template>
	<div class="address">
		<AddressInvalid v-if="!addressIsValid"/>

		<div v-if="addressIsValid">
			<AddressQRCode :address="address"/>
			<AddressDisplay :address="address"/>
			<AddressOpenButton :address="address"/>
		</div>
	</div>
</template>

<script>
import AddressInvalid from '@/components/AddressInvalid.vue';
import AddressDisplay from '@/components/AddressDisplay.vue';
import AddressQRCode from '@/components/AddressQRCode.vue';
import AddressOpenButton from '@/components/AddressOpenButton.vue';
import addressIsValid from '@/utils/addressIsValid';

export default {
	name: 'Address',
	components: {
		AddressInvalid,
		AddressDisplay,
		AddressQRCode,
		AddressOpenButton,
	},
	computed: {
		address() {
			return this.$route.params.address;
		},
	},
	methods: {
		addressIsValid,
	},
};
</script>

<style lang="scss" scoped>
.address {
	border-radius: .5rem;
	overflow: hidden;
	background-color: $color-base;
	box-shadow: 0 .75rem 1.5rem 0 hsla(225, 6.25%, 0%, .125);
}
</style>
