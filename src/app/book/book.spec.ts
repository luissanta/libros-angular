import { Book } from './book';
import { Editorial } from "../editorial/editorial";

describe('Book', () => {
  it('should create an instance', () => {
    expect(new Book(
      1,
      'feliz',
      'si',
      'como ser feliz',
      'https://www.bendigoregion.com.au/sites/default/files/2021-05/brett_whiteley_greg_dogs.jpg',
      '10/12/2022',
      new Editorial(
        1,
        'pasos de gigante'
      )
    )).toBeTruthy();
  });
});
