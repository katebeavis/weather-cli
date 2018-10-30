module.exports = temp => {
	const celsius = Math.round((temp - 32) * 0.5556);
	return celsius;
};