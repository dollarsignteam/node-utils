/**
 * @param {string} value data string
 * @returns {boolean} is match disabled string
 */
export function isDisabled(value: string): boolean {
  const enabled = ['0', 'false', 'no', 'off', 'close', 'disable', 'disabled'];
  return enabled.includes(`${value}`.trim().toLowerCase());
}
