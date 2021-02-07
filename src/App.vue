<template>
	<div id="app">
		<TheHeader/>
		<RouterView/>
		<TheFooter/>
		<TheNotifications/>
	</div>
</template>

<script>
import 'core-reset/core-reset.css';
import 'focus-visible';
import TheHeader from '@/components/TheHeader.vue';
import TheFooter from '@/components/TheFooter.vue';
import TheNotifications from '@/components/TheNotifications.vue';

export default {
	name: 'App',
	components: {
		TheHeader,
		TheFooter,
		TheNotifications,
	},
};
</script>

<style lang="scss">
#app {
	max-width: 20rem;
	margin: 0 auto;
	padding: 1.5rem;
}
</style>
