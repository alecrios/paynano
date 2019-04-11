<template>
	<div id="app">
		<RouterView/>
		<TheNotifications/>
	</div>
</template>

<script>
import 'focus-visible';
import TheNotifications from '@/components/TheNotifications.vue';

export default {
	name: 'App',
	components: {
		TheNotifications,
	},
};
</script>

<style lang="scss">
@import '~core-reset/core-reset.css';

#app {
	width: 100%;
	max-width: 20rem;
	margin: 0 auto;
	padding: 3rem 1.5rem;
}
</style>
