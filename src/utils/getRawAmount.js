import BigNumber from 'bignumber.js';

const RAW_PER_UNIT = 1000000000000000000000000000000;

export default function getRawAmount(amount) {
	return new BigNumber(parseFloat(amount)).times(RAW_PER_UNIT).toFixed(0);
}
