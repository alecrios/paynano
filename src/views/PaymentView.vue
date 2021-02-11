<template>
	<div>
		<Transition name="fade">
			<InlineModal
				v-if="showSuccessModal"
				@hide="() => showSuccessModal = false"
				action-text="Copy link"
				@action="copyLink"
			>
				<h1>Success!</h1>

				<p>This is your Nano payment page!<br>Send the link to request Nano.</p>
			</InlineModal>
		</Transition>

		<InlineModal
			v-if="!addressIsValid || !amountIsValid"
			:is-dismissable="false"
			action-text="Go home"
			@action="goHome"
		>
			<h1>Invalid Payment Request</h1>

			<p>
				Sorry, this URL does not contain a valid payment request. Something must be wrong with the
				address or the amount.
			</p>
		</InlineModal>

		<BaseContainer>
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
import copy from 'copy-to-clipboard';
import addressIsValid from 'nano-address-validator';
import {megaToRaw} from 'nano-unit-converter';
import {getSendURI} from 'nano-uri-generator';
import ValueDisplay from '@/components/ValueDisplay.vue';
import QRDisplay from '@/components/QRDisplay.vue';
import OpenInWalletButton from '@/components/OpenInWalletButton.vue';
import InlineModal from '@/components/InlineModal.vue';
import TheFooter from '@/components/TheFooter.vue';
import amountIsValid from '@/utils/amountIsValid';

export default {
	name: 'PaymentView',
	components: {
		ValueDisplay,
		QRDisplay,
		OpenInWalletButton,
		InlineModal,
		TheFooter,
	},
	data() {
		return {
			showSuccessModal: this.$route.params.showSuccessModal,
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
	methods: {
		copyLink() {
			copy(window.location.href)
				? this.$notify({type: 'success', text: 'Copied link to clipboard'})
				: this.$notify({type: 'error', text: 'Failed to copy link to clipboard'});
		},
		goHome() {
			this.$router.push({name: 'HomeView'});
		},
	},
};
</script>

<style lang="scss" scoped>
.sections > * + * {
	border-top: .125rem dashed $color-quartz;
}
</style>
