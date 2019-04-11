<template>
	<notifications position="top center" width="100%" :duration="2000">
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
}

.notification {
	margin-top: .5rem;
	display: flex;
	justify-content: center;
}

.message {
	display: flex;
	font-size: .75rem;
	line-height: 1rem;
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

.message::before {
	color: $color-base;
	margin-right: .25rem;
}

.message.error::before {
	content: '\2718';
}

.message.success::before {
	content: '\2714';
}
</style>
