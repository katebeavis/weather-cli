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
DARK_SKY_API_KEY=YOUR_API_KEY_HERE
DARK_SKY_URL=https://api.darksky.net/forecast
GOOGLE_PLACES_API_KEY=YOUR_API_KEY_HERE
GEOCODE_URL=https://maps.googleapis.com/maps/api/geocode/json
IP_DATA_API_KEY=YOUR_API_KEY_HERE
IP_DATA_URL=https://api.ipdata.co
```
Replace the ``DARK_SKY_API_KEY`` with your own from the [Dark Sky API](https://darksky.net/dev), ``GOOGLE_PLACES_API_KEY`` from the [Google Maps API](https://developers.google.com/maps/documentation/geocoding/start#get-a-key) and ``IP_DATA_API_KEY`` from the [Ipdata API](https://ipdata.co/).

## Example usage
To see all available options:

```weather --help```

To get the weather for a given location:

```weather today -l "London"```

To get the 7 day forecast for a given location:

```weather forecast -l "Princeton"```

To get the weather for your current location, omit the -l flag and location string:

```weather today```

## Acknowledgments
This app was originally based off the app built [here](https://timber.io/blog/creating-a-real-world-cli-app-with-node).
