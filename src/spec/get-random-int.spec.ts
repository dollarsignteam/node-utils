import { getRandomInt } from '../get-random-int';

describe('getRandomInt', () => {
  it('should return number between 7 and 9', () => {
    const result = getRandomInt(7, 9);
    expect(result >= 7 && result <= 9).toBeTruthy();
  });
});
