import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home.vue';
import Address from '@/views/Address.vue';

Vue.use(Router);

export default new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [
		{
			path: '/',
			name: 'Home',
			component: Home,
		},
		{
			path: '/:address',
			name: 'Address',
			component: Address,
		},
	],
});
