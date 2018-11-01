const axios = require('axios');

module.exports = async location => {
	const response = await axios({
    method: 'get',
		url: `${process.env.IP_DATA_URL}?api-key=${process.env.IP_DATA_API_KEY}`,
	});

	return response.data.city;
}