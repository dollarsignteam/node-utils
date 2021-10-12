/**
 * @param min - min number
 * @param max - max number
 * @returns random int - min & max inclusive
 */
export function getRandomInt(min: number, max: number): number {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
