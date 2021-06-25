import { isDisabled } from '../is-disabled';

describe('isDisabled', () => {
  it('should return true', () => {
    const disabled = ['0', 'false', 'no', 'off', 'close', 'disable', 'disabled'];
    disabled.forEach(d => {
      expect(isDisabled(d)).toBeTruthy();
    });
  });

  it('should return false', () => {
    const result = isDisabled('true');
    expect(result).toBeFalsy();
  });
});
