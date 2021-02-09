<template>
	<BaseContainer width="wide" class="success-message">
		<div class="text">
			<h2>Success!</h2>
			<p>This is your Nano payment page!<br>Send the link to request Nano.</p>
		</div>

		<div class="actions">
			<BaseButton
				text="Copy link"
				@click="copyLink"
				size="small"
			/>
		</div>

		<button
			class="close-button"
			aria-label="Close"
			@click="$emit('hide')"
		>
			<svg viewBox="0 0 24 24" width="24" height="24">
				<path class="close-icon" :d="closeIcon"/>
			</svg>
		</button>
	</BaseContainer>
</template>

<script>
import copy from 'copy-to-clipboard';

export default {
	name: 'SuccessMessage',
	data() {
		return {
			closeIcon: 'M13.4142,12l5.6568,5.6569L17.6569,19.071,12,13.4142,6.3431,19.071,4.929,17.6569,10.5858,12,4.929,6.3431,6.3431,4.9289,12,10.5858l5.6569-5.6569L19.071,6.3431Z',
		};
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
	position: relative;
	margin-bottom: 1.5rem;
	padding: 1.5rem;
	text-align: center;

	.actions {
		display: flex;
		justify-content: center;
		margin-top: 1.5rem;
	}

	.close-button {
		position: absolute;
		top: .5rem;
		right: .5rem;
		width: 2.25rem;
		height: 2.25rem;
		cursor: pointer;

		.close-icon {
			fill: $color-stone;
			transition: fill 125ms ease;
		}

		&:hover .close-icon {
			fill: $color-stone-lighter;
		}
	}
}
</style>
