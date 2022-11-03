export class Author {
  id: number;
  name: string;
  birthDate: string;
  description: string;
  image: string;

  constructor(
    id: number,
    name: string,
    birthDate: string,
    description: string,
    image: string,
  ) {
    this.id = id;
    this.name = name;
    this.birthDate = birthDate;
    this.description = description;
    this.image = image;
  }
}
