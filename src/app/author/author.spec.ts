import { Author } from './author';

describe('Author', () => {
  it('should create an instance', () => {
    expect(new Author(
      1,
      'luis',
      '25/03/1994',
      'es feliz',
      'https://www.bendigoregion.com.au/sites/default/files/2021-05/brett_whiteley_greg_dogs.jpg'
    )).toBeTruthy();
  });
});
