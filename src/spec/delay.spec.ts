import { delay } from '../delay';

describe('delay', () => {
  it('should called `setTimeout`', async () => {
    const spy = jest.spyOn(global, 'setTimeout');
    const result = await delay(0);
    expect(result).toBeUndefined();
    expect(spy).toHaveBeenCalledWith(expect.anything(), 0);
  });
});
