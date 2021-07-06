/**
 * @param ms - number of milliseconds to delay
 * @returns new `Promise`
 */
export function delay(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}
