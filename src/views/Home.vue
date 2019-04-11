<template>
	<div class="home">
		<form @submit.prevent="submit">
			<BaseLabel
				input-id="address"
				text="Nano Address"
			/>

			<BaseTextarea
				id="address"
				placeholder="nano_"
				v-model.trim="address"
				spellcheck="false"
				@keydown.native.enter.prevent="submit"
			/>

			<BaseButton
				text="Submit"
				@click="submit"
			/>
		</form>
	</div>
</template>

<script>
import copy from 'copy-to-clipboard';
import addressIsValid from '@/utils/addressIsValid';

export default {
	name: 'Home',
	data() {
		return {
			address: '',
		};
	},
	methods: {
		submit() {
			if (!addressIsValid(this.address)) {
				this.$notify({type: 'error', text: 'Address is invalid'});
				return;
			}

			const route = `/${this.address}`;
			this.$router.push(route);
			copy(`${window.location.origin}${route}`);
			this.$notify({type: 'success', text: 'Copied link to clipboard'});
		},
	},
};
</script>

<style lang="scss" scoped>

</style>
