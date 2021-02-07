<template>
	<header class="header">
		<RouterLink to="/">
			<img class="logo" src="~@/assets/logo.svg" alt="Pay Nano" width="112" height="32">
		</RouterLink>
	</header>
</template>

<script>
export default {
	name: 'TheHeader',
};
</script>

<style lang="scss" scoped>
.header {
	display: flex;
	align-items: center;
	justify-content: center;
	margin-bottom: .75rem;
}
</style>
