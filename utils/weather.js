const axios = require('axios');

module.exports = async location => {
  const response = await axios({
    method: 'get',
    url: `${process.env.DARK_SKY_URL}/${
      process.env.DARK_SKY_API_KEY
    }/${location}`,
  });

  return response.data;
};
