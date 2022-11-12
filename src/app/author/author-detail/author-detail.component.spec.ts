import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthorDetailComponent } from './author-detail.component';
import {HttpClientModule} from "@angular/common/http";
import {RouterTestingModule} from "@angular/router/testing";
import {BookService} from "../../book/book.service";

describe('AuthorDetailComponent', () => {
  let component: AuthorDetailComponent;
  let fixture: ComponentFixture<AuthorDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule],
      declarations: [ AuthorDetailComponent ],
      providers: [ BookService ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
