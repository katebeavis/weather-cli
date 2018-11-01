const axios = require('axios');

module.exports = async location => {
  const response = await axios({
    method: 'get',
    url: `${process.env.GEOCODE_URL}?address=${location}&key=${
			process.env.GOOGLE_PLACES_API_KEY
    }`,
  });

	return response.data.results[0].geometry.location;
};
