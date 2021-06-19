import { parseJSON } from '../parse-json';

describe('parseJSON', () => {
  it('should return null when input is undefined', () => {
    const result = parseJSON(undefined);
    expect(result).toBeNull();
  });

  it('should return {} when input is `{}`', () => {
    const result = parseJSON('{}');
    expect(result).toEqual({});
  });

  it('should return object when input is object', () => {
    const foo = { foo: 'bar', bar: null };
    foo.bar = foo;
    const result = parseJSON(foo);
    expect(result).toEqual(foo);
  });
});
