import { toJSONString } from '../to-json-string';

describe('toJSONString', () => {
  it('should return string when input is string', () => {
    const data = 'Hello world';
    const result = toJSONString(data);
    expect(result).toBe(data);
  });

  it('should return JSON string when input is JSON string', () => {
    const data = { foo: 'bar' };
    const stringify = JSON.stringify(data);
    const result = toJSONString(stringify);
    expect(result).toBe(stringify);
  });

  it('should return JSON string when input is data object', () => {
    const foo = function (): void {
      this.name = 'foo';
      this.bar = this;
      this.error = new Error('Error of foo');
    };
    const result = toJSONString(new foo());
    expect(result).toBe('{"name":"foo","bar":{"$ref":"$"},"error":{}}');
  });
});
