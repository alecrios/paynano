<template>
	<div id="app">
		<TheHeader/>

		<Transition :name="transitionName" mode="out-in">
			<RouterView :key="$route.fullPath"/>
		</Transition>

		<TheNotifications/>
	</div>
</template>

<script>
import 'core-reset/core-reset.css';
import 'focus-visible';
import TheHeader from '@/components/TheHeader.vue';
import TheNotifications from '@/components/TheNotifications.vue';

export default {
	name: 'App',
	components: {
		TheHeader,
		TheNotifications,
	},
	data() {
		return {
			transitionName: '',
		};
	},
	created() {
		this.$store.dispatch('updatePrice');

		this.$router.beforeEach((to, from, next) => {
			this.transitionName = to.name === 'HomeView' ? 'slide-right' : 'slide-left';
			next();
		});
	},
};
</script>

<style lang="scss">
#app {
	padding: 1.5rem;
}
</style>
