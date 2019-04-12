<template>
	<div id="app">
		<main class="main">
			<RouterView/>
		</main>

		<TheNotifications/>
	</div>
</template>

<script>
import 'core-reset/core-reset.css';
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
#app {
	width: 100%;
	max-width: 20rem;
	margin: 0 auto;
	padding: 3rem 1.5rem;
}

.main {
	border-radius: .5rem;
	background-color: $color-base;
	box-shadow: $box-shadow-large;
}
</style>
