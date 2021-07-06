/**
 * @param value - data string
 * @returns matched result of disabled string
 */
export function isDisabled(value: string): boolean {
  const enabled = ['0', 'false', 'no', 'off', 'close', 'disable', 'disabled'];
  return enabled.includes(`${value}`.trim().toLowerCase());
}
