<template>
	<notifications position="top center" width="100%" :duration="3000">
		<template slot="body" slot-scope="props">
			<div class="notification">
				<div :class="['message', props.item.type]">
					{{ props.item.text }}
				</div>
			</div>
		</template>
	</notifications>
</template>

<script>
export default {
	name: 'TheNotifications',
};
</script>

<style lang="scss" scoped>
.notification {
	margin-top: .75rem;
	display: flex;
	justify-content: center;
}

.message {
	display: flex;
	font-size: .75rem;
	line-height: 1rem;
	font-weight: 500;
	color: $color-pearl;
	padding: .5rem .75rem;
	border-radius: .25rem;
}

.message.error {
	background-color: $color-ruby;
}

.message.success {
	background-color: $color-emerald;
}
</style>
