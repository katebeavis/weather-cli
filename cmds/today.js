const ora = require('ora');
const getWeather = require('../utils/weather');
const getCoordinates = require('../utils/lookup');
const convertTemp = require('../utils/tempConverter');

module.exports = async args => {
  const spinner = ora({
    text: 'Loading unicorns'
  }).start();

  try {
		const location = args.location || args.l;
		const coordinates = await getCoordinates(location);
		const queryString = `${coordinates.lat},${coordinates.lng}`;
    const weather = await getWeather(queryString);

    spinner.succeed('Unicorns loaded');

    console.log(`Current conditions in ${location}:`);
    console.log(
      `\t${convertTemp(weather.currently.temperature)}°C ${
        weather.currently.summary
      }`,
    );
  } catch (err) {
    spinner.fail('Unicorn error');

    console.error(err);
  }
};
