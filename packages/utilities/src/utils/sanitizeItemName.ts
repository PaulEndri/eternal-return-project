export const sanitizeItemString = (str) =>
	str
		.replace(/ /g, '')
		.replace(/-/g, '')
		.replace(/'/g, '')
		.replace('(Animal)', '')
		.replace('&', '');
