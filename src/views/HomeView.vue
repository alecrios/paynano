<template>
	<div>
		<BaseContainer class="container">
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
						text="Get Link"
						@click="submit"
					/>
				</div>
			</form>
		</BaseContainer>

		<HowItWorks/>

		<TheFooter/>
	</div>
</template>

<script>
import addressIsValid from 'nano-address-validator';
import amountIsValid from '@/utils/amountIsValid';
import CONSTANTS from '@/constants';
import HowItWorks from '@/components/HowItWorks.vue';
import TheFooter from '@/components/TheFooter.vue';

export default {
	name: 'HomeView',
	components: {
		HowItWorks,
		TheFooter,
	},
	data() {
		return {
			donateLink: `/${CONSTANTS.DONATE_ADDRESS}?amount=1`,
			address: '',
			amount: '',
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
					showSuccessMessage: true,
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
.container {
	padding: 1.5rem;

	.field + .field {
		margin-top: 1.5rem;
	}
}
</style>
