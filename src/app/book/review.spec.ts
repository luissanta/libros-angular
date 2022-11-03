import { Review } from './review';

describe('Review', () => {
  it('should create an instance', () => {
    expect(new Review(
      1,
      'https://www.bendigoregion.com.au/sites/default/files/2021-05/brett_whiteley_greg_dogs.jpg',
      'vista',
      'esta es uan review'
    )).toBeTruthy();
  });
});
