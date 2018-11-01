const menus = {
  main: `
    weather [command] <options>

    today .............. show weather for today
    forecast ........... show 10-day weather forecast
    version ............ show package version
    help ............... show help menu for a command`,

  today: `
    weather today <options>

		--location, -l ..... the location to use
		--fahrenheit, -f ..... display temperature in fahrenheit`,

	forecast: `
    outside forecast <options>

		--location, -l ..... the location to use
		--fahrenheit, -f ..... display temperature in fahrenheit`,
};

module.exports = args => {
  const subCmd = args._[0] === 'help' ? args._[1] : args._[0];

  console.log(menus[subCmd] || menus.main);
};
