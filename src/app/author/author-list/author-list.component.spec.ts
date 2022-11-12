import { ComponentFixture, TestBed } from '@angular/core/testing';
import {HttpClientModule} from "@angular/common/http";
import { AuthorListComponent } from './author-list.component';
import {AuthorService} from "../author.service";
import {RouterTestingModule} from "@angular/router/testing";

describe('AuthorListComponent', () => {
  let component: AuthorListComponent;
  let fixture: ComponentFixture<AuthorListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule],
      declarations: [ AuthorListComponent ],
      providers: [ AuthorService ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
