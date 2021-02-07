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

.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
	transition-duration: 250ms;
	transition-property: opacity, transform;
	transition-timing-function: cubic-bezier(0.55, 0, 0.1, 1);
	overflow: hidden;
}

.slide-left-enter,
.slide-right-leave-active {
	opacity: 0;
	transform: translateX(1.5rem);
}

.slide-left-leave-active,
.slide-right-enter {
	opacity: 0;
	transform: translateX(-1.5rem);
}
</style>
