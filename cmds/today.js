const ora = require('ora');
const getLocation = require('../utils/location');
const getWeather = require('../utils/getWeather');
const convertTemp = require('../utils/tempConverter');

module.exports = async args => {
  const spinner = ora({
    text: 'Loading weather',
  }).start();

  try {
    const location = args.location || args.l || (await getLocation());
    const tempFormat = args.fahrenheit || args.f;
		const weather = await getWeather(location);
		const temp = tempFormat
			? `${weather.currently.temperature}°F`
			: `${convertTemp(weather.currently.temperature)}°C`;
    spinner.succeed('Weather loaded');
    console.log(`Current conditions in ${location}:`);
    console.log(`\t${temp} ${weather.currently.summary}`);
  } catch (err) {
    spinner.fail('An error has occurred');

    console.error(err);
  }
};
