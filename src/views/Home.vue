<template>
	<div class="home">
		<form @submit.prevent="submit">
			<div class="field">
				<BaseLabel
					input-id="address"
					text="Nano Address"
				/>

				<BaseInput
					id="address"
					type="text"
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
	</div>
</template>

<script>
import copy from 'copy-to-clipboard';
import NanoAddressValidator from 'nano-address-validator';
import amountIsValid from '@/utils/amountIsValid';

const addressValidator = new NanoAddressValidator();

export default {
	name: 'Home',
	data() {
		return {
			address: '',
			amount: '',
		};
	},
	methods: {
		submit() {
			if (!addressValidator.isValid(this.address)) {
				this.$notify({type: 'error', text: 'Address is invalid'});
				return;
			}

			let route = `/${this.address}`;

			if (this.amount) {
				if (!amountIsValid(this.amount)) {
					this.$notify({type: 'error', text: 'Amount is invalid'});
					return;
				}

				route += `?amount=${this.amount}`;
			}

			this.$router.push(route);
			copy(`${window.location.origin}${route}`);
			this.$notify({type: 'success', text: 'Copied link to clipboard'});
		},
	},
};
</script>

<style lang="scss" scoped>
.home {
	padding: 1.5rem;

	.field + .field {
		margin-top: 1.5rem;
	}
}
</style>
