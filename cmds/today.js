const ora = require('ora');
const getWeather = require('../utils/weather');
const convertTemp = require('../utils/tempConverter');

module.exports = async args => {
  const spinner = ora().start();

  try {
    const location = args.location || args.l;
    const weather = await getWeather(location);

    spinner.stop();

    console.log(`Current conditions in ${location}:`);
    console.log(
			`\t${convertTemp(weather.currently.temperature)}°C ${weather.currently.summary}`,
    );
  } catch (err) {
    spinner.stop();

    console.error(err);
  }
};
