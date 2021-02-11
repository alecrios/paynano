<template>
	<BaseContainer width="wide" class="inline-modal">
		<div class="text">
			<slot/>
		</div>

		<div v-if="actionText" class="action">
			<BaseButton
				:text="actionText"
				@click="$emit('action')"
				size="small"
			/>
		</div>

		<button
			v-if="isDismissable"
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
export default {
	name: 'InlineModal',
	props: {
		isDismissable: {
			type: Boolean,
			default: true,
		},
		actionText: {
			type: String,
			default: '',
		},
	},
	data() {
		return {
			closeIcon: 'M13.4142,12l5.6568,5.6569L17.6569,19.071,12,13.4142,6.3431,19.071,4.929,17.6569,10.5858,12,4.929,6.3431,6.3431,4.9289,12,10.5858l5.6569-5.6569L19.071,6.3431Z',
		};
	},
};
</script>

<style lang="scss" scoped>
.inline-modal {
	margin-bottom: 1.5rem;
	padding: 1.5rem;
	text-align: center;

	.action {
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
