/**
 * "Flip a coin" by seeing if a random number is below 0.5.
 * @return {boolean} true or false.
 */
const coin = (): boolean => {
  return Math.random() < 0.5;
};

/**
 * Get a random integer between two numbers.
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
 * @param {number} low The lowest integer allowed.
 * @param {number} high The highest integer allowed.
 * @return {number} An integer between low and high (both inclusive).
 */
const int = (low: number, high: number): number => {
  const min = Math.ceil(low);
  const max = Math.floor(high);
  return Math.floor((Math.random() * (max - min + 1)) + min);
};

/**
 * Get random RGB values, optionally between two numbers.
 * @param {number} low The lowest number allowed.
 * @param {number} high The highest number allowed.
 * @return {{r: number, g: number, b: number}} An RGB object with random numbers for each property.
 */
const rgb = (low = 0, high = 255): { r: number; g: number; b: number } => {
  const r = int(low, high);
  const g = int(low, high);
  const b = int(low, high);

  return { r, g, b };
};

/**
 * Get a random `rgb()` CSS color string based on low and high RGB numbers.
 * @param {number} low The lowest RGB number allowed.
 * @param {number} high The highest RGB number allowed.
 * @return {string} A color string with random RGB values.
 */
const color = (low = 0, high = 255): string => {
  const { r, g, b } = rgb(low, high);
  return `rgb(${r}, ${g}, ${b})`;
};

/**
 * Get a random element from an array.
 * @param {T[]} array The array to pick an element from.
 * @return {T} A random element of the array.
 */
const element = <T>(array: T[]): T => {
  const low = 0;
  const high = array.length - 1;
  const index = int(low, high);

  return array[index];
};

/**
 * @export {coin, int, rgb, color, element}
 */
export { coin, color, element, int, rgb };
export default { coin, int, rgb, color, element };
