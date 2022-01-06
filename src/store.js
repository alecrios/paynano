import Vue from 'vue';
import Vuex from 'vuex';
import CONSTANTS from '@/constants';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		price: {},
		isLoadingPrice: false,
	},
	mutations: {
		setPrice(state, price) {
			state.price = price;
		},
		setIsLoadingPrice(state, isLoadingPrice) {
			state.isLoadingPrice = isLoadingPrice;
		},
	},
	actions: {
		updatePrice(context) {
			context.commit('setIsLoadingPrice', true);

			fetch(CONSTANTS.PRICE_API_URL)
				.then((response) => response.json())
				.then((data) => {
					context.commit('setPrice', data.market_data.current_price);
				})
				.catch(() => {
					context.commit('setPrice', {});
				})
				.finally(() => {
					context.commit('setIsLoadingPrice', false);
				});
		},
	},
});
