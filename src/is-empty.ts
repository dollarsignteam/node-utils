/**
 * @param value - the value to check
 * @returns `true` if value is empty, else `false`
 */
export const isEmpty = (value: string | number | Record<string, unknown>): boolean => {
  if (value === null) {
    return true;
  } else if (typeof value !== 'number' && value === '') {
    return true;
  } else if (value === 'undefined' || value === undefined) {
    return true;
  } else if (value !== null && typeof value === 'object' && !Object.keys(value).length) {
    return true;
  } else {
    return false;
  }
};
