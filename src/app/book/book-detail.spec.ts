import { BookDetail } from './book-detail';
import {Editorial} from "../editorial/editorial";
import {Author} from "../author/author";
import {Review} from "./review";

describe('BookDetail', () => {
  it('should create an instance', () => {
    expect(new BookDetail(
      1,
      'detalle',
      'si',
      'este es un detalle',
      'https://www.bendigoregion.com.au/sites/default/files/2021-05/brett_whiteley_greg_dogs.jpg',
      '10/12/2023',
      new Editorial(
        1,
        'pasos de gigante'
      ),
      [
        new Author(
          1,
          'luis',
          '25/03/1994',
          'es feliz',
          'https://www.bendigoregion.com.au/sites/default/files/2021-05/brett_whiteley_greg_dogs.jpg'
        ),
        new Author(
          2,
          'fernando',
          '25/03/1994',
          'es feliz',
          'https://www.bendigoregion.com.au/sites/default/files/2021-05/brett_whiteley_greg_dogs.jpg'
        )
      ],
      [
        new Review(
          1,
          'https://www.bendigoregion.com.au/sites/default/files/2021-05/brett_whiteley_greg_dogs.jpg',
          'vista',
          'esta es uan review'
        ),
        new Review(
          2,
          'https://www.bendigoregion.com.au/sites/default/files/2021-05/brett_whiteley_greg_dogs.jpg',
          'vista',
          'esta es uan review'
        )
      ]
    )).toBeTruthy();
  });
});
