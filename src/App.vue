<template>
	<div id="app">
		<RouterView/>
	</div>
</template>

<script>
import 'focus-visible';

export default {
	name: 'App',
};
</script>

<style>
@import '~core-reset/core-reset.css';
@import 'styles/colors.css';
@import 'styles/fonts.css';
@import 'styles/global.css';

#app {
	max-width: 20rem;
	margin: 0 auto;
	padding: 1.5rem;
}
</style>
