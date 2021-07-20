import { jsonStringify } from '../json-stringify';

describe('jsonStringify', () => {
  it('should return string when input is string', () => {
    const data = 'Hello world';
    const result = jsonStringify(data);
    expect(result).toBe(data);
  });

  it('should return JSON string when input is JSON string', () => {
    const data = { foo: 'bar' };
    const stringify = JSON.stringify(data);
    const result = jsonStringify(stringify);
    expect(result).toBe(stringify);
  });

  it('should return JSON string when input is Error', () => {
    const data = Error('foo');
    const result = jsonStringify(data);
    expect(result).toBe('[Error: foo]');
  });

  it('should return JSON string when input is data object', () => {
    const foo = function (): void {
      this.name = 'foo';
      this.bar = this;
      this.error = new Error('Internal error');
      this.error.internal = true;
      this.error.code = 'INTERNAL_ERROR';
    };
    const result = jsonStringify(new foo());
    expect(result).toBe(`{"bar":"[Circular]","error":"{ [Error: Internal error] internal: true, code: 'INTERNAL_ERROR' }","name":"foo"}`);
  });

  it('should return JSON string  contain error object', () => {
    const foo = function (): void {
      this.error = new Error('Internal error');
      this.error.code = 'INTERNAL_ERROR';
      this.error.message = [{ foo: 'bar' }, this];
    };
    const result = jsonStringify(new foo());
    expect(result).toBe(`{"error":"{ [Error: [ { foo: 'bar' }, { error: { code: 'INTERNAL_ERROR' } } ]] code: 'INTERNAL_ERROR' }"}`);
  });
});
