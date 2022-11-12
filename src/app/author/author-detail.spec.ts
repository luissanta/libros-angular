import { AuthorDetail } from './author-detail';

describe('AuthorDetail', () => {
  it('should create an instance', () => {
    expect(new AuthorDetail(
      1,
      'hola',
      '120',
      'dsgdsg',
      'dfghgf'
    )).toBeTruthy();
  });
});
