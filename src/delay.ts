/**
 * @param ms - number of milliseconds to delay
 * @param value -  value to be resolved with after a timeout of `ms` milliseconds
 * @returns Resolved promise
 */
export function delay<T>(ms: number, value?: T): Promise<T> {
  return new Promise(resolve => setTimeout(() => resolve(value), ms));
}
