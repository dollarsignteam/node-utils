import stringify from 'safe-stable-stringify';
import { format } from 'util';

import { parseJSON } from './parse-json';

/**
 * @param {string} key data key
 * @param {unknown} value data value
 * @return {unknown} modified value
 */
function dataReplacer(key: string, value: unknown): unknown {
  if (value instanceof Error) {
    delete value.stack;
    return format(value);
  }
  return value;
}

/**
 * @param {unknown} value data to be converted
 * @param {(key:string, value:unknown) => unknown} replacer a function that transforms the results
 * @param {string|number} space adds indentation, white space, and line break characters
 * @returns {string} JSON text to make it easier to read
 */
export function jsonStringify(value: unknown, replacer?: (key: string, value: unknown) => unknown, space?: string | number): string {
  const rep = replacer || dataReplacer;
  if (typeof value === 'string') {
    const json = parseJSON(value);
    return json === null ? value : stringify(json, rep, space);
  }
  return stringify(value, rep, space);
}
