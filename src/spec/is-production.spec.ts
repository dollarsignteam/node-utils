import { isProduction } from '../is-production';

describe('isProduction', () => {
  it('should return true when `NODE_ENV` is `production`', () => {
    process.env.NODE_ENV = 'production';
    expect(isProduction()).toBeTruthy();
  });

  it('should return true when `NODE_ENV` is `prod`', () => {
    process.env.NODE_ENV = 'prod';
    expect(isProduction()).toBeTruthy();
  });

  it('should return false', () => {
    process.env.NODE_ENV = '';
    expect(isProduction()).toBeFalsy();
  });
});
