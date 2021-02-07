<template>
	<div>
		<BaseContainer
			v-if="showSuccessMessage"
			width="wide"
			class="success-message"
		>
			<div class="text">
				<h2>Payment page created!</h2>
				<p>This is your Nano payment page! Send the link to request Nano.</p>
			</div>

			<div class="actions">
				<BaseButton
					text="Copy link"
					@click="copyLink"
					theme="primary"
					size="small"
				/>

				<BaseButton
					text="Dismiss"
					@click="showSuccessMessage = false"
					theme="secondary"
					size="small"
				/>
			</div>
		</BaseContainer>

		<BaseContainer>
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
import copy from 'copy-to-clipboard';
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
	name: 'PaymentView',
	components: {
		LandingInvalid,
		LandingAddress,
		LandingAmount,
		LandingQRCode,
		LandingOpenButton,
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
	methods: {
		copyLink() {
			copy(window.location.href)
				? this.$notify({type: 'success', text: 'Copied link to clipboard'})
				: this.$notify({type: 'error', text: 'Failed to copy link to clipboard'});
		},
	},
};
</script>

<style lang="scss" scoped>
.success-message {
	margin-bottom: 1.5rem;
	padding: 1.5rem;

	h2 {
		font-size: 1rem;
		line-height: 1.5rem;
		font-weight: 700;
		text-align: center;
		margin-bottom: .75rem;
	}

	p {
		font-size: .875rem;
		line-height: 1.5rem;
		font-weight: 500;
	}

	.actions {
		display: flex;
		margin-top: 1.5rem;

		> * + * {
			margin-left: .75rem;
		}
	}
}

.sections > * + * {
	border-top: .125rem dashed $color-gray;
}
</style>
