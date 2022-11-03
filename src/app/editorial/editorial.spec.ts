import { Editorial } from './editorial';

describe('Editorial', () => {
  it('should create an instance', () => {
    expect(new Editorial(
      1,
      'pasos de gigante'
    )).toBeTruthy();
  });
});
