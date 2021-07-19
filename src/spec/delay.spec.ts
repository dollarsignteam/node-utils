import { delay } from '../delay';

describe('delay', () => {
  it('should called `setTimeout`', async () => {
    const spy = jest.spyOn(global, 'setTimeout');
    const result = await delay<string>(0, 'foo');
    expect(result).toBe('foo');
    expect(spy).toHaveBeenCalledWith(expect.anything(), 0);
  });
});
