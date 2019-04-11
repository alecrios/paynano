export default function addressIsValid(address) {
	return /^((nano)|(xrb))_[13456789abcdefghijkmnopqrstuwxyz]{60}$/.test(address);
}
