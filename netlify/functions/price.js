const CoinGecko = require('coingecko-api');

exports.handler = () => {
	const coinGecko = new CoinGecko();
	const coin = 'nano';
	const options = {
		tickers: false,
		community_data: false,
		developer_data: false,
		localization: false,
	};

	return coinGecko.coins.fetch(coin, options)
		.then((response) => ({
			statusCode: 200,
			body: JSON.stringify(response.data.market_data.current_price),
		}))
		.catch((error) => ({
			statusCode: 500,
			body: error,
		}));
};
