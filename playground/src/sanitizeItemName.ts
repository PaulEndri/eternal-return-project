export const sanitizeItemString = (str) =>
  str
    .replace('Thuận Thiên', 'ThuanThien')
    .replace('Dáinsleif', 'Dainsleif')
    .split(' ')
    .map(([first, ...rest]) => first.toUpperCase() + rest.join(''))
    .join('')
    .replace(/-/g, '')
    .replace(/'/g, '')
    .replace('(Animal)', '')
    .replace('&', '');
