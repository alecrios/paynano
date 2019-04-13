<template>
	<div class="landing">
		<LandingInvalid v-if="!addressIsValid"/>

		<div class="sections" v-if="addressIsValid">
			<LandingQRCode :address="address" :deep-link="deepLink"/>
			<LandingAddress :address="address"/>
			<LandingAmount v-if="amount" :amount="amount"/>
			<LandingOpenButton :deep-link="deepLink"/>
		</div>
	</div>
</template>

<script>
import LandingInvalid from '@/components/LandingInvalid.vue';
import LandingAddress from '@/components/LandingAddress.vue';
import LandingAmount from '@/components/LandingAmount.vue';
import LandingQRCode from '@/components/LandingQRCode.vue';
import LandingOpenButton from '@/components/LandingOpenButton.vue';
import addressIsValid from '@/utils/addressIsValid';
import getRawAmount from '@/utils/getRawAmount';

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
.landing {
	.sections > * + * {
		border-top: .125rem dashed $color-gray;
	}
}
</style>
