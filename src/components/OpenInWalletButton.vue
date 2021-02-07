<template>
	<div class="open-in-wallet-button">
		<BaseButton
			text="Open in wallet"
			:href="deepLink"
		/>
	</div>
</template>

<script>
export default {
	name: 'OpenInWalletButton',
	props: {
		deepLink: {
			type: String,
			required: true,
		},
	},
};
</script>

<style lang="scss" scoped>
.open-in-wallet-button {
	padding: 1.5rem;
}
</style>
