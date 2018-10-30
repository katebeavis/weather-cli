const ora = require('ora');
const getWeather = require('../utils/weather');
const convertTemp = require('../utils/tempConverter');

module.exports = async args => {
  const spinner = ora().start();

  try {
    const location = args.location || args.l;
    const weather = await getWeather(location);

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
