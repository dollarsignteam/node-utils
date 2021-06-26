import { stringify } from 'json-cycle';
import { format } from 'util';

import { parseJSON } from './parse-json';

function errorReplacer(key, value): unknown {
  console.log({ key, value });
  if (value instanceof Error) {
    return format(value);
  }
  return value;
}

/**
 * @param {unknown} data unknown type
 * @returns {string} JSON `string` type
 */
export function toJSONString(data: unknown): string {
  if (typeof data === 'string') {
    const json = parseJSON(data);
    return json === null ? data : stringify(json);
  }
  return stringify(data, errorReplacer);
}
