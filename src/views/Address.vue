<template>
	<div class="address">
		<AddressInvalid v-if="!addressIsValid"/>

		<div class="sections" v-if="addressIsValid">
			<AddressQRCode :address="address" :deep-link="deepLink"/>
			<AddressDisplay :address="address"/>
			<AddressAmount v-if="amount" :amount="amount"/>
			<AddressOpenButton :deep-link="deepLink"/>
		</div>
	</div>
</template>

<script>
import AddressInvalid from '@/components/AddressInvalid.vue';
import AddressDisplay from '@/components/AddressDisplay.vue';
import AddressAmount from '@/components/AddressAmount.vue';
import AddressQRCode from '@/components/AddressQRCode.vue';
import AddressOpenButton from '@/components/AddressOpenButton.vue';
import addressIsValid from '@/utils/addressIsValid';
import getRawAmount from '@/utils/getRawAmount';

export default {
	name: 'Address',
	components: {
		AddressInvalid,
		AddressDisplay,
		AddressAmount,
		AddressQRCode,
		AddressOpenButton,
	},
	computed: {
		address() {
			return this.$route.params.address;
		},
		addressIsValid() {
			return addressIsValid(this.address);
		},
		amount() {
			if (!this.$route.query) {
				return null;
			}

			return this.$route.query.amount;
		},
		deepLink() {
			let deepLink = `nano:${this.address}`;

			if (this.amount) {
				deepLink += `?amount=${getRawAmount(this.amount)}`;
			}

			return deepLink;
		},
	},
};
</script>

<style lang="scss" scoped>
.address {
	.sections > * + * {
		border-top: .125rem dashed $color-gray;
	}
}
</style>
