const ora = require('ora');
const getWeather = require('../utils/weather');

module.exports = async args => {
  const spinner = ora().start();

  try {
    const location = args.location || args.l;
    const weather = await getWeather(location);

    spinner.stop();

    console.log(`Current conditions in ${location}:`);
    console.log(
      `\t${weather.currently.temperature}° ${weather.currently.summary}`,
    );
  } catch (err) {
    spinner.stop();

    console.error(err);
  }
};
