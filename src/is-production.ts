/**
 * @returns matched `NODE_ENV` is production
 */
export function isProduction(): boolean {
  const { NODE_ENV } = process.env;
  const production = ['production', 'prod'];
  return production.includes(`${NODE_ENV}`.trim().toLowerCase());
}
