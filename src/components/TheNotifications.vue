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
.notifications {
	pointer-events: none;
	margin-top: 3.25rem;
}

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
	color: $color-base;
	padding: .5rem .75rem;
	border-radius: .25rem;
}

.message.error {
	background-color: $color-error;
}

.message.success {
	background-color: $color-success;
}
</style>
