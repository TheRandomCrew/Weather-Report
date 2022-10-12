/**
 *
 * @param {Number} timestamp Timestamp in milliseconds
 * @returns {String} Time in format HH:MM:SS
 */
export const timestampToTime = (timestamp) => {
  const date = new Date(timestamp * 1000);
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  const seconds = date.getSeconds().toString().padStart(2, '0');
  return `${hours}:${minutes}:${seconds}`;
};

/**
 *
 * @param {Number} kelvin Temperature in Kelvin
 * @returns {{celsius: Number, fahrenheit: Number}} Temperature in Celsius and Fahrenheit
 */
export const kelvinToOthers = (kelvin) => {
  const celsius = kelvin - 273.15;
  const fahrenheit = (celsius * 9) / 5 + 32;
  return { celsius: Math.round(celsius), fahrenheit: Math.round(fahrenheit) };
};
