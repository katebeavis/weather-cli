const ora = require('ora');
const getWeather = require('../utils/weather');
const getCoordinates = require('../utils/lookup');
const getLocation = require('../utils/location');
const convertTemp = require('../utils/tempConverter');
const formatDate = require('../utils/formatDate');
var colors = require('colors');

module.exports = async args => {
  const spinner = ora({
    text: 'Loading weather',
  }).start();

  try {
    const location = args.location || args.l || (await getLocation());
    const coordinates = await getCoordinates(location);
    const queryString = `${coordinates.lat},${coordinates.lng}`;
    const weather = await getWeather(queryString);
    spinner.succeed('Weather loaded');

    console.log(`Forecast for ${location}:`);
    const arr = weather.daily.data;
    arr.forEach(key => {
      const highTemp = `${convertTemp(key.temperatureHigh)}°C`;
      const lowTemp = `${convertTemp(key.temperatureLow)}°C`;
      console.log(
				`\t${formatDate(new Date(key.time * 1000)).bold}: ${key.summary} High: ${
				highTemp.red.bold
				} Low: ${lowTemp.blue.bold}`,
      );
    });
  } catch (err) {
    spinner.fail('An error has occurred');

    console.error(err);
  }
};
