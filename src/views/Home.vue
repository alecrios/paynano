<template>
	<div class="home">
		<BaseContainer class="container">
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
		</BaseContainer>

		<div class="intro">
			<h2>How does it work?</h2>

			<p>
				Simply complete the form, then hand out the link to request Nano. Users will be able
				to pay via QR code, deep link, or copy/paste. See an example
					<a
						href="https://mynano.link/nano_3xk9wwjp89uod6gfwf775ctuibi4nybm4txi3gax3if1smun6hk57xxr6jnu?amount=0.1"
						class="link"
						target="_blank"
						rel="noopener"
						v-text="'Nano link'"
					/>.
			</p>
		</div>
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
.intro {
	text-align: center;
	margin-top: 1.5rem;
	padding: 1.5rem 0;
	color: $color-text;

	> * + * {
		margin-top: .75rem;
	}

	h2 {
		font-size: 1rem;
		line-height: 1.5rem;
		font-weight: 700;
	}

	p {
		font-size: .875rem;
		line-height: 1.5rem;
		font-weight: 500;
	}

	strong {
		font-weight: 700;
	}

	a {
		color: $color-primary;
		text-decoration: underline;
	}
}

.container {
	padding: 1.5rem;

	.field + .field {
		margin-top: 1.5rem;
	}
}
</style>
