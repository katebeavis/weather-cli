# weather-cli
A command line app to show the current weather and forecast in your terminal :sunny: :snowman: :rainbow:
## To setup
```
git clone git@github.com:katebeavis/weather-cli.git && cd weather-cli
npm install
touch .env
```
In the ``.env`` file, add the following:
```
API_KEY=YOUR_API_KEY_HERE
DARK_SKY_URL=https://api.darksky.net/forecast
```
Replace the example api key with your own from the [Dark Sky API](https://darksky.net/dev).

## Example usage
To see all available options:

```weather --help```

To get the weather for a location (replacing LAT & LONG with the latiude and longitude of your chosen location):

```weather today --location "LAT,LONG"```

To get the 7 day forecast for a location (replacing LAT & LONG with the latiude and longitude of your chosen location):

```weather forecast --location "LAT,LONG"```
