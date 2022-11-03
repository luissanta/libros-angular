import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BookDetailComponent } from './book-detail.component';
import { Author } from "../../author/author";
import { Editorial } from "../../editorial/editorial";
import { BookDetail } from "../book-detail";

describe('BookDetailComponent', () => {
  let component: BookDetailComponent;
  let fixture: ComponentFixture<BookDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookDetailComponent);
    component = fixture.componentInstance;

    const editorial = new Editorial(
      1,
      'name'
    );

    const authors: Author[] = [];
    for (let i = 0; i < 3; i++) {
      const author = new Author (
        1,
        'hola',
        'hola',
        'hola',
        'hola',
      );
      authors.push(author);
    }
    component.bookDetail= new BookDetail(
      1,
      'faker.lorem.sentence()',
      'faker.lorem.sentence()',
      'aker.lorem.sentence()',
      'faker.image.imageUrl()',
      'faker.date.past()',
      editorial,
      authors,
      []
    );
    fixture.detectChanges();
  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
