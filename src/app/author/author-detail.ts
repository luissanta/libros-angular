import { Author } from "./author";

export class AuthorDetail extends Author {

  constructor(
    id: number,
    name: string,
    birthDate: string,
    description: string,
    image: string
  ) {
    super(id, name, birthDate, description, image)
  }
}
