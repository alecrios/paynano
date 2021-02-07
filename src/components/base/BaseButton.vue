<template>
	<a
		v-if="href"
		:class="['button', theme, size]"
		v-text="text"
		:href="href"
	/>

	<button
		v-else
		type="button"
		:class="['button', theme, size]"
		v-text="text"
		@click="$emit('click')"
	/>
</template>

<script>
export default {
	name: 'BaseButton',
	props: {
		text: {
			type: String,
			required: true,
		},
		href: {
			type: String,
			default: '',
		},
		theme: {
			type: String,
			default: 'primary',
		},
		size: {
			type: String,
			default: 'regular',
		},
	},
};
</script>

<style lang="scss" scoped>
.button {
	display: block;
	text-align: center;
	width: 100%;
	border-radius: .25rem;
	cursor: pointer;
	transition: background-color 125ms ease;

	&.small {
		font-size: .75rem;
		line-height: 1rem;
		font-weight: 600;
		padding: .5rem .75rem;
	}

	&.regular {
		font-size: 1rem;
		line-height: 1.5rem;
		font-weight: 600;
		padding: .75rem 1rem;
	}

	&.primary {
		background-color: $color-sapphire;
		color: $color-pearl;

		&:hover {
			background-color: $color-sapphire-hover;
		}
	}

	&.secondary {
		background-color: $color-dolphin;
		color: $color-pearl;

		&:hover {
			background-color: $color-dolphin-hover;
		}
	}
}
</style>
