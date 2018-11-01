const ora = require('ora');
const getWeather = require('../utils/weather');
const getCoordinates = require('../utils/lookup');
const convertTemp = require('../utils/tempConverter');

module.exports = async args => {
  const spinner = ora().start();

  try {
    const location = args.location || args.l;
		const coordinates = await getCoordinates(location);
		const queryString = `${coordinates.lat},${coordinates.lng}`;
		const weather = await getWeather(queryString);
    spinner.stop();

    console.log(`Forecast for ${location}:`);
    const arr = weather.daily.data;
    arr.forEach(key => {
      console.log(
        `\t${new Date(key.time * 1000).toLocaleDateString()}: ${
          key.summary
				} High: ${convertTemp(key.temperatureHigh)}°C. Low: ${convertTemp(
          key.temperatureLow,
				)}°C.`,
      );
    });
  } catch (err) {
    spinner.stop();

    console.error(err);
  }
};
