/**
 * @param value - data string
 * @returns matched result of enabled string
 */
export function isEnabled(value: string): boolean {
  const enabled = ['1', 'true', 'yes', 'on', 'open', 'enable', 'enabled'];
  return enabled.includes(`${value}`.trim().toLowerCase());
}
