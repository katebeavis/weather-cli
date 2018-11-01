module.exports = date => {
	const formattedDate = `${date.toLocaleDateString('en', { weekday: 'short' })}`;
  return formattedDate;
};
