import stringify from 'safe-stable-stringify';
import { formatWithOptions } from 'util';

import { parseJSON } from './parse-json';

/**
 * @param key - data key
 * @param value - data value
 * @returns modified value
 */
function dataReplacer(key: string, value: unknown): unknown {
  if (value instanceof Error) {
    delete value.stack;
    if (typeof value.message === 'object') {
      value.message = formatWithOptions({ compact: true }, JSON.parse(stringify(value.message)));
    }
    return formatWithOptions({ compact: true }, value);
  }
  return value;
}

/**
 * @param value - data to be converted
 * @param replacer - a function that transforms the results
 * @param space - adds indentation, white space, and line break characters
 * @returns JSON text to make it easier to read
 */
export function jsonStringify(value: unknown, replacer?: (key: string, value: unknown) => unknown, space?: string | number): string {
  const rep = replacer || dataReplacer;
  if (typeof value === 'string') {
    const json = parseJSON(value);
    return json === null ? value : stringify(json, rep, space);
  }
  const text = stringify(value, rep, space);
  return value instanceof Error ? text.slice(1, -1) : text;
}
