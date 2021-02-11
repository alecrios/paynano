<template>
	<div>
		<InlineModal :is-dismissable="false">
			<h1>Request Nano</h1>

			<p>
				To request a payment or donation in Nano, fill out the form below, and a page link will be
				generated. On this page, users can pay via QR code, deep link, or copy &amp; paste. Check
				out an <RouterLink :to="donateLink" v-text="'example'"/>.
			</p>
		</InlineModal>

		<BaseContainer class="form-container">
			<form @submit.prevent="submit">
				<div class="field">
					<BaseLabel
						input-id="address"
						text="Nano Address"
					/>

					<BaseTextarea
						id="address"
						placeholder="nano_"
						spellcheck="false"
						v-model.trim="address"
					/>
				</div>

				<div class="field">
					<BaseLabel
						input-id="amount"
						text="Nano Amount"
						note="Optional"
					/>

					<BaseInput
						id="amount"
						type="number"
						placeholder="0"
						step=".01"
						min="0"
						autocomplete="off"
						v-model.trim="amount"
					/>
				</div>

				<div class="field">
					<BaseButton
						text="Get page link"
						@click="submit"
					/>
				</div>
			</form>
		</BaseContainer>

		<TheFooter/>
	</div>
</template>

<script>
import addressIsValid from 'nano-address-validator';
import amountIsValid from '@/utils/amountIsValid';
import InlineModal from '@/components/InlineModal.vue';
import TheFooter from '@/components/TheFooter.vue';
import CONSTANTS from '@/constants';

export default {
	name: 'HomeView',
	components: {
		InlineModal,
		TheFooter,
	},
	data() {
		return {
			address: '',
			amount: '',
			donateLink: `/${CONSTANTS.DONATE_ADDRESS}?amount=1`,
		};
	},
	methods: {
		submit() {
			if (!addressIsValid(this.address)) {
				this.$notify({type: 'error', text: 'Address is invalid'});
				return;
			}

			const route = {
				name: 'PaymentView',
				params: {
					address: this.address,
					showSuccessModal: true,
				},
			};

			if (this.amount) {
				if (!amountIsValid(this.amount)) {
					this.$notify({type: 'error', text: 'Amount is invalid'});
					return;
				}

				route.query = {amount: this.amount};
			}

			this.$router.push(route);
		},
	},
};
</script>

<style lang="scss" scoped>
.form-container {
	margin-top: 1.5rem;
	padding: 1.5rem;

	.field + .field {
		margin-top: 1.5rem;
	}
}
</style>
