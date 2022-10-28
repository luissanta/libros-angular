import { Component, OnInit } from '@angular/core';
import { Book } from "../book";
import { BookService } from "../book.service";

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  constructor(private bookService: BookService) { }

  books: Array<Book> = []

  getBooks(): void {
    this.bookService.getBooks().subscribe((books) => {
      this.books = books
    })
  }

  ngOnInit(): void {
    this.getBooks()
  }
}
