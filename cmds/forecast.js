const ora = require('ora');
const getLocation = require('../utils/location');
const convertTemp = require('../utils/tempConverter');
const formatDate = require('../utils/formatDate');
const getWeather = require('../utils/getWeather');
var colors = require('colors');

module.exports = async args => {
  const spinner = ora({
    text: 'Loading weather',
  }).start();

  try {
    const location = args.location || args.l || (await getLocation());
    const tempFormat = args.fahrenheit || args.f;
    const weather = await getWeather(location);
    spinner.succeed('Weather loaded');
    console.log(`Forecast for ${location}:`);
    const arr = weather.daily.data;
    arr.forEach(key => {
      const highTemp = tempFormat
        ? `${key.temperatureHigh}°F`
				: `${convertTemp(key.temperatureHigh)}°C`;
			const lowTemp = tempFormat
				? `${key.temperatureLow}°F`
				: `${convertTemp(key.temperatureLow)}°C`;
      console.log(
        `\t${formatDate(new Date(key.time * 1000)).bold}: ${
          key.summary
        } High: ${highTemp.red.bold} Low: ${lowTemp.blue.bold}`,
      );
    });
  } catch (err) {
    spinner.fail('An error has occurred');

    console.error(err);
  }
};
