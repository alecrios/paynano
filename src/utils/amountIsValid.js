export default function amountIsValid(amount) {
	if (amount === '') {
		return false;
	}

	if (amount === '0') {
		return false;
	}

	if (Number.isNaN(Number(amount))) {
		return false;
	}

	return true;
}
