<template>
	<div class="landing">
		<BaseContainer class="container">
			<LandingInvalid v-if="!addressIsValid"/>

			<div class="sections" v-if="addressIsValid">
				<LandingQRCode :address="address" :deep-link="deepLink"/>
				<LandingAddress :address="address"/>
				<LandingAmount v-if="amount" :amount="amount"/>
				<LandingOpenButton :deep-link="deepLink"/>
			</div>
		</BaseContainer>
	</div>
</template>

<script>
import NanoAddressValidator from 'nano-address-validator';
import LandingInvalid from '@/components/LandingInvalid.vue';
import LandingAddress from '@/components/LandingAddress.vue';
import LandingAmount from '@/components/LandingAmount.vue';
import LandingQRCode from '@/components/LandingQRCode.vue';
import LandingOpenButton from '@/components/LandingOpenButton.vue';
import getRawAmount from '@/utils/getRawAmount';

const addressValidator = new NanoAddressValidator();

export default {
	name: 'Landing',
	components: {
		LandingInvalid,
		LandingAddress,
		LandingAmount,
		LandingQRCode,
		LandingOpenButton,
	},
	computed: {
		address() {
			return this.$route.params.address;
		},
		addressIsValid() {
			return addressValidator.isValid(this.address);
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
.container {
	.sections > * + * {
		border-top: .125rem dashed $color-gray;
	}
}
</style>
