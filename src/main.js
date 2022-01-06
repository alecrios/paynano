import camelCase from 'lodash.camelcase';
import upperFirst from 'lodash.upperfirst';
import Vue from 'vue';
import Notifications from 'vue-notification';
import App from '@/App.vue';
import router from '@/router';
import store from '@/store';

// Disable production tip
Vue.config.productionTip = false;

// Register the notifications plugin
Vue.use(Notifications);

// Get all base components
const requireComponent = require.context('./components/base');

// Register each base component globally
requireComponent.keys().forEach((fileName) => {
	// Get the component config
	const componentConfig = requireComponent(fileName);

	// Get the PascalCase version of the component name
	const componentName = upperFirst(camelCase(fileName.replace('./', '').replace('.vue', '')));

	// Globally register the component
	Vue.component(componentName, componentConfig.default || componentConfig);
});

new Vue({
	router,
	store,
	render: (h) => h(App),
}).$mount('#app');
