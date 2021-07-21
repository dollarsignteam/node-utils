/**
 * @param value - the value to check
 * @returns `true` if value is empty, else `false`
 */
export const isEmpty = (value: string | number | unknown[] | Record<string, unknown>): boolean => {
  if (value === null || value === undefined) {
    return true;
  } else if (typeof value === 'string' && !value.length) {
    return true;
  } else if (typeof value === 'object' && !Object.keys(value).length) {
    return true;
  } else {
    return false;
  }
};
