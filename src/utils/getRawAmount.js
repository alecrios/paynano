import scientificToDecimal from 'scientific-to-decimal';

const RAW_PER_UNIT = 1000000000000000000000000000000;

export default function getRawAmount(amount) {
	const rawAmountScientific = parseFloat(amount) * RAW_PER_UNIT;
	const rawAmount = scientificToDecimal(rawAmountScientific);
	return rawAmount;
}
