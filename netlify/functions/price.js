const CoinGecko = require('coingecko-api');

exports.handler = () => {
	const coinGecko = new CoinGecko();
	const coin = 'nano';

	coinGecko.coins.fetch(coin)
		.then((response) => ({
			statusCode: 200,
			body: response.data.market_data.current_price,
		}))
		.catch((error) => ({
			statusCode: 500,
			body: error,
		}));
};
