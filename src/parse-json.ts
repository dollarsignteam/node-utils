/**
 * @param {unknown} data unknown type
 * @returns {T} null or JSON `T` type
 */
export function parseJSON<T>(data: unknown): T | null {
  if (typeof data === 'object') {
    return data as unknown as T;
  }
  try {
    return JSON.parse(data as string) as T;
  } catch {
    return null;
  }
}
