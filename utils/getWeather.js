const getWeather = require('../utils/weather');
const getCoordinates = require('../utils/lookup');

module.exports = async location => {
	try {

		const coordinates = await getCoordinates(location);
		const queryString = `${coordinates.lat},${coordinates.lng}`;
		const weather = await getWeather(queryString);

		return weather;
	} catch (err) {
		console.error(err);
	}
};
