import { isEnabled } from '../is-enabled';

describe('isEnabled', () => {
  it('should return true', () => {
    const enabled = ['1'];
    enabled.forEach(e => {
      expect(isEnabled(e)).toBeTruthy();
    });
  });

  it('should return false', () => {
    const result = isEnabled('false');
    expect(result).toBeFalsy();
  });
});
