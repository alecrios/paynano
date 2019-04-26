<template>
	<div class="landing">
		<BaseContainer class="container">
			<LandingInvalid v-if="!addressIsValid || !amountIsValid"/>

			<div class="sections" v-if="addressIsValid && amountIsValid">
				<LandingQRCode :address="address" :deep-link="deepLink"/>
				<LandingAddress :address="address"/>
				<LandingAmount v-if="amount" :amount="amount"/>
				<LandingOpenButton :deep-link="deepLink"/>
			</div>
		</BaseContainer>
	</div>
</template>

<script>
import addressIsValid from 'nano-address-validator';
import {megaToRaw} from 'nano-unit-converter';
import {getSendURI} from 'nano-uri-generator';
import LandingInvalid from '@/components/LandingInvalid.vue';
import LandingAddress from '@/components/LandingAddress.vue';
import LandingAmount from '@/components/LandingAmount.vue';
import LandingQRCode from '@/components/LandingQRCode.vue';
import LandingOpenButton from '@/components/LandingOpenButton.vue';
import amountIsValid from '@/utils/amountIsValid';

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
		amount() {
			if (this.$route.query === undefined) {
				return undefined;
			}

			if (this.$route.query.amount === undefined) {
				return undefined;
			}

			return this.$route.query.amount;
		},
		addressIsValid() {
			return addressIsValid(this.address);
		},
		amountIsValid() {
			return this.amount === undefined ? true : amountIsValid(this.amount);
		},
		deepLink() {
			const rawAmount = this.amount === undefined ? undefined : megaToRaw(this.amount);
			return getSendURI(this.address, rawAmount);
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
