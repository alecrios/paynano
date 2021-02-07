<template>
	<div>
		<Transition name="fade">
			<SuccessMessage
				v-if="showSuccessMessage"
				@hide="() => showSuccessMessage = false"
			/>
		</Transition>

		<BaseContainer>
			<InvalidRequest v-if="!addressIsValid || !amountIsValid"/>

			<div class="sections" v-if="addressIsValid && amountIsValid">
				<QRDisplay :address="address" :deep-link="deepLink"/>
				<ValueDisplay type="address" :value="address"/>
				<ValueDisplay type="amount" :value="amount" v-if="amount"/>
				<OpenInWalletButton :deep-link="deepLink"/>
			</div>
		</BaseContainer>

		<TheFooter/>
	</div>
</template>

<script>
import addressIsValid from 'nano-address-validator';
import {megaToRaw} from 'nano-unit-converter';
import {getSendURI} from 'nano-uri-generator';
import InvalidRequest from '@/components/InvalidRequest.vue';
import ValueDisplay from '@/components/ValueDisplay.vue';
import QRDisplay from '@/components/QRDisplay.vue';
import OpenInWalletButton from '@/components/OpenInWalletButton.vue';
import SuccessMessage from '@/components/SuccessMessage.vue';
import TheFooter from '@/components/TheFooter.vue';
import amountIsValid from '@/utils/amountIsValid';

export default {
	name: 'PaymentView',
	components: {
		InvalidRequest,
		ValueDisplay,
		QRDisplay,
		OpenInWalletButton,
		SuccessMessage,
		TheFooter,
	},
	data() {
		return {
			showSuccessMessage: this.$route.params.showSuccessMessage,
		};
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
.sections > * + * {
	border-top: .125rem dashed $color-quartz;
}
</style>
