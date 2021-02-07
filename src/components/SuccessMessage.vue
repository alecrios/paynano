<template>
	<BaseContainer
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
				@click="$emit('hide')"
				theme="secondary"
				size="small"
			/>
		</div>
	</BaseContainer>
</template>

<script>
import copy from 'copy-to-clipboard';

export default {
	name: 'SuccessMessage',
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
</style>
