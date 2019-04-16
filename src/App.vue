<template>
	<div id="app">
		<RouterView/>

		<TheFooter/>

		<TheNotifications/>
	</div>
</template>

<script>
import 'core-reset/core-reset.css';
import 'focus-visible';
import TheFooter from '@/components/TheFooter.vue';
import TheNotifications from '@/components/TheNotifications.vue';

export default {
	name: 'App',
	components: {
		TheFooter,
		TheNotifications,
	},
};
</script>

<style lang="scss">
#app {
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 100%;
	max-width: 20rem;
	margin: 0 auto;
	padding: 3rem 1.5rem;
}
</style>
