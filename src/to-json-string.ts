import { stringify } from 'json-cycle';
import { parseJSON } from './parse-json';
/**
 * @param {unknown} data unknown type
 * @returns {string} JSON `string` type
 */
export function toJSONString(data: unknown): string {
  if (typeof data === 'string') {
    const json = parseJSON(data);
    return json === null ? data : stringify(json);
  }
  return stringify(data);
}
